import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ChatListComponent} from './chat-list/chat-list.component';
import {ChatWindowComponent} from './chat-window/chat-window.component';
import {MessageInputComponent} from './message-input/message-input.component';

@Component({
  selector: 'app-root',
  imports: [ SidebarComponent, ChatListComponent, ChatWindowComponent, MessageInputComponent, TuiRoot],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web-chat-box';
}
