import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivePostsComponent } from './active-posts/active-posts.component';
import { InactivePostsComponent } from './inactive-posts/inactive-posts.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersService } from './service/users.service';



const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'active-posts', component:ActivePostsComponent},
  {path: 'inactive-posts', component: InactivePostsComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

