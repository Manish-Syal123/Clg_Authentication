import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LogincheckService {
  private apiUrl = 'http://localhost:8080/login';
  constructor(private http: HttpClient) {}

  getApiData(formData: any) {
    return this.http.post(this.apiUrl, formData);
  }
}
