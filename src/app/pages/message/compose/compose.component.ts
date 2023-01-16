import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../../../services/contact/contact.service';
import {Contact} from '../../../models/contact.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from '../../../services/message/message.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {
  id!: string;
  contact!: Contact;

  messageForm!: FormGroup;
  otp!: number;

  messageBody!: string;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly contactService: ContactService,
    private readonly messageFormBuilder: FormBuilder,
    private readonly messageService: MessageService,
    private readonly router: Router,
    private snackBar: MatSnackBar,
  ) {
    this.messageForm = new FormGroup({
      body: new FormControl(),
    });
  }

  ngOnInit() {
    this.setup();
  }

  private setup(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || '';
    if (this.id) {
      this.contactService.findOne(this.id)
        .subscribe({
          next: contact => {
            this.contact = contact;
            this.generateOtp();
          }
        });
    }
  }

  generateOtp(): void {
    this.otp = Math.floor(1000 + Math.random() * 9000);
    this.prepareForm();
  }

  prepareForm(): void {
    this.messageBody = `Hi. Your OTP is: ${this.otp}.`;
    this.messageFormBuilder.group({
      'body': [this.messageBody, [Validators.required]],
    });
  }

  submit(): void {
    if (!this.messageForm.valid) return;
    this.messageService.create({
      body: this.messageForm.get<string>('body') as unknown as string,
      otp: this.otp,
      contactId: this.id,
    })
      .subscribe({
        next: () => this.snackBar.open('Message sent successfully!', 'OK'),
        error: () => this.snackBar.open('Something went wrong!', 'Oh'),
        complete: () => this.router.navigate(['/']),
      });
  }
}
