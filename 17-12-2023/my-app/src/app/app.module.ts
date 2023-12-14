import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { MyCustomDirective } from './my-custom.directive';
import { MyStructuralDirectiveDirective } from './my-structural-directive.directive';
import { AlterBackgroundHandlerDirective } from './app-alter-background-handler.directive';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EmployeesComponent,
    ProductlistComponent,
    MyCustomDirective,
    MyStructuralDirectiveDirective,
    AlterBackgroundHandlerDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
