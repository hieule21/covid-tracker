export class USData {
  positive: number;
  negative: number;
  totalTestResults: number;
  hospitalized: number;
  recovered: number;
  death: number;
  dateChecked: Date;
  state: string;
}

export class DailyData {
  positive: number;
  death: number;
  recovered: number;
  hospitalized: number;
  dateChecked: Date;
}

export class StateOption {
  value: number;
  viewValue: string;
  constructor(value: number, viewValue: string) {
    this.value = value;
    this.viewValue = viewValue;
  }
}

export class StatesData {
  state: string;
  positive: number;
  negative: number;
  recovered: number;
  death: number;
  dateCheck: Date;
}
