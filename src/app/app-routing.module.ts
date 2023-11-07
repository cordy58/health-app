import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SleepComponent } from './sleep/sleep.component';
import { HomeComponent } from './home/home.component';
import { StressComponent } from './stress/stress.component';
import { GriefComponent } from './grief/grief.component';
import { PhysicalHabitsComponent } from './physical-habits/physical-habits.component';
import { GratitudeMindfulnessComponent } from './gratitude-mindfulness/gratitude-mindfulness.component';
import { MeaningfulPersonalTimeComponent } from './meaningful-personal-time/meaningful-personal-time.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'sleep', component: SleepComponent },
  {path: 'stress', component: StressComponent },
  {path: 'grief', component: GriefComponent },
  {path: 'physical-habits', component: PhysicalHabitsComponent },
  {path: 'gratitude-mindfulness', component: GratitudeMindfulnessComponent },
  {path: 'meaningful-personal-time', component: MeaningfulPersonalTimeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
