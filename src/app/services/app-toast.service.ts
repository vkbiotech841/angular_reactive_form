import { Injectable } from '@angular/core';

// Property of ToastInfo are grouped together
export interface ToastInfo {
  header: string;
  body: string;
  delay?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AppToastService {
  // Type of ToastInfo is defined as toasts method and consided as empty array
  toasts: ToastInfo[] = [];

  constructor() { }

  // Show method is defined.
  show(toast: ToastInfo) {
    this.toasts.push(toast);
  }
  // Remove method is defined.
  remove(toast: ToastInfo) {
    this.toasts = this.toasts.filter(t => t != toast);
  }
}
