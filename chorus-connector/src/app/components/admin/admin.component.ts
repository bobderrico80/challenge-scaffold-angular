import { Component } from '@angular/core';
import { ChorusService } from '../../services/chorus.service';
import { MatDialog } from '@angular/material/dialog';
import {
  DialogData,
  DialogResult,
  EditChorusModalComponent,
} from '../edit-chorus-modal/edit-chorus-modal.component';
import { take } from 'rxjs';
import { Chorus, ChorusApiRequest } from '../../models/chorus.model';

const MODAL_STYLES = {
  width: '95%',
  maxWidth: '500px',
  height: '95%',
  maxHeight: '650px',
};

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  choruses$ = this.chorusService.getChoruses();

  constructor(
    private readonly chorusService: ChorusService,
    private readonly dialog: MatDialog
  ) {}

  addChorus() {
    this.dialog
      .open<EditChorusModalComponent, DialogData>(EditChorusModalComponent, {
        data: { mode: 'add' },
        ...MODAL_STYLES,
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe((dialogResult: DialogResult) => {
        if (dialogResult) {
          this.chorusService.addChorus(
            this.mapDialogResultToChorusRequest(dialogResult)
          );
        }
      });
  }

  editChorus(id: string) {
    this.choruses$.pipe(take(1)).subscribe((choruses: Chorus[]) => {
      const chorus = choruses.find((chorus) => chorus.id === id);

      if (!chorus) {
        return;
      }

      this.dialog
        .open<EditChorusModalComponent, DialogData>(EditChorusModalComponent, {
          data: {
            mode: 'edit',
            initialData: {
              name: chorus.name,
              description: chorus.description,
              contactEmail: chorus.contactEmail,
              city: chorus.location.city,
              state: chorus.location.state,
            },
          },
          ...MODAL_STYLES,
        })
        .afterClosed()
        .pipe(take(1))
        .subscribe((dialogResult: DialogResult) => {
          if (dialogResult) {
            this.chorusService.updateChorus(
              id,
              this.mapDialogResultToChorusRequest(dialogResult)
            );
          }
        });
    });
  }

  deleteChorus(id: string) {
    const confirmResult = window.confirm(
      'Are you sure you want to delete this chorus?'
    );

    if (confirmResult) {
      this.chorusService.deleteChorus(id);
    }
  }

  private mapDialogResultToChorusRequest(
    dialogResult: DialogResult
  ): ChorusApiRequest {
    return {
      name: dialogResult.name,
      description: dialogResult.description,
      contactEmail: dialogResult.contactEmail,
      location: {
        city: dialogResult.city,
        state: dialogResult.state,
      },
    };
  }
}
