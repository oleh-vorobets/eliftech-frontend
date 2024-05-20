import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsBoardComponent } from './events-board/events-board.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EventParticipantsComponent } from './event-participants/event-participants.component';
import { EventItemComponent } from './events-board/event-item/event-item.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { ParticipantItemComponent } from './event-participants/participant-item/participant-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventsBoardComponent,
    EventRegistrationComponent,
    EventParticipantsComponent,
    EventItemComponent,
    ParticipantItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
