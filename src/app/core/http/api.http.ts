import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiHttp {
  constructor(private http: HttpClient) {}

  get(path: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}`, { observe: 'response' });
  }

  put(path: string, body: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}${path}`, body, { observe: 'response' });
  }

  post(path: string, body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}${path}`, body, { observe: 'response' });
  }

  delete(path): Observable<any> {
    return this.http.delete(`${environment.apiUrl}${path}`);
  }

  uploadFile(path, file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${environment.apiUrl}${path}`, formData);
  }

  downloadFile(path, body?): Observable<Blob> {
    const parms = body !== undefined ? body : {};
    return this.http
      .post(`${environment.apiUrl}${path}`, parms, { observe: 'response', responseType: 'blob' })
      .pipe(map((res: any) => new Blob([res.body]), { type: 'application/vnd.ms-excel' }));
  }
}
