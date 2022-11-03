import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  title = "The DotNet Office";
  @Input() myinputMsg :string = "";
  @Output() myOutput:EventEmitter<string> = new EventEmitter();

  outputMessage:string="I am output directory";
  constructor(
     public studentService: StudentService
  ) { }

  ngOnInit(): void {

    this.title= this.myinputMsg;
  }
sendValues()
{
  this.myOutput.emit(this.outputMessage);
}
 
  

  
  

}
