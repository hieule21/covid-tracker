import { forkJoin } from 'rxjs';
import stateAbbreviations from 'states-abbreviations';
import { USData } from '../models/dataModel';
import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../services/update.service';
import { DataFetcherService } from '../services/data-fetcher.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  selectedIndex: number;
  //Card
  cardData: USData = {
    positive: 0,
    negative: 0,
    totalTestResults: 0,
    hospitalized: 0,
    recovered: 0,
    death: 0,
    dateChecked: new Date(),
    state: '',
  };
  constructor(
    private _dataFetcher: DataFetcherService,
    private _update: UpdateService
  ) {}

  ngOnInit(): void {
    this._update.selectedIndex$.subscribe((selectedIndex: number) => {
      forkJoin([
        this._dataFetcher.getUSData(),
        this._dataFetcher.getStatesData(),
      ]).subscribe((res) => {
        //Config fetched arrays

        res[1].unshift(res[0][0]);
        this.selectedIndex = selectedIndex;

        //Fetch cardData
        this.cardData = {
          ...this.cardData,
          positive: res[1][selectedIndex].positive,
          death: res[1][selectedIndex].death,
          recovered: res[1][selectedIndex].recovered,
          dateChecked: res[1][selectedIndex].dateChecked,
          state:
            selectedIndex !== 0
              ? stateAbbreviations[res[1][selectedIndex].state]
              : 'the U.S',
        };
      });
    });
  }
}
