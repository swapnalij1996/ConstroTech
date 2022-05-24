import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public data1='CONSTRUCTION';
public data2='Home'
//home
public data3:any;
public data4:any;
public data5:any;

  constructor( private us: AuthService) {
    this.  getalldata()
   }

  ngOnInit(): void {
  }
  getalldata(){
    this.us.getdata().subscribe((res:any)=>{
      console.log(res);
      //home
      this.data3=res[0].subHeader[0].subHeaderName;
      this.data3=res[0].subHeader[1].subHeaderName;
      this.data3=res[0].subHeader[2].subHeaderName;

    })
  }

}
