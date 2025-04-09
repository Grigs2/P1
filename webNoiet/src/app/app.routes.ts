import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { CestaDeComprasComponent } from './cesta-de-compras/cesta-de-compras.component';
import { DetalheDoProdutoComponent } from './detalhe-do-produto/detalhe-do-produto.component';
import { GravarPedidoComponent } from './gravar-pedido/gravar-pedido.component';
import { VitrineComponent } from './vitrine/vitrine.component';

export const routes: Routes = [

    {path:"cestadecompras", component:CestaDeComprasComponent},
    {path:"gravarpedido", component:GravarPedidoComponent},
    {path:"cadastro", component:CadastroComponent},
    {path:"login", component:LoginComponent},
    {path:"detalheproduto", component:DetalheDoProdutoComponent},
    {path:"", component:VitrineComponent}
];
