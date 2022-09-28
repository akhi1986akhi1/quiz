import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HypothesisService {

  constructor(private http: HttpClient) { }
  getHypothesisJson() {
    return this.http.get<any>('assets/hypothesis.json');
  }
}
