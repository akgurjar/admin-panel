import { Component, OnInit, Input, OnDestroy, HostBinding, Optional, Self, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
  providers: [
    {provide: MatFormFieldControl, useExisting: TimeComponent}
  ]
})
export class TimeComponent implements MatFormFieldControl<Time | string>, OnDestroy {
  static nextId = 0;
  @HostBinding() id = `time-input-${TimeComponent.nextId++}`;
  stateChanges = new Subject<void>();
  @ViewChild('hoursInput') _focusRef: ElementRef<HTMLInputElement>;
  private _value : Time = null;
  @Input()
  get value(): Time | string {
    return this._value;
  }
  set value(val: Time | string) {
    if (typeof val === 'string') {
      this._value = new Time(parseTime(val));
      this.timeForm.setValue({
        hours: this._value.hours,
        minutes: this._value.minutes,
        timing: this._value.timing
      });
      this.stateChanges.next();
    } else if (val instanceof Time) {
      this._value = val;
      this.stateChanges.next();
    }
  }
  private _placeholder: string;
  @Input()
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }
  private _focused = false;
  get focused() {
    return this._focused;
  }
  set focused(value: boolean) {
    this._focused = value;
  }
  get empty() {
    let n = this.timeForm.value;
    return !n.hours && !n.minutes && !n.noon;
  }
  // handle floating of label
  @HostBinding('class.floating')
  get shouldLabelFloat() {
    return this._focused || !this.empty;
  }
  // handle required
  private _required = false;
  @Input()
  get required() {
    return this._required;
  }
  set required(req) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }
  // handle disable
  private _disabled = false;
  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(dis) {
    this._disabled = coerceBooleanProperty(dis);
    this.stateChanges.next();
  }

  errorState = false;
  controlType = 'app-time';
  ngControl;
  @HostBinding('attr.aria-describedby') describedBy = '';
  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }
  // value accessor
  writeValue(obj: any): void {
    console.log(obj);
  }
  registerOnChange(fn: any): void {
    console.log(fn);
  }
  registerOnTouched(fn: any): void {
    console.log(fn);
  }
  setDisabledState(isDisabled: boolean): void {}
  timeForm: FormGroup;
  constructor(
    // @Optional() @Self() public ngControl: NgControl,
    private _fm: FocusMonitor,
    private _elRef: ElementRef<HTMLElement>,
    fb: FormBuilder
  ) {
    _fm.monitor(_elRef.nativeElement, true).subscribe(origin => {
      this._focused = !!origin;
      this.stateChanges.next();
    });
    this.timeForm = fb.group({
      hours: [null],
      minutes: [null],
      timing: ['AM']
    });
    // if (this.ngControl != null) {
    //   // Setting the value accessor directly (instead of using
    //   // the providers) to avoid running into a circular import.
    //   this.ngControl.valueAccessor = this;
    // }
  }
  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() != 'input') {
      // this._elRef.nativeElement.querySelector('input').focus();
      this._focused = true;
      // if (this._focused) {
      //   console.log(this._focusRef.nativeElement.focus);
      //   this._focusRef.nativeElement.focus({preventScroll: true});
      // }
      this.stateChanges.next();
    }
  }
  onToggleTimingHandler() {
    const timing = this.timeForm.controls['timing'];
    if (timing.value === 'AM') {
      timing.setValue('PM');
    } else {
      timing.setValue('AM');
    }
  }
  ngOnDestroy() {
    this.stateChanges.complete();
    this._fm.stopMonitoring(this._elRef.nativeElement);
  }
}

function parseTime(val: string): [number, number, 'AM' | 'PM'] {
  const values = val.split(/:|\s/), timeLimit = values[2] ? 12 : 24;
  if ((values.length === 2) || (values.length === 3 && ['AM', 'PM'].indexOf(values[2]) !== -1)) {
    const hours = parseInt(values[0]), minutes = parseInt(values[1]);
    if (!isNaN(hours) && !isNaN(minutes) && minutes < 60 && hours < timeLimit) {
      return [hours, minutes, <'AM' | 'PM'>values[2]];
    }
  }
  throw(new Error(`Time parse error with ${val}`));
}

class Time {
  hours: number;
  minutes: number;
  timing: 'AM' | 'PM';
  constructor(values: [number, number, 'AM' | 'PM']) {
    this.hours = values[0];
    this.minutes = values[1];
    this.timing = values[2];
  }
  valueOf() {
    return new Date(`1970 01 01Z${this.toString()}`).getTime();
  }
  toString() {
    let value = `${this.hours}:${this.minutes}`;
    if (this.timing) {
      value+= ` ${this.timing}`;
    }
    return value;
  }
}
