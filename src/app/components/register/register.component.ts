import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-register',
  standalone: true,
  //now I have to import the modules in the components themselves, from v17 onwards they are standalone by default
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  /* Here I'm grouping all individual formControls into a form group */
  /* Inside the FormGroup's class constructor I pass an object containing each input control
  so that I can bind them in the component's template */
  /* Also, inside the group I'm adding a few validators */
  registerForm = new FormGroup(
    {
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
    }
  );
  
  //method that takes the value of the formGroup's inputs and store them on the employeeInfo variable
  saveEmployee(){
    const employeeInfo = this.registerForm.value;
    return employeeInfo;
  }


}
