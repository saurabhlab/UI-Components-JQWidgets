import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-dount-chart',
  templateUrl: './pie-dount-chart.component.html',
  styleUrls: ['./pie-dount-chart.component.css']
})
export class PieDountChartComponent implements OnInit {

// Hero: [{"abc","40"},{"xyz", "60"}]

hero: Hero = {
    Browser: 'aaa',
    Share: 50
  };

timelineChartData=[
      [{"dataType":'string',"label":'Browser'},
        {"dataType":"number", "label":'Share'}
       
      ],
      [ 'Washington', 50],
      [ 'Adams',     32 ],
      [ 'Jefferson',  12 ]
      ];

 data: any[] = [
        { Browser: "Internet Explorer", Share: 20 },
        {  Browser: "Firefox", Share: 60 },
        {  Browser: "Chrome", Share: 40 },
        {  Browser: "Safari", Share: 80 },
         {  Browser: "Opera", Share: 30 },
        {  Browser: "Other", Share: 12 }
    ];


    //  source: any =
    //     {
    //         datatype: 'csv',       
    //         datafields: [
    //             { name: 'Browser' },
    //             { name: 'Share' }
    //         ],
    //       url: '../../assets/pieChartData.txt',  
    //     };
    // dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });
  
    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 0, top: 0, right: 0, bottom: 10 };
legendLayout: any = { left: 650, top: 200, width: 350, height: 250, flow: 'vertical' };
////dount chart
dountSeriesGroups: any[] =
    [
        {
            type: 'donut',
            offsetX: 250,
           // source: this.dataAdapter_mobile,
             source: this.data,
            
            xAxis:
            {
                formatSettings: { prefix: 'Mobile ' }
            },
            series:
            [
                {
                    dataField: 'Share',
                    displayText: 'Browser',
                    labelRadius: 120,
                    initialAngle: 10,
                    radius: 200,
                    innerRadius: 150,
                    centerOffset: 0,
                    formatSettings: { sufix: '%', decimalPlaces: 1 }
                }
            ]
        },
        {
            type: 'donut',
            offsetX: 250,
            //source: this.dataAdapter_desktop,
               source: this.data,
            colorScheme: 'scheme01',
            xAxis:
            {
                formatSettings: { prefix: 'Desktop ' }
            },
            series:
            [
                {
                    dataField: 'Share',
                    displayText: 'Browser',
                    labelRadius: 120,
                    initialAngle: 10,
                    radius: 100,
                    innerRadius: 60,
                    centerOffset: 0,
                    formatSettings: { sufix: '%', decimalPlaces: 1 }
                }
            ]
        }
    ];


////pie chart
    pieSeriesGroups: any[] =
    [
        {
            type: 'pie',
            showLabels: true,
            series:
            [
                {
                    dataField: 'Share',
                    displayText: 'Browser',
                    labelRadius: 120,
                    initialAngle: 15,
                    radius: 170,
                    centerOffset: 0,
                    formatSettings: { sufix: '%', decimalPlaces: 1 }
                }
            ]
        }
    ];

  constructor() { }

  ngOnInit() {
  }

}


class Hero {
  Share: number;
  Browser: string;
}