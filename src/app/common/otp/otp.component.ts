import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements AfterViewInit {
  list: string[] = [];
  @Input()
  set length(val: number) {
    this.list = [];
    for (let i = 0; i < val; i++) {
      this.list.push(`${i}`);
    }
  }
  @Input() control!: FormControl<string>;
  @Output() fill: EventEmitter<string> = new EventEmitter();
  constructor(private elRef: ElementRef) {}
  ngAfterViewInit(): void {
    const parent = this.elRef.nativeElement as HTMLElement;
    this.focus(parent.children.item(0) as HTMLInputElement);
  }
  onKeyUpHandler(e: KeyboardEvent) {
    const target = e.target as HTMLInputElement;
    // console.info(e);
    if (e.code === 'Backspace') {
      // console.info(target.value);
      if (!target.value) {
        const prev = target.previousElementSibling as HTMLInputElement;
        if (prev) {
          prev.setSelectionRange(-1, -1);
          prev.focus();
          e.preventDefault();
        }
      } else {
        this.focus(target);
      }
    } else if (e.code === 'ArrowLeft') {
      const prev = target.previousElementSibling as HTMLInputElement;
      if (prev) {
        this.focus(prev);
      }
    } else if (e.code === 'ArrowRight') {
      const next = target.nextElementSibling as HTMLInputElement;
      if (next) {
        this.focus(next);
      }
    }
  }
  onInputHandler(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.value) {
      const next = target.nextElementSibling as HTMLInputElement;
      if (next) {
        this.focus(next);
      }
    }
    if (this.control) {
      this.control.setValue(this.getValue(target.parentElement as HTMLElement));
    }
    setTimeout(() => {
      if (this.control && this.control?.valid) {
        this.fill.emit(this.control.value);
      }
    });
  }
  onPasteHandler(e: ClipboardEvent) {
    const data = e.clipboardData?.getData('text/plain');
    if (data) {
      const val = data.slice(0, 6);
      this.setValue(
        (e.target as HTMLElement).parentElement as HTMLElement,
        val
      );
    }
  }
  getValue(parent: HTMLElement) {
    let value = '';
    for (let i = 0; i < parent.childElementCount; i++) {
      value += (parent.children.item(i) as HTMLInputElement).value;
    }
    return value;
  }
  setValue(parent: HTMLElement, value: string) {
    const val = value.split('');
    for (let i = 0; i < parent.childElementCount; i++) {
      const el = parent.children.item(i) as HTMLInputElement;
      el.value = val[i] ?? '';
      // if (!el.value || i === val.length - 1) {
      //   this.focus(el.previousElementSibling as HTMLInputElement);
      // }
    }
  }
  focus(el: HTMLInputElement) {
    el.setSelectionRange(-1, -1);
    setTimeout(() => el.focus());
  }
  onBlurHandler(event: FocusEvent) {
    setTimeout(() => {
      const target = event.target as HTMLInputElement;
      const parent = target.parentElement;
      const active = document.activeElement;
      if (!active || !parent?.isSameNode(active.parentElement)) {
        this.focus(target);
      }
    });
  }
}
