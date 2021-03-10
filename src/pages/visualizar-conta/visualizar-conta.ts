import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteDTO } from '../../models/cliente.dto';
import { AuthService } from '../../services/auth.service';
import { ClienteService } from '../../services/cliente.service';
import { ClienteEditarPage } from '../cliente-editar/cliente-editar';
import { HomePage } from '../home/home';

/**
 * Generated class for the VisualizarContaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visualizar-conta',
  templateUrl: 'visualizar-conta.html',
})
export class VisualizarContaPage {

  form: FormGroup;

  cliente: ClienteDTO;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private alertController: AlertController,
    private toastController: ToastController,
    private authService: AuthService
  ) {

    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
      senha: ['', Validators.required],
      confirmaEmail: ['', Validators.required],
      confirmaSenha: ['', Validators.required]
    })
  }

  ionViewDidLoad() {
    this.clienteService.buscar()
      .subscribe(
        r => { this.cliente = r; this.form.patchValue(this.cliente); this.form.disable }
      )
  }

  confirmaExclusao() {

    const alert = this.alertController.create({
      title: 'Deseja realmente excluir sua conta?',
      buttons: [
        {
          text: 'Sim',
          handler: () => {

            //Chamar o service e exclui a conta
            this.clienteService.delete(this.cliente.id).subscribe(
              r => {
                this.authService.logout();
                this.exibirMensagem('Conta excluída com sucesso');
                this.navCtrl.setRoot(HomePage);
              },
              err => {
                this.exibirMensagem('Não foi possível excluir a conta');
              }
            )
          }
        }
        , 'Não']
    });

    alert.present();
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

  editar(){
    this.navCtrl.setRoot(ClienteEditarPage);
  }
}
