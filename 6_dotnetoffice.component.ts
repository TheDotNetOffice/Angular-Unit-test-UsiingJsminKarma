import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dotnetoffice',
  templateUrl: './dotnetoffice.component.html',
  styleUrls: ['./dotnetoffice.component.css']
})
export class DotnetofficeComponent implements OnInit {

  tital = "AngularUnitTestApp";
  constructor() { }

  ngOnInit(): void {
  }

  ShowMessage(Msg : string) : string
  {
    return Msg;
  }

}
