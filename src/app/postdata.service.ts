import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostdataService {
  private apiUrl = 'http://localhost:8080/postuserdata';

  constructor(private http: HttpClient) {}
  saveData(formData: any) {
    return this.http.post(this.apiUrl, formData);
  }
}
