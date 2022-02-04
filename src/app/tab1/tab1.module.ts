import { IonicModule } from '@ionic/angular';
import { NgModule, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
  ],
  declarations: [Tab1Page],
})
export class Tab1PageModule implements OnInit {
  // title: string = 'Pay Calculatorr';
  // title = 'Pay Calculatorrr';

  // input
  hoursWorked;
  hourlyRate;

  // output
  hourlyPay;
  regularPay;
  overtimePay;
  totalPay;
  tax;

  constructor() {}

  ngOnInit(): void {}

  calculatePay() {
    console.log('@calculatePay');
    // console.log(this.hoursWorked);
    // console.log(this.hourlyRate);

    // this.hourlyPay = this.hourlyRate;
  }
}
