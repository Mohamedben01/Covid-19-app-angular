import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesDetailsComponent } from './countries-details.component';

describe('CountriesDetailsComponent', () => {
  let component: CountriesDetailsComponent;
  let fixture: ComponentFixture<CountriesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
