import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {


  @Input() userDetails: any; //  User Handle for user form
  
  // Oser data hold to send form data to home
  //@Output formValueEmitter = new EventEmitter();

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
     console.log(this.userDetails);
     // Assign the value to form

    this.postForm.patchValue(this.userDetails);
  }

  initializeForm(){
      this.postForm = this.formBuilder.group({
        // Init the form data here
        name: [""],
        age: [99]
      });
  }

  submit(){
    console.log(this.postForm.value);

    // get Specific value which "age"
    console.log(this.postForm.controls['age'].value);    
  }

  // Lister to form changes
  listenToPostForm(){
    this.postForm.valueChanges.subscribe((formValue) => {
       console.log(formValue);
    });
  }

}
