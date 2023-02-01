import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtractTextService {

  constructor(private http: HttpClient) { }

  extractText(url: string): Promise<string> {
    return fetch(`https://cors-anywhere.herokuapp.com/${url}`)
      .then(response => response.text());
  }
}