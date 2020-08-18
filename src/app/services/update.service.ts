import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  private $selectedIndex = new BehaviorSubject<number>(0);
  selectedIndex$ = this.$selectedIndex.asObservable();

  constructor() {}

  updateDataSource(input: number) {
    this.$selectedIndex.next(input);
  }
}
