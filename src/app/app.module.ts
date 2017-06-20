import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { BigridComponent } from './bigrid/bigrid.component';
import { SRTDataService } from './service/SRTDataService';
import { Configuration } from './service/Configuration';

@NgModule({
  declarations: [
    AppComponent,
    BigridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ButtonsModule,
    GridModule
  ],
  providers: [
    SRTDataService,
    Configuration
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
