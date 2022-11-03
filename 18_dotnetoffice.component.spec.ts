import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { Addition } from '../Calculator';
import { StudentService } from '../services/student.service';

import { DotnetofficeComponent } from './dotnetoffice.component';

describe('DotnetofficeComponent', () => {
  let component: DotnetofficeComponent;
  let fixture: ComponentFixture<DotnetofficeComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show alert message', () => {
    expect(component.ShowMessage("Hello")).toBe("Hello");
  });

  xit('show the addition result', () => {
    expect(Addition(10, 20)).toBe(30);
  });

  it('spy On Method', () => {
    spyOn(component, 'calculate');
    component.saveData();
    expect(component.calculate).toHaveBeenCalled();
  });

  it('spy On Method - 1', () => {
    spyOn(component, 'calculate').and.returnValues(10, 20);
    let result = component.studentResult();
    expect(result).toEqual("Fail");
  });

  it('spy On Method - 2', () => {
    let service = fixture.debugElement.injector.get(StudentService);
    spyOn(service, "SaveDetails").and.callFake(() => {
      return of({
        "result1": 200
      })
    });

    spyOn(component, "SaveDataIntoConsole").and.stub();
    component.saveData();
    expect(component.result).toEqual({
      "result1": 200
    })
  });



});
