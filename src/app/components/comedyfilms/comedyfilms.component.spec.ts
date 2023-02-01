import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedyfilmsComponent } from './comedyfilms.component';

describe('ComedyfilmsComponent', () => {
  let component: ComedyfilmsComponent;
  let fixture: ComponentFixture<ComedyfilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComedyfilmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComedyfilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
