import {Component, OnInit} from '@angular/core';
import {ContactService} from "../../services/contact/contact.service";
import {Contact} from "../../models/contact.model";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts!: Contact[];
  loading = false;

  constructor(private readonly contactService: ContactService) {
  }

  ngOnInit(): void {
    this.fetchContacts();
  }

  private fetchContacts(): void {
    this.loading = true;
    this.contactService.findAll()
      .subscribe({
        next: contacts => {
          this.contacts = contacts;
        },
        complete: () => {
          this.loading = false;
        }
      });
  }

}
