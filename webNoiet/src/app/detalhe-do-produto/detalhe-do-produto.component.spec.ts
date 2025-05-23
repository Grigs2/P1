import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheDoProdutoComponent } from './detalhe-do-produto.component';

describe('DetalheDoProdutoComponent', () => {
  let component: DetalheDoProdutoComponent;
  let fixture: ComponentFixture<DetalheDoProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheDoProdutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheDoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
