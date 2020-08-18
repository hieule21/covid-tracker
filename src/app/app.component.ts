import { UpdateService } from './services/update.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  selectedIndex: number = 0;

  constructor(private _update: UpdateService) {}

  ngOnInit() {
    this._update.selectedIndex$.subscribe(
      (selectedIndex) => (this.selectedIndex = selectedIndex)
    );
  }
}
