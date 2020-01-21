import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { LoaderModule } from "./loader/loader.module";

@NgModule({
  declarations: [],
  exports: [LoaderModule],
  imports: [
    CommonModule,
    HttpModule,
    LoaderModule
  ],
  providers: []
})

export class CoreModule { }