import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  animations: [
    trigger('loadUnload', [
      state('load', style({
        display: 'none'
      })),
      state('unload', style({
        display: 'block'
      }))
    ])
  ]
})
export class EmployeesComponent implements OnInit {
  employees$;
  loader = true;
  constructor(private employeesService: EmployeesService) {}

  ngOnInit() {
    this.employees$ = this.employeesService.getEmployees();
    this.employees$.subscribe( data => {
      this.loader = false;
    }
    );
  }
}
