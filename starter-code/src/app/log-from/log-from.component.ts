import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../access-control-log.service';

@Component({
  selector: 'app-log-from',
  templateUrl: './log-from.component.html',
  styleUrls: ['./log-from.component.css']
})
export class LogFromComponent implements OnInit {

  message: any = {}

  constructor(private messageThang: AccessControlLogService) { }

  ngOnInit() {
  }

  logSubmit() {
    console.log("add a log")
  //  use the service method to add a message
    this.messageThang.addAccessItem(this.message);
    //reset the form
    this.message = {};
  }
}
