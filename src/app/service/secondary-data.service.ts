import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecondaryDataService {

  constructor(private http: HttpClient) { }
  getSecondaryDataJson() {
    return this.http.get<any>('assets/secondaryData.json');
  }
}
