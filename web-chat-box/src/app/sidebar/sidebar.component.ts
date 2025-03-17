import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {TuiIcon} from '@taiga-ui/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [
    FormsModule,
    NgForOf,
    TuiIcon
  ],
  // Optional for custom styles
})
export class SidebarComponent {
  searchText: string = '';

  users = [
    {
      name: 'Uyen Uyen',
      status: 'Online',
      avatar: 'https://via.placeholder.com/50',
    },
    {
      name: 'Tuan Khi',
      status: 'Online',
      avatar: 'https://via.placeholder.com/50',
    },
    {
      name: 'Quoc Bao',
      status: 'Offline',
      avatar: 'https://via.placeholder.com/50',
    },
  ];

  onSelectUser(user: any) {
    console.log('Selected user:', user);
    // Handle user selection (e.g., open chat window)
  }
}
