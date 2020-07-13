import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SecretRouteComponent } from './secret-route.component';
import { ComponentsModule } from 'projects/ngx-ch-utils/src/lib/components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    SecretRouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
