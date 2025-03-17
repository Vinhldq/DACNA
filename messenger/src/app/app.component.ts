import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MessageInputComponent} from './message-input/message-input.component';
import {ChatwindowComponent} from './chat-window/chatwindow.component';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, SidebarComponent, MessageInputComponent, ChatwindowComponent, TuiRoot],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'messenger';
}
