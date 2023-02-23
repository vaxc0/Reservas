import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public dataPortal:any


  constructor(
    private route:ActivatedRoute
  ){}
  ngOnInit(){
    let aux
    this.route.paramMap.subscribe(params=>{
       aux = params.get('portal')
    })
    if(aux =='galileo'){
      this.dataPortal={
        nombre:"Galileo"
      }
    }else if(aux=='genesis'){
      this.dataPortal={
        nombre:"Genesis"
      }
    }
  }

}
