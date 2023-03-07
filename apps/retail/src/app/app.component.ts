import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Message } from '@fj-retail/api-interfaces';

@Component({
  selector: 'fj-retail-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent
{
  title = 'retail';
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) { }
}
