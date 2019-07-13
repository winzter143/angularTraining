import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  postForm: FormGroup;
  user: {
    name: "Jone",
    age: 99
  }
  constructor(private formBuilder: FormBuilder) {
    
  }

  ngOnInit() {
  }

  initializeForm(){
      this.postForm = this.formBuilder.group({
        // Init the form data here
        name: [""],
        age: [99]
      });
  }

  //submit(){
  //  console.log(this.postForm.value);

    // get Specific value which "age"
  //  console.log(this.postForm.controls['age'].value);    
  //}

  // Lister to form changes
  //listenToPostForm(){
    //this.postForm.valueChanges.subrcribe((form.value) => {
    //   console.log();
    //});
  //}

  getUserDetails(){
     
  }


   submitValue(userData){
      this.user = userData;
      console.log(userData);
   }
}
