import { NgModule } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';



@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    ProjectsRoutingModule,
    NzTableModule,
    FormsModule,
    CommonModule,
  ],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
