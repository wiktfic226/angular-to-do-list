import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

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

  @Input() text!: string;
  @Input() state!: AlertState;
  alertState = AlertState;
  constructor() { }

  ngOnInit(): void {
  }

  isSuccess() : boolean {
    return this.state === AlertState.Success;
  }

  getStateAsString() {
    return AlertState[this.state];
  }
}

