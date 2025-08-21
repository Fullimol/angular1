import { Routes } from '@angular/router';
import { Bienvenida } from './bienvenida/bienvenida';
import { Blindeos } from './blindeos/blindeos';
import { Error } from './error/error';
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { Auth } from './auth/auth';

export const routes: Routes = [{
    path: 'bienvenida',
    loadComponent: () => import('./bienvenida/bienvenida').then(m => m.Bienvenida) // Esto es para lazy loading. Nos permite cargar el componente solo cuando es necesario. (HACERLO SIEMPRE DE ESTA FORMA, el "component" no es tan eficiente.)
},
{
    path: 'blindeos',
    component: Blindeos
},
{
    path: 'error',
    component: Error
},
{
    path: 'auth', // ruta para ir al login/registro
    component: Auth,
    children: [
        {
            path: 'login',
            component: Login
        },
        {
            path: 'registro',
            component: Registro
        }
    ]
},

{
    path: '**', // Esto siempre va en la ultima posicion.
    redirectTo: "error"
}];