import { HttpClientModule } from '@angular/common/http';
import { DebugElement, Inject, inject, Injector } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { Addition } from '../Calculator';
import { StudentService } from '../services/student.service';
import { waitForAsync } from '@angular/core/testing';

import { DotnetofficeComponent } from './dotnetoffice.component';
import { StudentComponent } from '../student/student.component';
import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { FileSizePipe } from '../file-size.pipe';


 let upperPipe : UpperCasePipe;
 let lowerPipe : LowerCasePipe;
let pipe : FileSizePipe;
describe('DotnetofficeComponent', () => {
  let component: DotnetofficeComponent;
  let fixture: ComponentFixture<DotnetofficeComponent>;
  let h1: HTMLElement;
  let deb: DebugElement;
  let service: StudentService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DotnetofficeComponent, FileSizePipe],
      providers: [StudentService],
      imports: [AppRoutingModule, HttpClientModule, FormsModule]
    })
      .compileComponents();

  

    fixture = TestBed.createComponent(DotnetofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement;

    h1 = fixture.nativeElement.querySelector('h1');

    service = TestBed.inject(StudentService);

    upperPipe = new UpperCasePipe();
    lowerPipe = new LowerCasePipe();
    pipe = new FileSizePipe();
  });



  it('Unit test case for Upper Pipe', () => {
     expect(lowerPipe.transform(component.title)).toEqual("the dotnet office");
  });
  
  it('Unit test case for file size Pipe', () => {
    expect(pipe.transform(component.size)).toEqual("File size is -1.91MB");
 });

  

});



















