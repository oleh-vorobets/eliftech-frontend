import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventParticipantsComponent } from './event-participants/event-participants.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EventsBoardComponent } from './events-board/events-board.component';

const routes: Routes = [
  { path: 'participants/:id', component: EventParticipantsComponent },
  { path: 'registration/:id', component: EventRegistrationComponent },
  { path: '', component: EventsBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
