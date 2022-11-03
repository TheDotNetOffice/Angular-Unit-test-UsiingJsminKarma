import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import {  of } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { Addition } from '../Calculator';
import { StudentService } from '../services/student.service';
import { waitForAsync } from '@angular/core/testing';

import { DotnetofficeComponent } from './dotnetoffice.component';

describe('DotnetofficeComponent', () => {
  let component: DotnetofficeComponent;
  let fixture: ComponentFixture<DotnetofficeComponent>;
  let h1: HTMLElement;
  let deb: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DotnetofficeComponent],
      providers: [StudentService],
      imports: [AppRoutingModule, HttpClientModule, FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DotnetofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement;

    h1 = fixture.nativeElement.querySelector('h1');
  });



  it("ngSwitch test case", () => {
    const element: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#div1');
   
    
    expect(element.childElementCount).toEqual(1);

    expect(element.children.length).toEqual(1);

    expect(element.children[0].innerHTML).toEqual("One is selected");
    
  });

  it("ngSwitch test case -2", () => {
    const element: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#div1');
   
    component.selectedNum = "Two";
    fixture.detectChanges();
    expect(element.childElementCount).toEqual(1);

    expect(element.children.length).toEqual(1);

    expect(element.children[0].innerHTML).toEqual("Two is selected");
    
  });
  
  

});







