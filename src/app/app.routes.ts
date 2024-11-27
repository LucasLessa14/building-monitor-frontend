import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CadastrarEdificacaoComponent } from './pages/cadastrar-edificacao/cadastrar-edificacao.component';
import { CadastrarDenunciaComponent } from './pages/cadastrar-denuncia/cadastrar-denuncia.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'cadastrar-edificacao',
    component: CadastrarEdificacaoComponent,
  },
  {
    path: 'cadastrar-denuncia',
    component: CadastrarDenunciaComponent,
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
