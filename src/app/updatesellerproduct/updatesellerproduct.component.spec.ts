import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesellerproductComponent } from './updatesellerproduct.component';

describe('UpdatesellerproductComponent', () => {
  let component: UpdatesellerproductComponent;
  let fixture: ComponentFixture<UpdatesellerproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesellerproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatesellerproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
