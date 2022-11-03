import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-dotnetoffice',
  templateUrl: './dotnetoffice.component.html',
  styleUrls: ['./dotnetoffice.component.css']
})
export class DotnetofficeComponent implements OnInit {

  tital = "AngularUnitTestApp";
 
  Name = "The Dotnet office";
  num1 = 100;
  num2 = 20;

  type = "number";
  placeholder = "givennumber";
  constructor(public services: StudentService) { }

  ngOnInit(): void {
  }


 
  

}
