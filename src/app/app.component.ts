import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExtractTextService } from './extract-text.service';
import { Observable } from 'rxjs';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'refocus';
  articleUrl!: string;
  articleText!: string;

  constructor(private extractTextService: ExtractTextService) {
    
  }
  ngOnInit() { }


  extractText() {
    
    this.extractTextService.extractText(this.articleUrl).then(articleText => {this.articleText = articleText}).catch(error => console.error(error)); 
      
    
  }
}

