import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // Import FormsModule

import {AppComponent} from './app.component';
import {SidebarComponent} from './sidebar/sidebar.component'; // Giả sử bạn đã tạo SidebarComponent

@NgModule({
  declarations: [
    // Thêm các component khác của bạn
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
    SidebarComponent,
    // Thêm FormsModule ở đây
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {
}
