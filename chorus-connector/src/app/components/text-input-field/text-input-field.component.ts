import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input-field',
  templateUrl: './text-input-field.component.html',
  styleUrls: ['./text-input-field.component.css'],
})
export class TextInputFieldComponent {
  @Input() label!: string;
  @Input() type = 'text';
  @Input() control!: FormControl;
}
