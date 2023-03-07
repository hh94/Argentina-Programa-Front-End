import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConocimientoComponent } from './edit-conocimiento.component';

describe('EditConocimientoComponent', () => {
  let component: EditConocimientoComponent;
  let fixture: ComponentFixture<EditConocimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditConocimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditConocimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
