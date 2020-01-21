import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from './loader.service';
import { LoaderComponent } from './loader.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LoaderComponent
  ],
  providers: [LoaderService],
  exports: [LoaderComponent]
})
export class LoaderModule {}
