import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
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

  sendMessage() {
    console.log('Tin nhắn đã gửi:', this.message);
    // Xử lý logic gửi tin nhắn tại đây
    this.message = ''; // Xóa nội dung ô nhập sau khi gửi
  }
}
