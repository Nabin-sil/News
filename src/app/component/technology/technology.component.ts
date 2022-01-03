import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from 'src/app/service/newsapiservice.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  constructor( private service: NewsapiserviceService) { }

//display data
techData:any=[];

isLoading = true;


  ngOnInit(): void {
  
     this.service.techNews().subscribe((result)=>{
       console.log(result);
       this.techData = result.articles
       this.isLoading = false;

     })
  }
}
