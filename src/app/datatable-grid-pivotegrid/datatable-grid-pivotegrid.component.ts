import { Component, OnInit, ViewChild } from '@angular/core';
import { generatedata } from "../tagging-tooltip-slider/tagData";
import { jqxGridComponent } from '../../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';
import { jqxDataTableComponent } from '../../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxdatatable';
@Component({
  selector: 'app-datatable-grid-pivotegrid',
  templateUrl: './datatable-grid-pivotegrid.component.html',
  styleUrls: ['./datatable-grid-pivotegrid.component.css']
})
export class DatatableGridPivotegridComponent implements OnInit {
// export grid data into file
@ViewChild('gridReference') gridReference: jqxGridComponent;
    pdfBtnOnClick() {
        this.gridReference.exportdata('pdf', 'jqxGrid');
    };
 excelBtnOnClick() {
        this.gridReference.exportdata('xls', 'jqxGrid');
    };

    xmlBtnOnClick() {
        this.gridReference.exportdata('xml', 'jqxGrid');
    };

    csvBtnOnClick() {
        this.gridReference.exportdata('csv', 'jqxGrid');
    };

    tsvBtnOnClick() {
        this.gridReference.exportdata('tsv', 'jqxGrid');
    };

    htmlBtnOnClick() {
        this.gridReference.exportdata('html', 'jqxGrid');
    };

    jsonBtnOnClick() {
        this.gridReference.exportdata('json', 'jqxGrid');
    };

//------------------------------------------------------------------------------------
@ViewChild('dataTabel') dataTabel: jqxDataTableComponent;
   
    excelBtnOnClickDatatable(): void {
        this.dataTabel.exportData('xls');
    };

    xmlBtnOnClickDatatable(): void {
        this.dataTabel.exportData('xml');
    };

    csvBtnOnClickDatatable(): void {
        this.dataTabel.exportData('csv');
    };

    tsvBtnOnClickDatatable(): void {
        this.dataTabel.exportData('tsv');
    };

    htmlBtnOnClickDatatable(): void {
        this.dataTabel.exportData('html');
    };

    jsonBtnOnClickDatatable(): void {
        this.dataTabel.exportData('json');
    };

    pdfBtnOnClickDatatable(): void {
        this.dataTabel.exportData('pdf');
    };
//---printing
btnForPrint():void{
   let gridContent = this.dataTabel.exportData('html');
        let newWindow = window.open('', '', 'width=800, height=500'),
            document = newWindow.document.open(),
            pageContent =
                '<!DOCTYPE html>' +
                '<html>' +
                '<head>' +
                '<meta charset="utf-8" />' +
                '<title>jQWidgets DataTable</title>' +
                '</head>' +
                '<body>' + gridContent + '</body></html>';
        document.write(pageContent);
        document.close();
        newWindow.print();
}


  ngOnInit() {
  }
  //dataTable and grid data
  //------------------------------------------------------------------------------------
 source: any =
    {
        localdata: generatedata(85),
        datatype: "array",
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
        ],
        sortcolumn: 'firstname',
        sortdirection: 'asc'
    };
 
    // dataAdapter: any = new jqx.dataAdapter(this.source);
 

 dataAdapter: any = new jqx.dataAdapter(this.source,
        {
            formatData: function (data: any): any {
                data.featureClass = 'gridReference';
                data.style = 'full';
                data.username = 'jqwidgets';
                data.maxRows = 50;
                return data;
            }
        }
    );

    columns: any[] =
    [
        { text: 'Name', dataField: 'firstname', width: 200 },
        { text: 'Last Name', dataField: 'lastname', width: 200 },
        { text: 'Product', editable: false, dataField: 'productname', width: 180 },
        { text: 'Quantity', dataField: 'quantity', width: 80, align: 'right', cellsAlign: 'right' },
        { text: 'Unit Price', dataField: 'price', width: 90, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
        { text: 'Total', dataField: 'total', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' }
    ]; 

    onSortMethod(): void
    {
        //Do something 
        //alert("sorting ");
    }
// $(document).ready(function(){
// console.log("gg");
// //alert("sss");
// });

//-----------------------------------------
//pivotgrid data
  constructor()
    {
        this.pivotDataSource = this.createPivotDataSource();
    }
 
    pivotDataSource: null;
 
    createPivotDataSource(): any {
        // Prepare Sample Data
        let data = new Array();
 
        const countries =
        [
            'Germany', 'France', 'United States', 'Italy', 'Spain', 'Finland', 'Canada', 'Japan', 'Brazil', 'United Kingdom', 'China', 'India', 'South Korea', 'Romania', 'Greece'
        ];
 
        const dataPoints =
        [
            '2.25', '1.5', '3.0', '3.3', '4.5', '3.6', '3.8', '2.5', '5.0', '1.75', '3.25', '4.0'
        ];
 
        for (let i = 0; i < countries.length * 2; i++) {
            let row = {};
            const value = parseFloat(dataPoints[Math.round((Math.random() * 100)) % dataPoints.length]);
            row['country'] = countries[i % countries.length];
            row['value'] = value;
            data[i] = row;
        }
 
        // Create a Data Source and Data Adapter
        const source =
        {
            localdata: data,
            datatype: 'array',
            datafields:
            [
	            { name: 'country', type: 'string' },
	            { name: 'value', type: 'number' }
            ]
        };
 
        const dataAdapter = new jqx.dataAdapter(source);
        dataAdapter.dataBind();
 
        // Create a Pivot Data Source from the DataAdapter
        const pivotDataSource = new jqx.pivot(
            dataAdapter,
            {
                pivotValuesOnRows: false,
                rows: [{ dataField: 'country', width: 190 }],
                columns: [],
                values: 
                [
                    { dataField: 'value', width: 200, 'function': 'min', text: 'cells left alignment', formatSettings: { align: 'left', prefix: '', decimalPlaces: 2 } },
                    { dataField: 'value', width: 200, 'function': 'max', text: 'cells center alignment', formatSettings: { align: 'center', prefix: '', decimalPlaces: 2 } },
                    { dataField: 'value', width: 200, 'function': 'average', text: 'cells right alignment', formatSettings: { align: 'right', prefix: '', decimalPlaces: 2 } }
                ]
            }
        );
 
        return pivotDataSource;
    }

}
