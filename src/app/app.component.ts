import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ExtractTextService } from './extract-text.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Response {
  articleText: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'refocus';
  articleUrl!: string;
  articleText!: string;
  data: any;

  /*constructor(private extractTextService: ExtractTextService) {}*/
  
  constructor(private extractTextService: ExtractTextService) {}

  ngOnInit() { 
 
  }


  extractText() {
    
    
    this.extractTextService.extractText(this.articleUrl).then(articleText => {this.articleText = articleText}).catch(error => console.error(error));
   
  }
  }

  


