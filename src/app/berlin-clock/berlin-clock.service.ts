import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BerlinClockService {
  private url: string = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  public getBerlinClockTime(time: string): Observable<string> {
    return this.http.get(this.url + '/berlin-clock/encode', {
      responseType: 'text',
      params: { time }
    });
  }
}
