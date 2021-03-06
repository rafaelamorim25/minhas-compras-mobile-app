import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { ClienteDTO } from '../../models/cliente.dto';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ClienteFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente-form',
  templateUrl: 'cliente-form.html',
})
export class ClienteFormPage {

  form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private toastController: ToastController
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
   
  }

  get f() { return this.form.controls; }

  registrar() {

    if (this.f.confirmaEmail.value !== this.f.email.value) {
      this.exibirMensagem('A confirmação de email está incorreta');
      return;
    }

    if(this.f.confirmaSenha.value !== this.f.senha.value){
      this.exibirMensagem('A confirmação de senha está incorreta');
      return;
    }

    let cliente: ClienteDTO = new ClienteDTO(
      this.f.nome.value,
        this.f.cpf.value,
        this.f.telefone.value,
        this.f.email.value,
        this.f.senha.value
    );

    this.clienteService.create(cliente).subscribe(
      r => {this.navCtrl.setRoot(HomePage); this.exibirMensagem('Conta criada com sucesso')},
      error => {
        let mensagem: string = '';

        console.log(error);

        if (error.errorsList !== undefined) {
          error.errorsList.forEach(element => {
            mensagem = mensagem + '(' + element.fieldName + ': ' + element.message + ')'
          });
        }
        this.exibirMensagem(error.msg + mensagem);
      }
    );
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
