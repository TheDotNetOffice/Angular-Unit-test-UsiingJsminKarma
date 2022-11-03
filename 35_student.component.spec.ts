import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentService } from '../services/student.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StudentComponent } from './student.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DotnetofficeComponent } from '../dotnetoffice/dotnetoffice.component';
import { AppRoutingModule } from '../app-routing.module';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let dotnetOfficecomponent: DotnetofficeComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let dotnetofficefixture: ComponentFixture<DotnetofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentComponent,DotnetofficeComponent],
      imports: [HttpClientModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule, HttpClientModule,AppRoutingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;

    dotnetofficefixture = TestBed.createComponent(DotnetofficeComponent);
    dotnetOfficecomponent = dotnetofficefixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Unit test case for input directive', async () => {

    dotnetOfficecomponent.myInputMessage = "input directive";
    dotnetofficefixture.detectChanges();
    fixture.whenStable().then(() => {
      let element = dotnetofficefixture.debugElement.nativeElement.querySelector('h3').innerText;
      expect(element).toEqual("child component - input directive");

    })
  });

  it('Unit test case for output directive', async () => {
    component.sendValues();
    dotnetofficefixture.detectChanges();
    dotnetofficefixture.whenStable().then(() => {
     component.myOutput.subscribe(g=>{
      expect(g).toEqual("I am output directive.");
     })

     
    })

    component.sendValues();
    
  });
});
