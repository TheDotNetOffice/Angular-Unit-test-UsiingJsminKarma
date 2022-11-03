import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { Addition } from '../Calculator';
import { StudentService } from '../services/student.service';

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
      imports: [AppRoutingModule, HttpClientModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DotnetofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement;

    h1 = fixture.nativeElement.querySelector('h1');
  });

  it("interpolation test", () => {
 
    const name : HTMLElement = fixture.debugElement.nativeElement.querySelector('#name');
    expect(name.innerHTML).toEqual(component.Name);

    component.Name = "name-updated";
    fixture.detectChanges();
    expect(name.innerHTML).toEqual(component.Name);
  });

  it("interpolation test for textbox", () => {
 
    const inputelement : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#userName');
    expect(inputelement.type).toEqual(component.type);

    component.type = "text";
    fixture.detectChanges();
    expect(inputelement.type).toEqual(component.type);

    expect(inputelement.readOnly).toBeFalsy();
  });

  


});
