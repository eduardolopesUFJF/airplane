import { LoaderService } from './loader.service';
import { PreloadingStrategy } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

declare type jQuery = any;
declare var $: jQuery;

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  get content(){
    return this.loaderService.content;
  }

  get loading() {
    return this.loaderService.loading;
  }

  constructor(private loaderService: LoaderService) { }

  ngOnInit() { }
 
}