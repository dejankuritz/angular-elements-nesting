import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';

import {TextFieldElementComponent} from './text-field/text-field-element.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    TextFieldElementComponent
  ],
  entryComponents: [
    TextFieldElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

  constructor(injector: Injector) {
    if (!customElements.get('ne-text-field')) {
      const custom = createCustomElement(TextFieldElementComponent, {injector});
      customElements.define('ne-text-field', custom);
    }
  }

  ngDoBootstrap() {
  }
}
