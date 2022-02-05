import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  title: string = 'Pay Calculator';

  // input
  hoursWorked;
  hourlyRate;

  // output
  regularPay = 0;
  overtimePay = 0;
  totalPay = 0;
  tax = 0;
  netPay = 0; // cash in hand

  constructor() {}

  ngOnInit(): void {}

  calculatePay() {
    console.log('@calculatePay', this.hoursWorked, this.hourlyRate);

    if (!this.hourlyRate || !this.hourlyRate) {
      console.log('Enter Params');
      return;
    }

    if (this.hoursWorked <= 40) {
      this.regularPay = this.hoursWorked * this.hourlyRate;
      this.overtimePay = 0; // no overtime at all
    } else {
      // more than 40hrs
      this.regularPay = 40 * this.hourlyRate;
      this.overtimePay = (this.hoursWorked - 40) * this.hourlyRate * 1.5;
    }

    // common checks for both type
    this.totalPay = this.regularPay + this.overtimePay;
    this.tax = this.totalPay * 0.18;
    this.netPay = this.totalPay - this.tax;
  }
}
