import { Injectable } from '@angular/core';

interface Alert {
  type: string;
  message: string;
  autoHide: boolean;
  interval?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alerts: Alert[] = [];


  constructor() { }

  // Method for adding alert (push) to alerts array:
  add(alert: Alert) {
    this.alerts.push(alert);
    if (alert.autoHide) {
      setTimeout(() => {                  // setTimeout is window function. That takes a call back function. It does not take any parameter.
      }, alert.interval || 5 * 1000);     // either it takes an default alert.interval or it takes 5*1000 (5 seconds).
    }
  }

  // Method for removing alert (splice) from alerts array.
  remove(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}
