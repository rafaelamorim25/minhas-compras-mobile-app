import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { ErrorInterceptorProvider } from '../interceptors/error-interceptor';
import { AuthService } from '../services/auth.service';
import { ClienteService } from '../services/cliente.service';
import { VisualizarContaPage } from '../pages/visualizar-conta/visualizar-conta';
import { ClienteEditarPage } from '../pages/cliente-editar/cliente-editar';
import { ClienteDetailsPage } from '../pages/cliente-details/cliente-details';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VisualizarContaPage,
    ClienteEditarPage,
    ClienteDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VisualizarContaPage,
    ClienteEditarPage,
    ClienteDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ErrorInterceptorProvider,
    AuthService,
    ClienteService
  ]
})
export class AppModule {}
