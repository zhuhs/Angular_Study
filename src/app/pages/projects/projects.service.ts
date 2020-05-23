import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectListApi = 'https://api.github.com/users/zhuhs/repos';
  constructor(private http: HttpClient) { }

  getProjects(): Observable<any> {
    return this.http.get(this.projectListApi);
  }
}
