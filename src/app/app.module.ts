import { UpdateService } from './services/update.service';
import { DataFetcherService } from './services/data-fetcher.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DatePipe } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { MaterialModule } from './material/material.module';
import { CountUpModule } from 'ngx-countup';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ChartComponent } from './chart/chart.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StatePickerComponent } from './state-picker/state-picker.component';
import { StateChartsComponent } from './state-charts/state-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ChartComponent,
    StatePickerComponent,
    StateChartsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CountUpModule,
    NoopAnimationsModule,
    MaterialModule,
    ChartsModule,
  ],
  providers: [DatePipe, DataFetcherService, UpdateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
