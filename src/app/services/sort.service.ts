import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  private sortOptionSubject = new BehaviorSubject<string>('newest');
  sortOption$: Observable<string> = this.sortOptionSubject.asObservable();

  setSortOption(option: string) {
    this.sortOptionSubject.next(option);
  }
}
