import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {
    public mensagem: String = "";
    public produtos: Produto[] = [
      {"codigo":1, "nome":"Familia Foca","quantidade":5, "valor":100.0, "descritivo":"Um conjunto de familia foca"},
      {"codigo":2, "nome":"Familia coelho","quantidade":15, "valor":110.0, "descritivo":"Um conjunto de familia coelho mais acessorios padroes"},
      {"codigo":3, "nome":"Familia lontras","quantidade":0, "valor":180.0, "descritivo":"um conjunto de familia lontras mais roupas"}
    ];
 
    public detalhes(obj: Produto){
      localStorage.setItem("produto", JSON.stringify(obj));
      location.href="./detalheproduto";
    }
 
}