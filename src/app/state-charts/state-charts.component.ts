import { USData } from './../models/dataModel';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { forkJoin } from 'rxjs';
import { UpdateService } from '../services/update.service';
import { DataFetcherService } from '../services/data-fetcher.service';
import stateAbbreviations from 'states-abbreviations';

@Component({
  selector: 'app-state-charts',
  templateUrl: './state-charts.component.html',
  styleUrls: ['./state-charts.component.css'],
})
export class StateChartsComponent implements OnInit {
  //State-Charts
  stateData: USData = {
    positive: 0,
    negative: 0,
    totalTestResults: 0,
    hospitalized: 0,
    recovered: 0,
    death: 0,
    dateChecked: new Date(),
    state: '',
  };

  public barChartData: ChartDataSets[] = [
    {
      data: [0, 0, 0],
      label: 'None',
    },
  ];
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    animation: {
      duration: 1000,
      easing: 'linear',
    },
  };
  public barChartLabels: Label[] = ['Recovered', 'Hospitalized', 'Death'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
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
        //Fetch State-Charts
        this.stateData = {
          ...this.stateData,
          positive: res[1][selectedIndex].positive,
          negative: res[1][selectedIndex].negative,
          totalTestResults: res[1][selectedIndex].totalTestResults,
          hospitalized: res[1][selectedIndex].hospitalized,
          death: res[1][selectedIndex].death,
          recovered: res[1][selectedIndex].recovered,
          state: stateAbbreviations[res[1][selectedIndex].state],
        };
        this.barChartData = [
          {
            barThickness: 50,
            data: [
              this.stateData.recovered,
              this.stateData.hospitalized,
              this.stateData.death,
            ],

            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          },
        ];
      });
    });
  }
}
