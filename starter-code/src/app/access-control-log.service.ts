import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logMessages: any[] = [
    {
      person:     "Robert",
      message:    "Good Work!",
      createdAt:  "12/6/2017"
    },
  ]

  constructor() { }

  getAccessLog() {
    return this.logMessages;
  }

  addAccessItem(message: any) {
    const lastIndex = this.logMessages.length - 1;
    const lastContact = this.logMessages[lastIndex];

    this.logMessages.push(message);
  }

}
