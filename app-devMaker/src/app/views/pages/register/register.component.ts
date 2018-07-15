import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { AppService } from '../../../app.service';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Headers } from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
contentHeaders.append('Access-Control-Allow-Origin', '*');
contentHeaders.append('Access-Control-Allow-Credentials', 'true');

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
  onSubmit() {
    if ( this.getConsultCep.pwd === this.getConsultCep.conf ) {
    const options = new RequestOptions({headers: contentHeaders});
    return this.http.post('https://desafia.sae.digital/api/shows/', this.getConsultCep, options)
    .pipe(map((response: Response) => response.json()))
    .subscribe(
      data => this.getConsultCep = data,
      () => console.log(this.getConsultCep)
    );
    }
  }
}
