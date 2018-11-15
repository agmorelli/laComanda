import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoperaComponent } from './chopera.component';

describe('ChoperaComponent', () => {
  let component: ChoperaComponent;
  let fixture: ComponentFixture<ChoperaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoperaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
