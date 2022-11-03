import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-dotnetoffice',
  templateUrl: './dotnetoffice.component.html',
  styleUrls: ['./dotnetoffice.component.css']
})
export class DotnetofficeComponent implements OnInit {

  
  constructor(public services: StudentService) { }

  ngOnInit(): void {
  }

  ColorNames = ['Black','white','blue','green'];
  Colorslist=[
    {
      name:'Black', id:1
    },
    {
      name:'white', id:2
    },
    {
      name:'blue', id:3
    },
    {
      name:'green', id:4
    },
  ]



  



}
