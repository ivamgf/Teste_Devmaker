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
  nome = new FormControl();
  email = new FormControl();
  telefone = new FormControl();
  cep = new FormControl();
  rua = new FormControl();
  num = new FormControl();
  comp = new FormControl();
  uf = new FormControl();
  cid = new FormControl();
  pwd = new FormControl();
  conf = new FormControl();
  getData: any;
  form_reg: FormGroup;
  constructor(
    public httpAppService: AppService,
    public http: Http
  ) { }

  ngOnInit() { }
  onGetCep() {
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
        () => console.log(this.getData)
     );
    }
  }
  }
  reset() {
    this.form_reg.patchValue(
      {
        rua: this.getData.rua,
        num: this.getData.num,
        comp: this.getData.comp,
        uf: this.getData.uf,
        cid: this.getData.cid
      }
    );
  }
  populaDados() {
    this.form_reg.patchValue(
      {
        rua: null,
        num: null,
        comp: null,
        uf: null,
        cid: null
      }
    );
  }
}
