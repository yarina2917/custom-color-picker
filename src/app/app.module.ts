import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { CustomColorPickerComponent } from './custom-color-picker/custom-color-picker.component';

import { ColorPickerModule } from '@stebneruslan/ngx-color-picker';

@NgModule({
  declarations: [
    CustomColorPickerComponent
  ],
  imports: [
    BrowserModule,
    ColorPickerModule
  ],
  entryComponents: [CustomColorPickerComponent],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {
    const custom = createCustomElement(CustomColorPickerComponent, { injector });
    customElements.define('app-custom-color-picker', custom);
  }
  ngDoBootstrap() {}
}
