import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FirelistComponent } from './firelist/firelist.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: IndexComponent},
      {path: 'firelist', component: FirelistComponent}
    ]),
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyAfTx61_v-PaZXhvNYzv1F36RZ2oEaZvoI",
        authDomain: "angularlist-2a0e3.firebaseapp.com",
        projectId: "angularlist-2a0e3",
        storageBucket: "angularlist-2a0e3.appspot.com",
        messagingSenderId: "700347280400",
        appId: "1:700347280400:web:ec7fe99ecd3dcb520e2e95"
      }
    ),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [ AppComponent, HelloComponent, IndexComponent, FirelistComponent],
  bootstrap:    [ AppComponent ],
  providers: [ AuthService ]
})
export class AppModule { }