import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {
    TranslateModule,
  } from '@ngx-translate/core';

import { IconsProviderModule } from '../icons-provider.module';
import { FullPageComponent } from './full-page/full-page.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NzLayoutModule,
        IconsProviderModule,
        NzMenuModule,
        TranslateModule,
    ],
    declarations: [LeftMenuComponent, FullPageComponent],
    exports: [LeftMenuComponent, FullPageComponent]
})
export class LayoutModule { }


