import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Inject, Input, OnInit } from '@angular/core';

export enum AlertState {
  Success,
  Error,
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  message: string = "Task";
  state: AlertState = AlertState.Success;
  alertState = AlertState;
  // constructor(@Inject('message') message: string, state: AlertState) { 
  //   this.message = message;
  //   this.state = state;
  // }

  constructor() {   }

  ngOnInit(): void {
  }

  isSuccess() : boolean {
    return this.state === AlertState.Success;
  }

  getStateAsString() {
    return AlertState[this.state];
  }
}

