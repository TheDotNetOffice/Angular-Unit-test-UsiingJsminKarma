import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { StudentService } from '../services/student.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StudentComponent } from './student.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DotnetofficeComponent } from '../dotnetoffice/dotnetoffice.component';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { of, subscribeOn } from 'rxjs';
import { PostModel } from '../PostModel';


describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let service: StudentService;

  let objCreateSpy : any;
  let objCreateObjSpy : any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentComponent, AppComponent],
      imports: [HttpClientModule, FormsModule, AppRoutingModule],
      providers: [StudentService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;

    service = TestBed.inject(StudentService);

    objCreateSpy = jasmine.createSpy("fetchdata");
    objCreateSpy("this is for createSpy unit test");

    objCreateObjSpy = jasmine.createSpyObj("fetchSpyObj",["add","substract"]);
    objCreateObjSpy.add();
    objCreateObjSpy.substract();
    fixture.detectChanges();
  });

  it('unit test for spy method', () => {

    let spy = spyOn(service, 'getListOfData').and.returnValue(of([]));
   
    component.ngOnInit();
   fixture.detectChanges()
    expect(spy).toHaveBeenCalled();
  });

  it('unit test for create spy', () => {

    expect(objCreateSpy).toBeDefined();

    expect(objCreateSpy).toHaveBeenCalled();
    expect(objCreateSpy.calls.count()).toEqual(1);
  });
  
  it('unit test for createSpy obj', () => {

    expect(objCreateObjSpy).toBeDefined();

    expect(objCreateObjSpy.add).toHaveBeenCalled();
    expect(objCreateObjSpy.add.calls.count()).toEqual(1);

    expect(objCreateObjSpy.substract).toHaveBeenCalled();
    expect(objCreateObjSpy.substract.calls.count()).toEqual(1);
  });

});
