import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-task-1',
    templateUrl: './task-1.component.html',
    styleUrls: ['./task-1.component.scss']
})

export class TaskOneComponent implements OnInit {
    TaskOneitems;
    taskOneForm;
    constructor(private formBuilder: FormBuilder) {
        this.taskOneForm = formBuilder.group( {
            Email: ['', Validators.email],
            Password: ['',
                        [Validators.minLength(7),
                        Validators.maxLength(30),
                        Validators.pattern('^[0-9a-zA-Z]*$')]],
            ConfirmPassword: [''],
            Nickname: ['', Validators.pattern('^[a-zA-Z\_\ ]*$')],
            PhoneNumber: ['',
                        [Validators.pattern('^[0-9]*$')]],
            Website: [''],
        });
    }
    ngOnInit() {}
    get email() {
        return this.taskOneForm.get('Email') as FormControl;
    }
    get password() {
        return this.taskOneForm.get('Password') as FormControl;
    }
    get confirmPass() {
        return this.taskOneForm.get('ConfirmPassword') as FormControl;
    }
    get nickName() {
        return this.taskOneForm.get('Nickname') as FormControl;
    }
    get phoneNum() {
        return this.taskOneForm.get('PhoneNumber') as FormControl;
    }

    // numberChecker() {
    //     const phone = this.phoneNum.value;
    //     return phone.startsWith('+380') && phone.length === 9;
    // }
}
