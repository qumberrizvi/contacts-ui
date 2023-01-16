import {Component, OnInit} from '@angular/core';
import {ContactService} from "../../services/contact/contact.service";
import {ActivatedRoute} from "@angular/router";
import {Contact} from "../../models/contact.model";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  id!: string | null;
  contact!: Contact;
  loading = false;

  constructor(
    private readonly contactService: ContactService,
    private readonly activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.fetchContact();
  }

  private fetchContact(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.loading = true;
      this.contactService.findOne(this.id)
        .subscribe({
          next: contact => {
            this.contact = contact;
          },
          complete: () => {
            this.loading = false;
          }
        });
    }
  }


}
