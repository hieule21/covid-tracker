import { UpdateService } from './../services/update.service';
import { StatesData, StateOption } from './../models/dataModel';
import { DataFetcherService } from './../services/data-fetcher.service';
import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-state-picker',
  templateUrl: './state-picker.component.html',
  styleUrls: ['./state-picker.component.css'],
})
export class StatePickerComponent implements OnInit {
  states: Array<StateOption> = [];
  selectedIndex$ = this._update.selectedIndex$;

  constructor(
    private _dataFetcher: DataFetcherService,
    private _update: UpdateService
  ) {}

  ngOnInit(): void {
    this._dataFetcher.getStatesName().subscribe((data) => {
      this.states.push(new StateOption(0, 'The U.S'));

      data.map((element: StatesData, index: number) => {
        this.states.push(new StateOption(index + 1, element.state));
      });
    });
  }

  onSelectionChanged(event: MatSelectChange) {
    this._update.updateDataSource(Number(event.value));
  }
}
