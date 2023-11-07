import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SleepComponent } from './sleep/sleep.component';
import { HomeComponent } from './home/home.component';
import { StressComponent } from './stress/stress.component';
import { GriefComponent } from './grief/grief.component';
import { PhysicalHabitsComponent } from './physical-habits/physical-habits.component';
import { GratitudeMindfulnessComponent } from './gratitude-mindfulness/gratitude-mindfulness.component';
import { MeaningfulPersonalTimeComponent } from './meaningful-personal-time/meaningful-personal-time.component';

@NgModule({
  declarations: [
    AppComponent,
    SleepComponent,
    HomeComponent,
    StressComponent,
    GriefComponent,
    PhysicalHabitsComponent,
    GratitudeMindfulnessComponent,
    MeaningfulPersonalTimeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
