import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesDataComponent } from './countries-data.component';

describe('CountriesDataComponent', () => {
  let component: CountriesDataComponent;
  let fixture: ComponentFixture<CountriesDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
