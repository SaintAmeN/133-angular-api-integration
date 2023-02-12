import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFactsListComponent } from './page-facts-list.component';

describe('PageFactsListComponent', () => {
  let component: PageFactsListComponent;
  let fixture: ComponentFixture<PageFactsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFactsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
