import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';

import {FormElementComponent} from './form/form-element.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    FormElementComponent
  ],
  entryComponents: [
    FormElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

  constructor(injector: Injector) {
    const custom = createCustomElement(FormElementComponent, {injector});
    customElements.define('ne-form', custom);
  }

  ngDoBootstrap() {
  }
}
