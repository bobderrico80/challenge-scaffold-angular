import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  mode: 'edit' | 'add';
  initialData?: DialogResult;
}

export interface DialogResult {
  name: string;
  description: string;
  contactEmail: string;
  city: string;
  state: string;
}

@Component({
  selector: 'app-edit-chorus-modal',
  templateUrl: './edit-chorus-modal.component.html',
  styleUrls: ['./edit-chorus-modal.component.css'],
})
export class EditChorusModalComponent {
  editMode = this.data.mode === 'edit';
  modalTitle = this.editMode ? 'Edit Chorus' : 'Add Chorus';
  saveButtonText = this.editMode ? 'Save' : 'Add';

  form = new FormGroup({
    name: new FormControl(
      this.data.initialData?.name ?? '',
      Validators.required
    ),
    description: new FormControl(
      this.data.initialData?.description ?? '',
      Validators.required
    ),
    contactEmail: new FormControl(
      this.data.initialData?.contactEmail ?? '',
      Validators.required
    ),
    city: new FormControl(
      this.data.initialData?.city ?? '',
      Validators.required
    ),
    state: new FormControl(
      this.data.initialData?.state ?? '',
      Validators.required
    ),
  });

  constructor(
    private readonly dialogRef: MatDialogRef<EditChorusModalComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly data: DialogData
  ) {}

  cancel() {
    this.dialogRef.close();
  }

  submitForm() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}
