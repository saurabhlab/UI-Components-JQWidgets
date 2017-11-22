import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
 

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myForm: FormGroup;
 
        constructor(private fb: FormBuilder) {
            this.createForm();
 
            this.myForm.valueChanges
                .subscribe(data => this.checkFormValidity(data));
        }
 
        createForm(): void {
            this.myForm = this.fb.group({
                email: ['', [Validators.required, Validators.email]],
                username: ['',
                    [
                        Validators.required,
                        Validators.minLength(6),
                        Validators.maxLength(12),
                        this.checkForSpecialOrDigit(/((@|!|#|\$|%|\^|&|\*|\(|\)|_|\+|\-|=)|[0-9])/),
                        this.checkForCapitalLetter(/[A-Z]/),
                        this.checkForLowerCaseLetter(/[a-z]/)
                    ]],
                terms: ['', Validators.requiredTrue]
            });
        }
 
        checkForSpecialOrDigit(regex: RegExp): ValidatorFn {
            return (control: AbstractControl): { [key: string]: any } => {
                const name = control.value;
                const no = regex.test(name);
                return no ? null : { specialOrDigit: false }
            };
        }
 
        checkForCapitalLetter(regex: RegExp): ValidatorFn {
            return (control: AbstractControl): { [key: string]: any } => {
                const name = control.value;
                const no = regex.test(name);
                return no ? null : { capital: false }
            };
        }
 
        checkForLowerCaseLetter(regex: RegExp): ValidatorFn {
            return (control: AbstractControl): { [key: string]: any } => {
                const name = control.value;
                const no = regex.test(name);
                return no ? null : { lowercase: false }
            };
        }
 
        errMsgs: any = {
            email: [],
            username: []
        }
 
        translations: any = {
            email: {
                required: 'The email is required.',
                email: 'This is not a valid email.', minlength: 'The length must be atleast 6 symbols', specialOrDigit: 'Username should contain one number OR special character: !@#$%^&*()_+-=',
            },
            username: {
                required: 'The username is required.',
                minlength: 'The length must be atleast 6 symbols',
                maxlength: 'The length must not exceed 12 symbols',
                specialOrDigit: 'Username should contain one number OR special character: !@#$%^&*()_+-=',
                capital: 'Username should have one capital letter',
                lowercase: 'Username should have one lower case letter',
            }
        }
 
        checkFormValidity(data?: any): void {
            for (let k in this.errMsgs) {
                this.errMsgs[k] = [];
                if (this.myForm.controls[k].errors && this.myForm.controls[k].dirty) {
                    for (let e in this.myForm.controls[k].errors) {
                        if (this.translations[k][e]) {
                            this.errMsgs[k].push(this.translations[k][e]);
                        }
                    }
                }
            }
        }
 
        clearForm(): void {
            this.myForm.reset()
        }
 
        register(): void {
            alert('Registration Done!');
        }


  ngOnInit() {
  }

}
