import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AppService } from '../../../app.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
  providers: [AppService]
})
export class RegisterComponent implements OnInit {
  rua: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  cep: any;
  getData: any;
  form_reg: FormGroup;
  getConsultCep: any = {
    nome: '',
    email: '',
    telefone: '',
    cep: '',
    logradouro: '',
    num: '',
    comp: '',
    uf: '',
    localidade: '',
    pwd: '',
    conf: ''
  };
  constructor(
    public httpAppService: AppService,
    public http: Http
  ) { }

  ngOnInit() { }
  /*onGetCep() {
    const cep = this.form_reg.get('cep').value;
    this.cep = cep.replace(/\D/g, '');
    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;
        if (validacep.test(cep)) {
          this.reset();
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
    .pipe(map(data => data.json()))
    .subscribe(
        data => this.getData = data,
        error => alert(error),
        (_data: any) => this.populaDados()
     );
    }
  }
  }*/
  onGetCep() {
    return this.http.get(`https://viacep.com.br/ws/${this.getConsultCep.cep}/json/`)
    .pipe(map(data => data.json()))
    .subscribe(
        data => this.getData = data,
        error => alert(error),
        () => this.rua = this.getData.logradouro,
     );
  }
  reset() {
    this.getConsultCep.nome = '';
    this.getConsultCep.email = '';
    this.getConsultCep.telefone = '';
    this.getConsultCep.cep = '';
    this.getData.logradouro = '';
    this.getConsultCep.num = '';
    this.getData.comp = '';
    this.getData.uf = '';
    this.getData.localidade = '';
    this.getConsultCep.pwd = '';
    this.getConsultCep.conf = '';
  }
}
