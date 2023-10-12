import { Component } from '@angular/core';

import { Message } from './message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  model = new Message("", "");
  submittedMessage: Message = new Message("","");
  isSubmitted: boolean = false;
  inputTest1: string = "";
  inputTest2: string = "";

  //Make sure we reset the submission value when the form is changed so the message will no longer appear
  onFormChanged() {
    this.isSubmitted = false;
  }

  //record submitted values and reset the ones on the form
  onSubmit() {
    this.submittedMessage.test1 = this.model.test1;
    this.submittedMessage.test2 = this.model.test2;
    this.model.test1 = "";
    this.model.test2 = "";
    this.isSubmitted = true;
  }
}
