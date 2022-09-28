import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LawQuestionService {
  
  constructor(private http: HttpClient) { }
  lawQuestionJson() {
    return this.http.get<any>('assets/law-questions.json');
  }
}
