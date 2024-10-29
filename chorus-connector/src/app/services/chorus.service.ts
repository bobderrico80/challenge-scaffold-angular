import { Injectable } from '@angular/core';
import data from '../../../data.json';
import { Chorus, ChorusApiRequest } from '../models/chorus.model';
import { BehaviorSubject } from 'rxjs';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ChorusService {
  private readonly choruses$: BehaviorSubject<Chorus[]>;

  constructor() {
    this.choruses$ = new BehaviorSubject<Chorus[]>(data.choruses);
  }

  getChoruses() {
    return this.choruses$;
  }

  addChorus(request: ChorusApiRequest) {
    this.choruses$.next([
      ...this.choruses$.getValue(),
      { ...request, id: this.getRandomId() },
    ]);
  }

  updateChorus(id: string, request: Partial<ChorusApiRequest>) {
    const choruses = this.choruses$.getValue();
    const foundChorus = this.findChorusById(id, choruses);

    Object.assign(foundChorus, request);

    this.choruses$.next(choruses);
  }

  deleteChorus(id: string) {
    const choruses = this.choruses$.getValue();
    const foundChorus = this.findChorusById(id, choruses);

    const updatedChoruses = choruses.filter(
      (chorus) => chorus.id !== foundChorus.id
    );

    this.choruses$.next(updatedChoruses);
  }

  private getRandomId() {
    return v4().replace(/-/g, '').substring(0, 24);
  }

  private findChorusById(id: string, choruses: Chorus[]) {
    const chorus = choruses.find((chorus) => chorus.id === id);

    if (!chorus) {
      throw new Error(`Chorus with ID ${id} not found`);
    }

    return chorus;
  }
}
