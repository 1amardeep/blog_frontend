import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  username!: string;
  message!: string;
  room!: string;
  messages: any[] = [];

  constructor(private socket: Socket) {}

  ngOnInit(): void {
    this.username = prompt('Enter your username:')!;
    this.room = prompt('Enter room name:')!;

    this.socket.emit('join', this.room);

    this.socket.on('chat message', (data: string) => {
      this.messages.push(data);
    });
  }

  sendMessage() {
    this.socket.emit('chat message', {
      username: this.username,
      message: this.message,
      room: this.room,
    });
    this.message = '';
  }
}
