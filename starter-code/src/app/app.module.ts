import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccessControlLogService } from './access-control-log.service';

import { AppComponent } from './app.component';
import { LogFromComponent } from './log-from/log-from.component';

@NgModule({
  declarations: [
    AppComponent,
    LogFromComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccessControlLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
