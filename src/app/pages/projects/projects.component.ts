import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects: Array<any> = [];
  public projectCols: Array<string> = ['项目ID', '项目名称', '项目类型', '描述', 'fork库'];
  public projectName = 'zhuhs';

  constructor(private projectsService: ProjectsService) { }

  initProjectTable(): void {
    this.projectsService.getProjects().subscribe(res => {
      this.projects = res;
      console.log(this.projects);
    }, error => console.log('http failed'));
  }

  ngOnInit(): void {
    this.initProjectTable();
  }

}
