import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from 'src/app/service/newsapiservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private service:NewsapiserviceService) { }

//display data
topHeadingData:any=[];

  ngOnInit(): void {
  
     this.service.heading().subscribe((result)=>{
       console.log(result);
       this.topHeadingData = result.articles
     })
  }



}
