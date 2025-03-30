import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouserDetailComponent } from './couser-detail.component';

describe('CouserDetailComponent', () => {
  let component: CouserDetailComponent;
  let fixture: ComponentFixture<CouserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouserDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
