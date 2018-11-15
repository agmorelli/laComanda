import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem, MessageService} from 'primeng/api';   
import { Angular2CsvModule } from 'angular2-csv';

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
import { CsvComponent } from './componentes/csv/csv.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { ChartModule } from 'angular-highcharts';
//import { ChartComponent } from './componentes/chart/chart.component';
import * as highstock from 'highcharts/modules/stock.src';
import {HIGHCHARTS_MODULES} from 'angular-highcharts';
import { ChartComponent } from './componentes/chart/chart.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { TipoProductoDirective } from './directivas/tipo-producto.directive';
import { FondoDirective } from './directivas/fondo.directive';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { BarraComponent } from './componentes/barra/barra.component';
import { ChoperaComponent } from './componentes/chopera/chopera.component';
import { CandyComponent } from './componentes/candy/candy.component';
import { TablaPendientesComponent } from './componentes/tabla-pendientes/tabla-pendientes.component';
import { BotonPrepararComponent } from './componentes/boton-preparar/boton-preparar.component';
import { PruebaPipe } from './pipes/prueba.pipe';
import { MiCaptchaComponent } from './componentes/mi-captcha/mi-captcha.component';
import { CapcthaPipe } from './pipes/capctha.pipe';
import { FiltroPipe } from './pipes/filtro.pipe';
import { BotonServirComponent } from './componentes/boton-servir/boton-servir.component';
import { EstadoPedidoDirective } from './directivas/estado-pedido.directive';
import { CronometroComponent } from './componentes/cronometro/cronometro.component';
import { ColorTimerDirective } from './directivas/color-timer.directive';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {GrowlModule} from 'primeng/growl';






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
    BotonSuspenderComponent,
    CsvComponent,
    ChartComponent,
    EstadisticasComponent,
    TipoProductoDirective,
    FondoDirective,
    ClienteComponent,
    BarraComponent,
    ChoperaComponent,
    CandyComponent,
    TablaPendientesComponent,
    BotonPrepararComponent,
    PruebaPipe,
    MiCaptchaComponent,
    CapcthaPipe,
    FiltroPipe,
    BotonServirComponent,
    EstadoPedidoDirective,
    CronometroComponent,
    ColorTimerDirective
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
    Angular2CsvModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    ChartModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    GrowlModule,
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
    MessageService,
    RoleGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
