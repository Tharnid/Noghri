import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponent } from './shared/shared.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';

@NgModule({
   declarations: [
      AppComponent,
      SharedComponent,
      PostCreateComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule
   ],
 
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
