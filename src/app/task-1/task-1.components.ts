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
            'E-Mail': ['', Validators.email ],
            Password: ['', [Validators.minLength(5), Validators.maxLength(30)]],
            'Confirm Password': ['', 'confirmPass()'],
            Nickname: ['', Validators.pattern('^[a-zA-Z ]*$')],
            'Phone Number': ['', 'phoneValidator()'],
            Website: ['', 'websiteValidation()'],
        });
    }
    ngOnInit() {}
}
