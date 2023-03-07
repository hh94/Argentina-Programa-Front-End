import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConocimientoComponent } from './new-conocimiento.component';

describe('NewConocimientoComponent', () => {
  let component: NewConocimientoComponent;
  let fixture: ComponentFixture<NewConocimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewConocimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewConocimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
