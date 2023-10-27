import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  ContactForm!: FormGroup;

  constructor(private fb: FormBuilder) {};

  ngOnInit() {
    this.ContactForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      message: ["", Validators.required]
    })
  }

  //record submitted values and reset the ones on the form
  onSubmit(): void {
    console.log("submitted")
    if (this.ContactForm.valid) {
      console.log(this.ContactForm.value);
      this.ContactForm.reset();
    }
    else {
      console.log("error");
      console.log(this.ContactForm.errors);
    }
    
  }
}
