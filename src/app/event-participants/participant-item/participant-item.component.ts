import { Component, Input } from '@angular/core';
import { Participant } from '../../types/participant.type';

@Component({
  selector: 'app-participant-item',
  templateUrl: './participant-item.component.html',
  styleUrl: './participant-item.component.css',
})
export class ParticipantItemComponent {
  @Input() participant: Participant | null = null;
}
