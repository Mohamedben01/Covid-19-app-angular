import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesGlobalDataComponent } from './countries-global-data.component';

describe('CountriesGlobalDataComponent', () => {
  let component: CountriesGlobalDataComponent;
  let fixture: ComponentFixture<CountriesGlobalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesGlobalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesGlobalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
