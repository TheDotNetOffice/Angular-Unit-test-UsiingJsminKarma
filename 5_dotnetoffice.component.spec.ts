import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Addition } from '../Calculator';

import { DotnetofficeComponent } from './dotnetoffice.component';

describe('DotnetofficeComponent', () => {
  let component: DotnetofficeComponent;
  let fixture: ComponentFixture<DotnetofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotnetofficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotnetofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show alert message',()=>{
    expect(component.ShowMessage("Hello")).toBe("Hello");
  });

  it('show the addition result',()=>{
    expect(Addition(10,20)).toBe(30);
  })
});
