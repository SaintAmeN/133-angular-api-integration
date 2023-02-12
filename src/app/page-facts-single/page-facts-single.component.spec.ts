import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFactsSingleComponent } from './page-facts-single.component';

describe('PageFactsSingleComponent', () => {
  let component: PageFactsSingleComponent;
  let fixture: ComponentFixture<PageFactsSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFactsSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFactsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
