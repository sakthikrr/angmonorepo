import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConFormComponent } from './con-form.component';

describe('ConFormComponent', () => {
  let component: ConFormComponent;
  let fixture: ComponentFixture<ConFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
