import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { FromEventComponent } from './from-event/from-event.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { MapComponent } from './map/map.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PluckComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcetMapComponent } from './concet-map/concet-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { SkipwhileComponent } from './skipwhile/skipwhile.component';
import { SkipComponent } from './skip/skip.component';
import { FormatingInterceptor } from './interceptor/formating responce/formating.interceptor';
import { TimeingInterceptor } from './interceptor/API timing/timeing.interceptor';
import { LoggingInterceptor } from './interceptor/HTTP Header Interceptor/logging.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptor/loader.interceptor';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@NgModule({
  declarations: [
    AppComponent,
    AsyncAwaitComponent,
    FromEventComponent,
    BackButtonComponent,
    IntervalTimerComponent,
    OfFromComponent,
    ToArrayComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeComponent,
    MergeMapComponent,
    ConcetMapComponent,
    SwitchMapComponent,
    SkipwhileComponent,
    SkipComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule.forRoot(),
    ProgressSpinnerModule

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:TimeingInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:FormatingInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:FormatingInterceptor,multi:true},
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
    
  ],                                                      
  bootstrap: [AppComponent]
})
export class AppModule { }
