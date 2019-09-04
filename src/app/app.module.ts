import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    UsersComponent,
    UserComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : "", component : HomeComponent },
      { path : "about", component : AboutComponent },
      { path : "blog", component : BlogComponent },
      { path : "contact", canActivate : [], component : ContactComponent },
      { path : "users", component : UsersComponent,
        children : [
            { path : ":id", component : UserComponent }
        ]}
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
