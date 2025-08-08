import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'smartphones',
    loadChildren: () => import('./paginas/smartphones/smartphones.module').then( m => m.SmartphonesPageModule)
  },
  {
    path: 'oppo-neles',
    loadChildren: () => import('./paginas/oppo-neles/oppo-neles.module').then( m => m.OppoNelesPageModule)
  },
  {
    path: 'reversao',
    loadChildren: () => import('./paginas/reversao/reversao.module').then( m => m.ReversaoPageModule)
  },
  {
    path: 'boas-praticas',
    loadChildren: () => import('./paginas/boas-praticas/boas-praticas.module').then( m => m.BoasPraticasPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./paginas/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'specs/:id', // O ':id' é o parâmetro que vai receber o ID do smartphone
    loadChildren: () => import('./paginas/specs/specs.module').then(m => m.SpecsPageModule)
  },
  {
    path: 'suporte',
    loadChildren: () => import('./paginas/suporte/suporte.module').then( m => m.SuportePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}