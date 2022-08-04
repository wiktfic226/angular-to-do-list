import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { AlertComponent, AlertState } from '../alert/alert/alert.component';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private overlay: Overlay) {}

  overlayRef = this.overlay.create({
    positionStrategy: this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically(),
  });

  renderNotification(message: string, alertState: AlertState) {
    const componentRef = this.overlayRef.attach(new ComponentPortal(AlertComponent));
    componentRef.instance.message = message;
    componentRef.instance.state = alertState;
    this.destroyNotification();
  }

  destroyNotification() {
    return new Promise(() => {
      setTimeout(() => {
        this.overlayRef.detach();
      }, 1800);
    });
  }
}
