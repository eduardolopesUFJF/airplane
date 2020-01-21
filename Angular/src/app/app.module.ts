import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routing.module';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material';
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    routing,
    ToastrModule.forRoot(
      {
        preventDuplicates: true,
        resetTimeoutOnDuplicate: true
      }
    ),
    MatDialogModule,
    CoreModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
