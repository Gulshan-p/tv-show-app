import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentInfTvshowComponent } from './current-inf-tvshow.component';

describe('CurrentInfTvshowComponent', () => {
  let component: CurrentInfTvshowComponent;
  let fixture: ComponentFixture<CurrentInfTvshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentInfTvshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentInfTvshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
