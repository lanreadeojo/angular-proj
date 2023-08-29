import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesRowComponent } from './nodes-row.component';

describe('NodesRowComponent', () => {
  let component: NodesRowComponent;
  let fixture: ComponentFixture<NodesRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodesRowComponent]
    });
    fixture = TestBed.createComponent(NodesRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
