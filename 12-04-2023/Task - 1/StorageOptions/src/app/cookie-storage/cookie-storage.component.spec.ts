import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieStorageComponent } from './cookie-storage.component';

describe('CookieStorageComponent', () => {
  let component: CookieStorageComponent;
  let fixture: ComponentFixture<CookieStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookieStorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookieStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
