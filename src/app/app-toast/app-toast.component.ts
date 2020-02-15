import { Component, OnInit } from '@angular/core';
import { AppToastService } from '../services/app-toast.service';

@Component({
  selector: 'app-app-toast',
  templateUrl: './app-toast.component.html',
  styleUrls: ['./app-toast.component.css']
})
export class AppToastComponent implements OnInit {

  constructor(public toastService: AppToastService) { }

  ngOnInit() {
  }

}
