import { Component } from '@angular/core';
import {AuthConfig, NullValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {THIS_EXPR} from '@angular/compiler/src/output/output_ast';
import {MessageService} from './services/message.service';
import {LoginService} from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keycloak-frontend';
  username: string;
  isLogged: boolean;
  isAdmin: boolean;

  constructor(private oauthService: OAuthService, private messageService: MessageService, private loginService: LoginService) {
    this.configure();
  }

  authConfig: AuthConfig = {
    // Url of the Identity Provider
    issuer: 'http://localhost:8080/auth/realms/tutorial',

    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin,

    // The SPA's id. The SPA is registerd with this id at the auth-server
    // clientId: 'server.code',
    clientId: 'tutorial-frontend',

    // Just needed if your auth server demands a secret. In general, this
    // is a sign that the auth server is not configured with SPAs in mind
    // and it might not enforce further best practices vital for security
    // such applications.
    // dummyClientSecret: 'secret',

    responseType: 'code',

    // set the scope for the permissions the client should request
    // The first four are defined by OIDC.
    // Important: Request offline_access to get a refresh token
    // The api scope is a usecase specific one
    scope: 'openid profile email offline_access',

    showDebugInformation: true,
  };

  configure(): void {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocument().then(() => this.oauthService.tryLogin()).then(() => {
      if(this.oauthService.getIdentityClaims()) {
        this.isLogged = this.loginService.getIsLogged();
        this.isAdmin = this.loginService.getIsAdmin();
        this.username = this.loginService.getUsername();
        this.messageService.sendMessage(this.loginService.getUsername());
      }
    });
  }

}
