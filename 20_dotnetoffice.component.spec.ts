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
  let deb : DebugElement;

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

  it('increase count click', () => {
     
    const h1 = deb.query(By.css('h1'));
    const btn = deb.query(By.css('#btnincreaseNumber'));

    btn.triggerEventHandler('click', {});
    fixture.detectChanges();

    expect(component.countNumber).toEqual(parseInt( h1.nativeElement.innerText));

  });

  
  

});
