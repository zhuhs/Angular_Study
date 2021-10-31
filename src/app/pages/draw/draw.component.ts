import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit {

  constructor() { }

  updateTime(): void {
    const date = new Date();
    const mins = date.getMinutes();
    const seconds = date.getSeconds();
    const hours = (date.getHours() % 12) + mins / 60;

    const minangle = mins * 6; // 每6°表示一分钟
    const hourangle = hours * 30; // 每30°表示一小时
    const secondangle = seconds * 6; // 每30°表示一秒

    const minhand = document.getElementById('minhand');
    const hourhand = document.getElementById('hourhand');
    const secondhand = document.getElementById('secondhand');

    minhand.setAttribute('transform', 'rotate(' + minangle + ',110,110)');
    hourhand.setAttribute('transform', 'rotate(' + hourangle + ',110,110)');
    secondhand.setAttribute('transform', 'rotate(' + secondangle + ',110,110)');


    setTimeout(() => this.updateTime(), 1000);
  }

  initD3() {
    const width = 300;
    const height = 300;
    const svg = d3.select('#d3Svg')
      .append('svg')
      .attr('width', width)
      .attr('height', height);
    const dataset = [250, 210, 170, 130, 90, 50];
    const rectHeight = 25;

    svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', 20)
      .attr('y', (d, i) => {
        return i * rectHeight;
      })
      .attr('width',  (d) => {
        return d;
      })
      .attr('height', rectHeight - 2)
      .attr('fill', '#09F');
  }

  ngOnInit(): void {
    this.updateTime();
    this.initD3();
  }

}
