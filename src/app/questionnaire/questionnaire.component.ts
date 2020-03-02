import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IemailBody } from '../core/interfaces/iemail-body';

@Component({
  selector: 'dept-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  contactForm: FormGroup;
  nameField = new FormControl('');
  emailField = new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]);
  messageField = new FormControl('', Validators.required);
  emailMessage = {} as IemailBody;

  constructor(
    private fb: FormBuilder
  ) {
    this.contactForm = fb.group({
      'nameField': this.nameField,
      'emailField': this.emailField,
      'messageField': this.messageField
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.emailMessage.name = this.contactForm.value.nameField;
      this.emailMessage.email = this.contactForm.value.emailField;
      this.emailMessage.message = this.contactForm.value.messageField;

      console.log(this.emailMessage);
      this.contactForm.reset();
    }

  }

  get email() {
    return this.contactForm.get('emailField');
  }

  get message() {
    return this.contactForm.get('messageField');
  }

}
