import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OModalComponent } from './o-modal.component';

describe('OModalComponent', () => {
  let component: OModalComponent;
  let fixture: ComponentFixture<OModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
