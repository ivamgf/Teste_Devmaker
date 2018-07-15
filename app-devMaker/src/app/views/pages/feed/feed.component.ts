import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit {
public getDataPost: any;
public getDataPhoto: any;
  constructor(
    public httpAppService: AppService,
    public http: Http
  ) { }

  ngOnInit() {
  return this.httpAppService.getPost()
  .subscribe(
      data => this.getDataPost = data,
      error => alert(error),
      () => console.log(this.getDataPost)
   );
  }
}
