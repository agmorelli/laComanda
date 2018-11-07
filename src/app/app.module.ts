import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';   

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { MiHttpService } from './servicios/mi-http.service';
import { UsuariosService } from './servicios/usuarios.service';
import { HttpModule } from '@angular/http';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { MozoComponent } from './componentes/mozo/mozo.component';
import { BotonAgregarComponent } from './componentes/boton-agregar/boton-agregar.component';
import { ProductosService } from './servicios/productos.service';
import { AuthService } from './servicios/auth/auth.service';
import { AuthGuardService } from './servicios/auth/auth-guard.service';
import { ErrorComponent } from './componentes/error/error.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { CocinaComponent } from './componentes/cocina/cocina.component';
import { RoleGuardService } from './servicios/auth/role-guard-service.service';
import { AdminComponent } from './componentes/admin/admin.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { BotonBorrarComponent } from './componentes/boton-borrar/boton-borrar.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { BotonSuspenderComponent } from './componentes/boton-suspender/boton-suspender.component';
import { PedidoService } from './servicios/pedido.service';
import {FileUploadModule} from 'primeng/fileupload';




export function tokenGetter() {
  return localStorage.getItem('access_token');
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    MozoComponent,
    BotonAgregarComponent,
    ErrorComponent,
    CocinaComponent,
    AdminComponent,
    RegistroComponent,
    BotonBorrarComponent,
    UsuariosComponent,
    BotonSuspenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    HttpModule,
    FileUploadModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3001'],
        blacklistedRoutes: ['localhost:3001/auth/']
      }
    })
  ],
  providers: [MiHttpService, 
    UsuariosService, 
    ProductosService, 
    PedidoService,
    AuthService, 
    AuthGuardService, 
    JwtHelperService, 
    RoleGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
