import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtractTextService {

  constructor(private http: HttpClient) { }

  extractText(url: string): Promise<string> {
    return fetch(`http://localhost/extract-article.php?url=${url}`)
      .then(response => response.text());
  }
}