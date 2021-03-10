import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ClienteDTO } from '../../models/cliente.dto';
import { ClienteService } from '../../services/cliente.service';
import { ClienteDetailsPage } from '../cliente-details/cliente-details';

/**
 * Generated class for the ClienteEditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente-editar',
  templateUrl: 'cliente-editar.html',
})
export class ClienteEditarPage {

  form: FormGroup;
  cliente: ClienteDTO;

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
    this.clienteService.buscar()
    .subscribe(
      r => { this.cliente = r; this.form.patchValue(this.cliente); this.form.disable }
    )
    this.form.get('cpf').disable();
  }

  get f() { return this.form.controls; }

  atualizar() {

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
        this.f.senha.value,
        this.cliente.id
    );

    this.clienteService.update(cliente).subscribe(
      r => {this.navCtrl.setRoot(ClienteDetailsPage); this.exibirMensagem('Conta atualizada com sucesso')},
      error => {
        let mensagem: string = '';

        if (error.errorsList !== undefined) {
          error.errorsList.forEach(element => {
            mensagem = mensagem + '(' + element.fieldName + ': ' + element.message + ')'
          });
        }
        this.exibirMensagem(error.msg + mensagem);
      }
    );
  }

  cancelar(){
    this.navCtrl.setRoot(ClienteDetailsPage);
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
