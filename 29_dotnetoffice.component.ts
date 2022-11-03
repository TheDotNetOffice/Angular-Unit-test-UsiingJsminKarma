import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-dotnetoffice',
  templateUrl: './dotnetoffice.component.html',
  styleUrls: ['./dotnetoffice.component.css']
})
export class DotnetofficeComponent implements OnInit {

  tital = "AngularUnitTestApp";


studentName:string=" "
  constructor(public services: StudentService) { }

  ngOnInit(): void {
  }


setName(){
  this.studentName = "DotNet office";
}



}
