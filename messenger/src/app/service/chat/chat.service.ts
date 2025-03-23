import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Message {
  sender: string;
  text: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messagesSubject = new BehaviorSubject<Message[]>([]);
  messages$ = this.messagesSubject.asObservable();

  constructor() {}

  sendMessage(sender: string, text: string) {
    const messages = this.messagesSubject.value;
    messages.push({ sender, text, timestamp: new Date() });
    this.messagesSubject.next(messages);
  }
}
