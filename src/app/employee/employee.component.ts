import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private employeesService: EmployeesService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(value => {
      const userId = +value.get('id');
      this.employeesService.getUserById(userId).subscribe(user => {
        this.myUser = user;
        if (!this.myUser) {
          router.navigate(['error']);
        }
      });
    });
  }

  ngOnInit() {
  }

}
