import { Routes } from '@angular/router';
import { Bienvenida } from './bienvenida/bienvenida';
import { Blindeos } from './blindeos/blindeos';
import { Error } from './error/error';

export const routes: Routes = [{
    path: 'bienvenida',
    component: Bienvenida
},
{
    path: 'blindeos',
    component: Blindeos
},
{
    path: 'error',
    component: Error
}, {
    path: 'login',
    loadComponent: () => import('./login/login').then(m => m.Login) // Esto es para lazy loading. Nos permite cargar el componente solo cuando es necesario.           (HACERLO SIEMPRE DE ESTA FORMA, el "component" no es tan eficiente.)
},
{
    path: '**', // Esto siempre va en la ultima posicion.
    redirectTo: "error"
}];