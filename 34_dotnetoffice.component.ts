import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-dotnetoffice',
  templateUrl: './dotnetoffice.component.html',
  styleUrls: ['./dotnetoffice.component.css']
})
export class DotnetofficeComponent implements OnInit {

  size = 2000000;
  title = "the dotNet Office";
  constructor(public services: StudentService) { }

  ngOnInit(): void {
  }

 
  



  



}
