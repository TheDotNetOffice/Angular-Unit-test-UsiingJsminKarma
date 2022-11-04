import { Component, EventEmitter, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { PostModel } from '../PostModel';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  title = "The DotNet Office";

  private sub!: Subscription;
  postData!: PostModel[];
  constructor(  public service: StudentService) { }

  ngOnInit(): void {

    this.getdata();
  }


  getdata() {

    this.sub = this.service.getListOfData().subscribe((post) => {
      this.postData = post;
    })
  }




}
