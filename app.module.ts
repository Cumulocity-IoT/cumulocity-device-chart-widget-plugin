import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule as ngRouterModule } from '@angular/router';
import {
  BootstrapComponent,
  CoreModule, RouterModule
} from '@c8y/ngx-components';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GpLibDeviceChartModule } from './widget/gp-lib-device-chart.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ngRouterModule.forRoot([], { enableTracing: false, useHash: true }),
    RouterModule.forRoot(),
    CoreModule.forRoot(),
    GpLibDeviceChartModule
  ],
  providers: [
    BsModalRef
  ],
  bootstrap: [BootstrapComponent]
})
export class AppModule {}
