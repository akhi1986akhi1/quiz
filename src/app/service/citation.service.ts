import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitationService {

  constructor(private http: HttpClient) { }
  citationJson() {
    return this.http.get<any>('assets/citation.json');
  }
}
