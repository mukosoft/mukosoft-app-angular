import { Component, Input, OnInit } from "@angular/core";
import { Employee } from "../../../../models/my-doc/Employee";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
})
export class EmployeeComponent {
  @Input() employee: Employee = {};
}
