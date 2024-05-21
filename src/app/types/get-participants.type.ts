import { Participant } from './participant.type';

export interface GetParticipants {
  participants: Participant[];
  eventTitle: string;
}
