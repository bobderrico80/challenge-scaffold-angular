import { Component } from '@angular/core';
import { ChorusService } from '../../services/chorus.service';
import { combineLatest, map, startWith, tap } from 'rxjs';
import { FormControl } from '@angular/forms';

const DEFAULT_PAGE_TITLE = 'All Choruses';

@Component({
  selector: 'app-chorus',
  templateUrl: './chorus.component.html',
  styleUrls: ['./chorus.component.css'],
})
export class ChorusComponent {
  pageTitle = DEFAULT_PAGE_TITLE;

  choruses$ = this.chorusService.getChoruses();

  locations$ = this.choruses$.pipe(
    map((choruses) => {
      return new Set(
        choruses.map(
          (chorus) => `${chorus.location.city}, ${chorus.location.state}`
        )
      );
    })
  );

  filterControl = new FormControl('');

  filteredChoruses$ = combineLatest([
    this.choruses$,
    this.filterControl.valueChanges.pipe(startWith(null)),
  ]).pipe(
    tap(([_, filterValue]) => {
      if (!filterValue) {
        this.pageTitle = DEFAULT_PAGE_TITLE;
      } else {
        this.pageTitle = `Choruses in ${filterValue}`;
      }
    }),
    map(([choruses, filterValue]) => {
      if (!filterValue) {
        return choruses;
      }

      return choruses.filter((chorus) => {
        const [city, state] = filterValue.split(',').map((part) => part.trim());

        return chorus.location.city === city && chorus.location.state === state;
      });
    })
  );

  constructor(private readonly chorusService: ChorusService) {}
}
