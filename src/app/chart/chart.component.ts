import { DatePipe } from '@angular/common';
import { Label, Color } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { DailyData } from './../models/dataModel';
import { DataFetcherService } from './../services/data-fetcher.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  dailyPositive = [];
  dailyDeath = [];
  dailyRecovered = [];
  dailyHospitalized = [];
  dailyDateChecked = [];

  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  lineChartLegend = true;
  lineChartType = 'line';
  lineChartData: ChartDataSets[] = [
    {
      data: this.dailyPositive,
      label: 'Positive',
      borderJoinStyle: 'miter',
      borderDashOffset: 5,
    },
    { data: this.dailyRecovered, label: 'Recovered' },
    { data: this.dailyHospitalized, label: 'Hospitalized' },
    { data: this.dailyDeath, label: 'Death' },
  ];

  lineChartLabels: Label[] = this.dailyDateChecked;
  public lineChartColors: Color[] = [
    //Positive
    {
      backgroundColor: 'transparent',
      borderColor: 'orange',
      pointBackgroundColor: '#fff3e0',
      pointBorderColor: 'orange',
      pointHoverBackgroundColor: '#fff3e0',
      pointHoverBorderColor: 'orange',
      pointRadius: 2,
    },
    //Recovered
    {
      backgroundColor: 'transparent',
      borderColor: 'green',
      pointBackgroundColor: '#fff3e0',
      pointBorderColor: 'green',
      pointHoverBackgroundColor: '#fff3e0',
      pointHoverBorderColor: 'green',
      pointRadius: 2,
    },
    //Hospitalized
    {
      backgroundColor: 'transparent',
      borderColor: 'blue',
      pointBackgroundColor: '#fff3e0',
      pointBorderColor: 'blue',
      pointHoverBackgroundColor: '#fff3e0',
      pointHoverBorderColor: 'blue',
      pointRadius: 2,
    },
    //Death
    {
      backgroundColor: 'transparent',
      borderColor: 'red',
      pointBackgroundColor: '#fff3e0',
      pointBorderColor: 'red',
      pointHoverBackgroundColor: '#fff3e0',
      pointHoverBorderColor: 'red',
      pointRadius: 2,
    },
  ];

  constructor(
    private _dataFetcher: DataFetcherService,
    public datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this._dataFetcher.getDailyData().subscribe((data: DailyData[]) => {
      data.reverse();
      data.map((element: DailyData) => {
        this.dailyPositive.push(element.positive);
        this.dailyDeath.push(element.death);
        this.dailyRecovered.push(element.recovered);
        this.dailyHospitalized.push(element.hospitalized);
        this.dailyDateChecked.push(
          this.datePipe.transform(element.dateChecked, 'MM/dd/yyyy')
        );
      });
    });
  }
}
