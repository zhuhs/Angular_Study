import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, Inject } from '@angular/core';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@shared/shared.module';
import { AppComponent } from './app.component';
import { PageRoutingModule } from './pages/page-routing.module';
import { LayoutModule } from './layout/layout.module';
import { environment } from 'src/environments/environment';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', `.json?time=${new Date().getTime()}`);
}


export function LocaleIdFactory() {
  return navigator.language;
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    LayoutModule,
    PageRoutingModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useFactory: LocaleIdFactory
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private i18n: TranslateService, @Inject(LOCALE_ID) locale: string) {
    if (environment.supportedLocale.indexOf(locale) === -1) {
      locale = 'en-US';
    }
    this.i18n.use(locale);
  }

}
