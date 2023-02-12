import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFactsGeneratorComponent } from './page-facts-generator.component';

describe('PageFactsGeneratorComponent', () => {
  let component: PageFactsGeneratorComponent;
  let fixture: ComponentFixture<PageFactsGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFactsGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFactsGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
