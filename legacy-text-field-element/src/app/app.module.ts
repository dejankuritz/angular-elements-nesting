import {BrowserModule} from '@angular/platform-browser';
import {APP_ID, CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';

import {createCustomElement} from '@angular/elements';
import {LegacyTextFieldElementComponent} from './legacy-text-field-element/legacy-text-field-element.component';

@NgModule({
  declarations: [
    LegacyTextFieldElementComponent
  ],
  entryComponents: [
    LegacyTextFieldElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: APP_ID, useValue: 'ne-legacy-text-field-element'}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

  constructor(injector: Injector) {
    if (!customElements.get('ne-legacy-text-field')) {
      const element = createCustomElement(LegacyTextFieldElementComponent, {injector});
      customElements.define('ne-legacy-text-field', element);
    }
  }

  ngDoBootstrap() {
  }
}
