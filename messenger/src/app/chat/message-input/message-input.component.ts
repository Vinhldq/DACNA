import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ChatService} from '../../service/chat/chat.service';
import {TuiIcon} from '@taiga-ui/core';

@Component({
  selector: 'app-message-input',
  imports: [
    FormsModule,
    TuiIcon
  ],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.scss'
})
export class MessageInputComponent {
  message: string = '';

  constructor(private chatService: ChatService) {}

  sendMessage() {
    if (this.message.trim()) {
      this.chatService.sendMessage('You', this.message);
      this.message = '';
    }
  }
}
