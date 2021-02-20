import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { ClienteDTO } from '../../models/cliente.dto';
import { ClienteDetailsPageModule } from '../cliente-details/cliente-details.module';

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
    private clienteService: ClienteService
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
    console.log('ionViewDidLoad ClienteFormPage');
  }

  registrar() {

    let cliente: ClienteDTO = new ClienteDTO(
      this.form.controls.nome.value,
        this.form.controls.cpf.value,
        this.form.controls.telefone.value,
        this.form.controls.email.value,
        this.form.controls.senha.value
    );

    this.clienteService.create(cliente).subscribe(
      r => {console.log(r)},
      error => {console.log(error)}
    );
  }



}
