import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NextLevelQuestionService {

  constructor(private http: HttpClient) { }
  getNextLevelQuestionJson() {
    return this.http.get<any>('assets/nextLevel-questions.json');
  }
}
