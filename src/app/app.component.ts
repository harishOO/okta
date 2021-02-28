import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OktaService } from './okta.service';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://dev-87969026.okta.com/oauth2/default',
  redirectUri: window.location.origin,
  clientId: 'Ooa618cdymzXxruqg5d6',
  strictDiscoveryDocumentValidation: false
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'okta';
  isEdit: boolean = false;
  cols: any = [];
  
  id: any; name:any; age:any; empValues: any = [];
  constructor(private oktaSrvc: OktaService, private oauthsrvc: OAuthService) {
    this.oauthsrvc.configure(authConfig);
    this.oauthsrvc.loadDiscoveryDocumentAndTryLogin();
  }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'age', header: 'Age' }
    ];
  }

  saveEmps() {}

  clear() {
    this.isEdit = false;
  }

  login() {
    this.oauthsrvc.initImplicitFlow();
  }
  logout() {
    this.oauthsrvc.logOut();
  }


}
