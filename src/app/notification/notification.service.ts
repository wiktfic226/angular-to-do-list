import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { AlertComponent, AlertState } from '../alert/alert/alert.component';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private overlay: Overlay) {}

  replaced: boolean = false;

  overlayRef = this.overlay.create({
    positionStrategy: this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically(),
  });

  renderNotification(message: string, alertState: AlertState) {
    if(this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
      this.replaced = true;
    }
    const componentRef = this.overlayRef.attach(new ComponentPortal(AlertComponent));
    componentRef.instance.message = message;
    componentRef.instance.state = alertState;
    this.destroyNotification();
  }

  destroyNotification() {
    return new Promise(() => {
      setTimeout(() => {
        if(this.replaced !== true) 
          this.overlayRef.detach();
        else {
          clearTimeout();
          this.replaced = false;
        }
      }, 2000);
    });
  }
}
