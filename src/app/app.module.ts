import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OAuthModule} from 'angular-oauth2-oidc';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './foo/list/list.component';
import { DetailComponent } from './foo/detail/detail.component';
import { CreateComponent } from './foo/create/create.component';
import { UpdateComponent } from './foo/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ListComponent,
    DetailComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:8100/foo'],
        sendAccessToken: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
