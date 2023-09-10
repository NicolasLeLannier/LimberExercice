import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icampagnes } from './structure';

@Injectable({
  providedIn: "root"
})
export class ReadingJsonFilesComponent {
  private _url = 'assets/data/campagnes.json';

  constructor(private http: HttpClient) {}

  getJSON(): Observable<Icampagnes[]> {
    return this.http.get<Icampagnes[]>(this._url);
  }
  
  }
