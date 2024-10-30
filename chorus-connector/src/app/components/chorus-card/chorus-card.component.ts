import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Chorus } from '../../models/chorus.model';

@Component({
  selector: 'app-chorus-card',
  templateUrl: './chorus-card.component.html',
  styleUrls: ['./chorus-card.component.css'],
})
export class ChorusCardComponent {
  @Input() chorus!: Chorus;
  @Input() admin = false;

  @Output() edit = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  editClick() {
    this.edit.emit(this.chorus.id);
  }

  deleteClick() {
    this.delete.emit(this.chorus.id);
  }
}
