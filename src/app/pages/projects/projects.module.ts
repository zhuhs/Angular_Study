import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NzTableModule } from 'ng-zorro-antd/table';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';


@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    SharedModule,
    NzTableModule,
    ProjectsRoutingModule,
  ],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
