import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrorfilmsComponent } from './terrorfilms.component';

describe('TerrorfilmsComponent', () => {
  let component: TerrorfilmsComponent;
  let fixture: ComponentFixture<TerrorfilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrorfilmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerrorfilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
