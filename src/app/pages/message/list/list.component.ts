import {Component, OnInit} from '@angular/core';
import {MessageService} from "../../../services/message/message.service";
import {Message} from "../../../models/message.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  messages!: Message[];

  constructor(private readonly messageService: MessageService) {
  }

  ngOnInit(): void {
    this.fetchMessages();
  }

  fetchMessages(): void {
    this.messageService.findAll()
      .subscribe({
        next: (messages) => this.messages = messages
      });
  }
  formatDate(date: Date | string): string {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
