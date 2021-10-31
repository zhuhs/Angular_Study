import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { DrawRoutingModule } from './draw-routing.module';
import { DrawComponent } from './draw.component';


@NgModule({
    imports: [SharedModule, DrawRoutingModule],
    declarations: [DrawComponent],
    exports: [DrawComponent]
  })
export class DrawModule { }


