import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSessioComponent } from './iniciar-sessio.component';

describe('IniciarSessioComponent', () => {
  let component: IniciarSessioComponent;
  let fixture: ComponentFixture<IniciarSessioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarSessioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciarSessioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
