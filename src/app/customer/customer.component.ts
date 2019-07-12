import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  newUserForm;
  constructor(private formBuilder: FormBuilder, private employeesService: EmployeesService) {
    this.newUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      salary: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  sendData() {
    this.employeesService.createCustomer(this.newUserForm.value);
  }
}
