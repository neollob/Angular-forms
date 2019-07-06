# Angular Forms

### Angular App

`ng new myapp -p amf --routing true` 

Un cop creada canviem al seu directori per crear els elements necessaris.
a `package.json` canviar el script `"start":"ng serve ---aot -o"` 

### Moduls

```
ng g m commons --routing false
ng g m myforms --routing true
```
el modul commons no esta enrrutat, pero els seus components tindran rutes (`routerLink` a `navBar`)  per tant el modul ha d'importar `RouterModule` 
```ts
@NgModule({
   imports: [
     CommonModule,
     RouterModule
   ]
```
Per altre banda seràn cridats des d'altres moduls (`home`, `notFound`) per tant hem d'importar el modul `commons` al modul principal de l'aplicació `appModule`
```ts
@NgModule({
   ...
   imports: [
     BrowserModule,
     AppRoutingModule,
     CommonsModule
   ],
   ...
 })
```
### Components
```
ng g c commons/header --export
```

### Rutes
Si es tracta d'erutament directe l'has de declarar al `app-routing.module.ts` (o modul principal de l'app)
```ts
const routes: Routes = [
...
{ path: 'form01', component: Form01Component },
...
];
```
i al `navbar.component.html` 
```html
          <a class="dropdown-item" routerLink="/form01">Form 1</a>
```

Si fas una carrega lenta o posposada (Lazy load) al modul principal `app-routing.module.ts` has de declarar el pare que te les rutes dels formularis
```ts
const routes: Routes = [
...
  
  { path: 'forms', loadChildren: () => import('./myforms/myforms.module').then(mod => mod.MyformsModule) },
...
];
```
i al routing del modul pare `myforms-routing.module.ts` la ruta del formulari
```ts
const routes: Routes = [
...
  {path:'form01',component:Form01Component}
...
];
```
i al `navbar.component.html`
```html
          <a class="dropdown-item" routerLink="/forms/form01">Form 1</a>
```
Exemple rutes al modul principal `app-routing-module.ts`
```ts
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'forms', loadChildren: () => import('./myforms/myforms.module').then(mod => mod.MyformsModule) },
  { path: '**', component: NotfoundComponent }
];
```

## Caracteristiques propies d'Angular

### Identificadors d'elements

per poden identificar un element, que amb javascript fem amb `id`, amb Angular ho fem amb `#` 

### Placeholder

per posar el text als inputs desde la lògica `form01.component.ts` definim els valors que mostrarem als inputs 
```ts
placeholders = {
     'username': 'Teclea tu nombre de usuario',
     'userpass': 'Teclea tu contraseña'
   };
```
a la vista `form01.component.html` ho representarem entre corxets `[]` que indica que espera un valor desde la lògica
```html
<input type='password' class='form-control' #usernamePass [placeholder]='placeholders.userpass'>
```

### Classes

`ng g class shared/classes/User`

definim el contingut de la classe 

Exemple 1

```ts
export class User {
  id: string;
  dni: string;
  nombre: string;

  constructor(dni, nombre) {
    this.id = this.uniqueID(dni, nombre);
    this.dni = dni;
    this.nombre = nombre;
  }

  private uniqueID(dni, nombre) {
    if (dni != '' && nombre != '') {
      const thisMS: number = Date.now();
      const shake = Math.random();
      let unique: string = Math.pow(thisMS, shake).toString();
      unique = unique.toString().replace('.', thisMS.toString());
      return unique;
    } else { return ''; }
  }
}
```

Exemple 2 

```ts
export class User {
  private id: string;
  private username: string;
  private password: string;
  constructor() {
    this.id = this.uniqueId();
    this.username = '';
    this.password = '';
  }
  public setUsername(username) { this.username = username; }
  public setPassword(password) { this.password = password; }
  public getId() { return this.id; }
  public getUsername() { return this.username; }
  public getPassword() { return this.password; }
  private uniqueId() {
    const thisMS: number = Date.now();
    const shake = Math.random();
    let unique: string = Math.pow(thisMS, shake).toString();
    unique = unique.toString().replace('.', thisMS.toString());
    return unique;
  }
}
```

### ngModel
En cualquier módulo en el que uno de sus componentes vaya a emplear `ngModel` debemos importar el módulo `FormsModule` de `@angular/forms`

```ts
import {FormsModule} from '@angular/forms';

@NgModule({
   imports: [
     ...
     FormsModule,
     ...
   ], 
```
