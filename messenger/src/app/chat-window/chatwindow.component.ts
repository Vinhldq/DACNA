import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DatePipe, NgClass, NgForOf} from '@angular/common';
import {ChatService, Message} from '../service/chat.service';

@Component({
  selector: 'app-chat-window',
  imports: [
    NgForOf,
    DatePipe,
    NgClass
  ],
  templateUrl: './chatwindow.component.html',
  styleUrl: './chatwindow.component.scss'
})
export class ChatwindowComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;

  messages: Message[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.messages$.subscribe(messages => {
      this.messages = messages;
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }
}
