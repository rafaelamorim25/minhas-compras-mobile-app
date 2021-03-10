import { Component } from '@angular/core';
import { MenuController, NavController, ToastController } from 'ionic-angular';
import { UserDTO } from '../../models/user.dto';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  creds : UserDTO = {
    email: "",
    senha: ""
  };

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public auth: AuthService,
    private toastController: ToastController
    ) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
    
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  login() {
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('ClientesPage');
      },
      error => {
        this.exibirMensagem('Login ou senha inválidos');
      });    
  }

  criarConta(){
    this.navCtrl.setRoot('ClienteFormPage');
  }

  recuperarSenha(){
    this.navCtrl.setRoot('RecuperarSenhaPage');
  }

  exibirMensagem(mensagem: string) {

    const toast = this.toastController.create(
      {
        message : mensagem,
        duration: 2000
      }
    ) 
    toast.present();
  }
}
