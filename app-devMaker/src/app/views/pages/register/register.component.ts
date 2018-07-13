import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
  providers: [AppService]
})
export class RegisterComponent implements OnInit {
getData: any;
  constructor(
    
  ) { }

  ngOnInit() {
  }
}
