import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OAuthService } from '../oauth.service';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private active:ActivatedRoute,private serv:OAuthService,private router:Router) { }

  ngOnInit() {

    this.active.queryParamMap.pipe(concatMap(x=>this.serv.getAcessToken(x.get('code')) ))
    .subscribe(data=>
      {
        //console.log(data);
        localStorage.setItem('Token',data['access_token'])
        
        this.router.navigate(['/todos']),err=>{console.log(err)}}); 

  }

}
