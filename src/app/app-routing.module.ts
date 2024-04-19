import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { FilterComponent } from './filter/filter.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { MapComponent } from './map/map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { OfFromComponent } from './of-from/of-from.component';
import { PluckComponent } from './pluck/pluck.component';
import { RetryComponent } from './retry/retry.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { TakeComponent } from './take/take.component';
import { TapComponent } from './tap/tap.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { SkipwhileComponent } from './skipwhile/skipwhile.component';
import { SkipComponent } from './skip/skip.component';

const routes: Routes = [
  {path:'async', component:AsyncAwaitComponent},
  {path:'fromevent',component:FromEventComponent},
  {path:'backButton',component:BackButtonComponent},
  {path:'interval',component:IntervalTimerComponent},
  {path:'of-from',component:OfFromComponent},
  {path:'toarray',component:ToArrayComponent},
  {path:'map',component:MapComponent},
  {path:'pluck',component:PluckComponent},
  {path:'filter',component:FilterComponent},
  {path:'tap',component:TapComponent},
  {path:'take',component:TakeComponent},
  {path:'retry',component:RetryComponent},
  {path:'debounceTime',component:DebounceTimeComponent},
  {path:'mergeMap',component:MergeMapComponent},
  {path:'switchMap',component:SwitchMapComponent},
  {path:'skip',component:SkipComponent},
  {path:'skipwhile',component:SkipwhileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
