import { TestBed } from '@angular/core/testing';

import { ChorusService } from './chorus.service';
import { firstValueFrom } from 'rxjs';

describe('ChorusService', () => {
  let service: ChorusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChorusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getChoruses() method', () => {
    it('returns an observable containing all persisted choruses', async () => {
      const result = await firstValueFrom(service.getChoruses());
      expect(result.length).toEqual(20);
    });
  });

  describe('addChorus() method', () => {
    it('adds the provided chorus to the end of the persisted choruses', async () => {
      service.addChorus({
        name: "Philadelphia Gay Men's Chorus",
        description: "Philly's premier LGBTQ+ TTBB Chorus",
        contactEmail: 'info@pgmc.org',
        location: {
          city: 'Philadelphia',
          state: 'PA',
        },
      });

      const result = await firstValueFrom(service.getChoruses());
      expect(result.length).toEqual(21);
      expect(result[20].name).toEqual("Philadelphia Gay Men's Chorus");
    });
  });

  describe('updateChorus() method', () => {
    it('partially updates an existing chorus by ID', async () => {
      const choruses = await firstValueFrom(service.getChoruses());
      const chorusToUpdate = choruses[7];
      service.updateChorus(chorusToUpdate.id, { name: 'Foo' });

      const updatedChoruses = await firstValueFrom(service.getChoruses());
      expect(updatedChoruses[7].id).toEqual(chorusToUpdate.id);
      expect(updatedChoruses[7].name).toEqual('Foo');
    });

    it('throws an error when an invalid ID is passed in', () => {
      expect((): void => {
        service.updateChorus('abc123', { name: 'Foo' });
      }).toThrow(new Error('Chorus with ID abc123 not found'));
    });
  });

  describe('deleteChorus() method', () => {
    it('deletes an existing chorus by ID', async () => {
      const choruses = await firstValueFrom(service.getChoruses());
      const chorusToDelete = choruses[9];
      service.deleteChorus(chorusToDelete.id);

      const updatedChoruses = await firstValueFrom(service.getChoruses());
      expect(updatedChoruses.length).toEqual(19);
      expect(updatedChoruses.map((chorus) => chorus.id)).not.toContain(
        chorusToDelete.id
      );
    });

    it('throws an error when an invalid ID is passed in', () => {
      expect((): void => {
        service.deleteChorus('abc123');
      }).toThrow(new Error('Chorus with ID abc123 not found'));
    });
  });
});
