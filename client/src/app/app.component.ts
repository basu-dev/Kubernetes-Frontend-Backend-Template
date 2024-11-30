import { Component, inject, signal,effect } from '@angular/core';
import { RouterOutlet, TitleStrategy } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { IUser, IUserPayload } from './user';
import { Subject, startWith, switchMap } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { ServerUrlComponent } from "./server-url/server-url.component";

@Component({
    selector: 'app-root',
    imports: [UserFormComponent, UserListComponent, ServerUrlComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
  http = inject(HttpClient);
  refreshUser = new Subject<void>();

  serverUrl = signal(sessionStorage.getItem('serverUrl')??'');

  onServerUrlSet(value:string){
    this.serverUrl.set(value.trim());
    this.refreshUser.next();
    sessionStorage.setItem('serverUrl',value);
  }

  ngOnInit(){
    if(this.serverUrl()?.length) this.refreshUser.next();
  }

  users = toSignal(
    this.refreshUser.pipe(
      switchMap(()=>
      this.http.get<IUser[]>(`${this.serverUrl()}/users`))
      )
    ) 


  submitForm(userForm:FormGroup){
      this.http.post(`${this.serverUrl()}/users`,userForm.value).subscribe(success=>{
        this.refreshUser.next();
        userForm.reset();
      });
  }

}
