import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteDTO } from '../../models/cliente.dto';
import { ClienteService } from '../../services/cliente.service';

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
    this.clienteService.buscar()
    .subscribe(
      r => { this.cliente = r; this.form.patchValue(this.cliente); this.form.disable}
    )
  }

}
