import { Component, OnInit } from '@angular/core';

//import { jqxBulletChartComponent } from '../../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxbulletchart';
//import { jqxBulletChartComponent } from '../assets/jqwidgets-ts/angular_jqxbulletchart';
@Component({
  selector: 'app-bullet-chart',
  templateUrl: './bullet-chart.component.html',
  styleUrls: ['./bullet-chart.component.css']
})
export class BulletChartComponent implements OnInit {

// custom bullet-chart 
title: string = "Revenue 2014 YTD";
 
    description: string = "(U.S. $ in thousands)";
 
    ranges: any[] = [
        { startValue: 0, endValue: 200, color: "blue", opacity: 0.5 },
        { startValue: 200, endValue: 250, color: "#000000", opacity: 0.3 },
        { startValue: 250, endValue: 300, color: "#000000", opacity: 0.1 },
        { startValue:300, endValue:400, color:"#0F110F"}
    ];
 
    pointer: any = { value: 270, label: "Revenue 2014 YTD", size: "25%", color: "red" };
 
    target: any = { value: 260, label: "Revenue 2013 YTD", size: 10, color: "yellow" };
 
    ticks: any = { position: "both", interval: 50, size: 10 };        
  constructor() { }

values: number[] = [200,250,150,180];


  ngOnInit() {
  }

}
