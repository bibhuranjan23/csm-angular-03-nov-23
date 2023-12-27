import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { GrandchildComponent } from './grandchild/grandchild.component';
import { MytitlePipe } from './mytitle.pipe';
import { ResultComponent } from './result/result.component';
import { StudentService } from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandchildComponent,
    MytitlePipe,
    ResultComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
