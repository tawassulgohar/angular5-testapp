import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import {PostsService} from './services/posts.service'
import { HttpModule } from '@angular/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    HttpModule,
    NgxDatatableModule,
    FormsModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
