
// Importing in-bult modules and custome services.
import { UserService } from '../services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { AlertService } from '../services/alert.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';




// Form Validation pattern
export function patternValidator(pattern: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = !pattern.test(control.value);;
    return forbidden ? { 'pattern': { value: control.value } } : null;
  };
}


@Component({
  selector: 'app-contact-forms',
  templateUrl: './contact-forms.component.html',
  styleUrls: ['./contact-forms.component.css']
})
export class ContactFormsComponent implements OnInit {
  // Here, we are defining the field type of registrationForm
  registrationForm: FormGroup;
  // Here, we are defining the field type of each FormControl.
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  mobileNumber: FormControl;
  streetAddressOne: FormControl;
  streetAddressTwo: FormControl;
  city: FormControl;
  state: FormControl;
  country: FormControl;
  zipCode: FormControl;

  // For displaying ng-bootstrap modal
  @ViewChild('userModal', { static: false }) userModal: NgbModalRef;

  // All service need to injected into the constructor method.
  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private modalService: NgbModal,
    private userService: UserService) {
  }


  // ngOnInit: on start of component life-cycle. ngOnInit method will execute first.
  ngOnInit() {
    // Here, we are creating objects (instance of FormControl) and also adding validators.
    this.firstName = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('',
      [
        Validators.required,
        Validators.minLength(8),
        patternValidator(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"))
      ]);
    this.mobileNumber = new FormControl('');
    this.streetAddressOne = new FormControl('', [Validators.required]);
    this.streetAddressTwo = new FormControl('', [Validators.required]);
    this.city = new FormControl('', [Validators.required]);
    this.state = new FormControl('', [Validators.required]);
    this.country = new FormControl('', [Validators.required]);
    this.zipCode = new FormControl('', [Validators.required]);



    // Here,we are making registrationForm should have following field type.
    this.registrationForm = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      mobileNumber: this.mobileNumber,
      streetAddressOne: this.streetAddressOne,
      streetAddressTwo: this.streetAddressTwo,
      city: this.city,
      state: this.state,
      country: this.country,
      zipCode: this.zipCode
    });
  };


  // onSubmit() Method called when the "submit" event is triggered on the form. 
  // onSubmit event binding in the template: Triggers the ngSubmit emitter to emit the "submit" event as its payload.
  onSubmit() {
    if (this.registrationForm.valid) {
      this.userService.save(this.registrationForm.value);
      // Reseting the form after additing all details.
      this.registrationForm.reset();
      // Here, we are using alertService add function with custome interface.
      this.alertService.add({
        type: 'success',
        message: `${this.firstName.value} are successfully registered`,
        autoHide: true,
      });
      this.modalService.open(this.userModal, {     // this modalService.open is not a cutome service. This method has directly taken from ng-bootstrap modal.
        centered: true,
        size: "xl",
        scrollable: true
      });
    } else {
      this.alertService.add({
        type: 'danger',
        message: 'You are not registered',
        autoHide: true,
      });

    }

  }



  showUsers() {
    this.modalService.open(this.userModal, {
      centered: true,
      size: "xl",
      scrollable: true
    });
  }

}
