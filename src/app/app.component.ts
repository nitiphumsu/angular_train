import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text = 'Hello, World!';
  isDisable = false;
  fname = '';
  showbutton = true;
  books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' }
  ];
  score: number = 0;

  name1:string = '';
  surname1:string = '';
  
  form : any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      address: [{ value: null , disabled: false}, Validators.required],
      phone: [{ value: null , disabled: false}, Validators.required],
      name: [{ value: null , disabled: false}, Validators.required],
      zipCode: [{ value: null , disabled: false}, Validators.required]
    });
  }

  confirm() {
    alert('You clicked the button!');
  }

  switch(value: boolean) {
    this.showbutton = value;
  }
}

