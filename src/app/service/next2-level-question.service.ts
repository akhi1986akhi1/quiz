import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Next2LevelQuestionService {

  constructor(private http: HttpClient) { }
  getNext2LevelQuestionJson() {
    return this.http.get<any>('assets/next2Level-questions.json');
  }
}
