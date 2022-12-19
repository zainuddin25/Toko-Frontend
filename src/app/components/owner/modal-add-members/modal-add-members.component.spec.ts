import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddMembersComponent } from './modal-add-members.component';

describe('ModalAddMembersComponent', () => {
  let component: ModalAddMembersComponent;
  let fixture: ComponentFixture<ModalAddMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddMembersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
