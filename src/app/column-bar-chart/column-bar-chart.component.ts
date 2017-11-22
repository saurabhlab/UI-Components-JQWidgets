import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-bar-chart',
  templateUrl: './column-bar-chart.component.html',
  styleUrls: ['./column-bar-chart.component.css']
})
export class ColumnBarChartComponent implements OnInit {

data: any[] = [
        { Country: "Luxembourg", GDP:30000 ,DebtPercent:30.20 ,Debt:13000,other:60 },
        { Country: "Singapore", GDP: 40000 ,DebtPercent:40 ,Debt:58000,other: 20 },
        { Country: "India", GDP: 90000 ,DebtPercent:70 ,Debt: 25000,other: 30},
        { Country: "USA", GDP: 40000 ,DebtPercent:40 ,Debt:32000,other: 50 },
        { Country: "Canada", GDP: 20000 ,DebtPercent:10 ,Debt:24000 ,other: 60},
        { Country: "Austria", GDP: 60000 ,DebtPercent: 60,Debt:10000,other: 40 },
       
    ];

source: any =
    {
        datatype: 'csv',
        datafields: [
            { name: 'Country' },
            { name: 'GDP' },
            { name: 'DebtPercent' },
            { name: 'Debt' }
        ],
        url: '../../assets/columnChartData.txt'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

    xAxis: any =
    {
         dataField: 'Country',
       // dataField: 'Browser',
        
        gridLines: { visible: true },
        valuesOnTicks: false
    };

    columnSeriesGroups: any[] =
    [
        {
            type: 'column',
            valueAxis:
            {
                visible: true,
                unitInterval: 5000,
                title: { text: 'GDP & Debt per Capita($)<br>' }
            },
            series: [
                { dataField: 'GDP', displayText: 'GDP per Capita' },
                { dataField: 'Debt', displayText: 'Debt per Capita' },
                  
            ]
        },
        // {
        //     type: 'line',
        //     valueAxis:
        //     {
        //         visible: true,
        //         position: 'right',
        //         unitInterval: 10,
        //         title: { text: 'Debt (% of GDP)' },
        //         gridLines: { visible: false },
        //         labels: { horizontalAlignment: 'left' }
        //     },
        //     series: [
        //         { dataField: 'DebtPercent', displayText: 'Debt (% of GDP)' },
        //         { dataField: 'other', displayText: 'other (% of other)' }
        //     ]
        // }
    ];
  constructor() { }

  ngOnInit() {
  }

}
