import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResearchEthicsService {

  constructor(private http: HttpClient) { }
  researchEthicsJson() {
    return this.http.get<any>('assets/researchEthics.json');
  }
}
