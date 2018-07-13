import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AppService } from '../../../app.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


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
    return this.httpAppService.getCep()
    .subscribe(
        data => this.getData = data,
        error => alert(error),
        () => console.log(this.getData)
     );
  }
}
