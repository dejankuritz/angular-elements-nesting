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
    if (!customElements.get('ne-form')) {
      const element = createCustomElement(FormElementComponent, {injector});
      customElements.define('ne-form', element);
    }
  }

  ngDoBootstrap() {
  }
}
