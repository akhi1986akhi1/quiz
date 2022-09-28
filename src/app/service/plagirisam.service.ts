import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PlagirisamService {

  constructor(private http: HttpClient) { }
  getPlagirismQuestionJson() {
    return this.http.get<any>('assets/plagirism.json');
  }
}
