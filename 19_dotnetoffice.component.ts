import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-dotnetoffice',
  templateUrl: './dotnetoffice.component.html',
  styleUrls: ['./dotnetoffice.component.css']
})
export class DotnetofficeComponent implements OnInit {

  tital = "AngularUnitTestApp";
  sum = 0;
  result: any;
  studentResult:any;
  constructor(public services: StudentService) { }

  ngOnInit(): void {
  }

  calculate(num1: number, num2: number) {
    this.sum = num1 + num2;
    return this.sum;
  }

  saveData() {
    let info = {
      sumVal: this.calculate(5, 5),
      name: "Dot Net Office"
    };
    this.SaveDataIntoConsole(info);
    this.services.SaveDetails(info).subscribe(response => {
      this.result = response;
    })
  };

  StudentSchoolResult(){
    if(this.calculate(10,20) >= 40)
    {
      this.studentResult =  "Pass";
      return this.studentResult;
    }
    else
    {
      this.studentResult = "Fail";
      return this.studentResult ;
    }
  }

  ShowMessage(Msg: string): string {
    return Msg;
  }

  SaveDataIntoConsole(info: any) {

    console.log(info);
  }

}
