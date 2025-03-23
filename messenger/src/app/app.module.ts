import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './chat/sidebar/sidebar.component';
import { ChatwindowComponent } from './chat/chat-window/chatwindow.component';
import { HeaderComponent } from './chat/header/header.component';
import { MessageInputComponent } from './chat/message-input/message-input.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    MessageInputComponent,
    ChatwindowComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
