import { Component, OnInit, Input, OnDestroy, HostBinding, ElementRef, Renderer2 } from '@angular/core';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs';
import { NgControl } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-input-files',
  templateUrl: './input-files.component.html',
  styleUrls: ['./input-files.component.scss'],
  providers: [{provide: MatFormFieldControl, useExisting: InputFilesComponent}]
})
export class InputFilesComponent implements MatFormFieldControl<FileList>, OnDestroy {
  static nextId = 0;
  @HostBinding() id = `file-${InputFilesComponent.nextId++}`;
  private _data: FileList = null;
  get dataText(): string {
    if (this._data) {
      const value = [];
      for (let i = 0; i < this._data.length; i++) {
        value.push(this._data.item(i).name);
      }
      return value.join();
    }
    return '';
  }
  stateChanges: Subject<void> = new Subject();
  errorState = false;
  @Input()
  get value() {
    return this._data;
  }
  set value(data: FileList) {
    this._data = data;
    this.stateChanges.next();
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
  ngControl: NgControl = null;
  focused = false;
  @HostBinding('class.floating')
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }
  private _required = false;
  @Input()
  get required() {
    return this._required;
  }
  set required(req) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }
  private _disabled = false;
  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(dis) {
    this._disabled = coerceBooleanProperty(dis);
    this.stateChanges.next();
  }
  controlType = 'app-input-files';
  @HostBinding('attr.aria-describedby') describedBy = '';

  private _filesElement: HTMLInputElement;
  constructor(
    private fm: FocusMonitor,
    private elRef: ElementRef<HTMLElement>,
    renderer: Renderer2
    ) {
      fm.monitor(elRef.nativeElement, true).subscribe(origin => {
        this.focused = !!origin;
        this.stateChanges.next();
      });
      this._filesElement = renderer.createElement('input');
      renderer.setProperty(this._filesElement, 'type', 'file');
      renderer.setProperty(this._filesElement, 'multiple', true);
    }
    get empty() {
      return !this._data;
    }
    setDescribedByIds(ids: string[]) {
      this.describedBy = ids.join(' ');
    }
  onContainerClick(event: MouseEvent) {
    if (!this.focused) {
      const self = this;
      this.focused = true;
      this._filesElement.addEventListener('change', function listener(_event: any) {
        self._data = self._filesElement.files;
        self.stateChanges.next();
        self._filesElement.removeEventListener('change', listener);
      });
      this._filesElement.click();
      window.addEventListener('mousedown', function listener(_event: MouseEvent) {
        self.focused = false;
        window.removeEventListener('mousedown', listener, true);
      }, true);
    }
  }
  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef.nativeElement);
  }
}
