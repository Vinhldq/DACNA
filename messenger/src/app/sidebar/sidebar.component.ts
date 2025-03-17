import { Component } from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  imports: [
    NgClass,
    FormsModule,
    NgForOf
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  searchQuery: string = '';

  // Danh sách người dùng
  users = [
    { id: 1, name: 'Uyên Mập', avatar: 'https://via.placeholder.com/40', online: true, active: false },
    { id: 2, name: 'Thân Tuấn', avatar: 'https://via.placeholder.com/40', online: false, active: true },
    { id: 3, name: 'An Sục', avatar: 'https://via.placeholder.com/40', online: true, active: false },
    { id: 4, name: 'Bảo Wibu', avatar: 'https://via.placeholder.com/40', online: false, active: false },
  ];

  // Lọc danh sách người dùng dựa trên searchQuery
  get filteredUsers() {
    return this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  // Trong sidebar.component.ts
  selectUser(user: any) {
    this.users.forEach(u => u.active = false);
    user.active = true;
    // Gọi service để mở chat với người dùng này
  }
}
