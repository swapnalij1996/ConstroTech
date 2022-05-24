import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

public test1:string='ABOUT US';
public test2='Building isn’t just a job. At the Construction Company, it is our passion. With every project we undertake, we set the bar high and provide the best people in the industry, with a true love of what we do to make our Customers’ vision a reality.'
public test3='COMPANY LINKS'
public test4='CONTACT INFO'
public test5='History'
public test6='Team & Awards'
public test7='Community'
public test8='News & Events'
public test9='FAQ'
public test10='Contact Us'
public test11='ADDRESS: '
public test12='1379 Shoreline Parkway, Mountain View, CA 94043, United States.'
public test13='PHONE:'
public test14='+1 718-999-3939'
public test15='E-mail:'
public test16='contact@construction.com'




  constructor() { }

  ngOnInit(): void {
  }

}
