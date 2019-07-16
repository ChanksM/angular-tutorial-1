import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  myUser = {
    id: '',
    name: '',
    salary: null,
    age: null,
  };
  updateForm;
  userId;
  popUpCheck = false;
  constructor(private employeesService: EmployeesService, private activatedRoute: ActivatedRoute, private router: Router,
              private formBuilder: FormBuilder) {
    this.updateForm = this.formBuilder.group({
      name: ['', Validators.required],
      salary: ['', Validators.required],
      age: ['', Validators.required]
    });
    this.activatedRoute.paramMap.subscribe(value => {
      this.userId = +value.get('id');
      this.employeesService.getUserById(this.userId).subscribe(user => {
        this.myUser = user;
        if (!this.myUser) {
          router.navigate(['error']);
        }
      });
    });
  }

  ngOnInit() {
  }

  get name() {
    return this.updateForm.get('name') as FormControl;
  }

  get salary() {
    return this.updateForm.get('salary') as FormControl;
  }

  get age() {
    return this.updateForm.get('age') as FormControl;
  }

  updateUserInfo() {
    this.employeesService.updateUserInfo(this.updateForm.value, this.userId)
    .subscribe()
    .add(() => {
      this.router.navigate(['/employees']);
    });
  }

  deleteUser() {
    this.employeesService.deleteUser(this.userId)
    .subscribe()
    .add(() => {
      this.router.navigate(['/employees']);
    });
  }

  popUp() {
    this.popUpCheck = !this.popUpCheck;
  }
}
