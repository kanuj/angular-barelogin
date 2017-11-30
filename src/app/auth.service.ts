import { Injectable } from '@angular/core';
import { SessionHelper } from './session-helper';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { StorageAdapter } from './storage-adapter';

@Injectable()
export class AuthService {

  apiEndPt = 'http://localhost:8085/';

  constructor(private helper: SessionHelper, private http: Http, private storage: StorageAdapter) { }

  async authLogin(username: string, password: string) {

    const postBody = { 'username': username, 'password': password };
    const response = await this.http.post(this.apiEndPt + 'process_url.php', postBody).toPromise();
    const checkResponse = response.json();
    if (checkResponse.auth) {
      this.helper.createSession();
    }
    return checkResponse;
  }

  isLoggedIn(): boolean {
    if (this.storage.getItem('SESSID')) { return true; }
    return false;
  }

}
