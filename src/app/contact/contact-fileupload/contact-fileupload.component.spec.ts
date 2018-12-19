import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFileuploadComponent } from './contact-fileupload.component';

describe('ContactFileuploadComponent', () => {
  let component: ContactFileuploadComponent;
  let fixture: ComponentFixture<ContactFileuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFileuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
