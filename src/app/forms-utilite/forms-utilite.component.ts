import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-forms-utilite',
  templateUrl: './forms-utilite.component.html',
  styleUrls: ['./forms-utilite.component.css']
})
export class FormsUtiliteComponent implements OnInit {

  constructor() { }
dt;
  ngOnInit() {
    this.dt= '2015-06-30 18:30:00.000'
    //this.dt= '2015-06-30'
    //this.dt= '5-12-2014'
/////// not allowed   this.dt= '25-11-2014'
    
    
    
  }


  //-------

  //-----date range min an max
      min: any = new Date(2010, 0, 1);

    max: any = new Date(2020, 11, 31);
    //-----------------------------------

//--------date format
@ViewChild('myDateTimeInput') myDateTimeInput;// jqxDateTimeInputComponent;

    availableFormats: string[] =
      [
          'short date pattern', 'long date pattern', 'short time pattern', 'long time pattern', 'long date, short time pattern',
          'long date, long time pattern', 'month/day pattern', 'month/year pattern', 'custom'
      ];

    listOnSelect(event: any): void {
        let index: number = event.args.index;
        switch (index) {
            case 0:
                this.myDateTimeInput.formatString('d');
                break;
            case 1:
                this.myDateTimeInput.formatString('D');
                break;
            case 2:
                this.myDateTimeInput.formatString('t');
                break;
            case 3:
                this.myDateTimeInput.formatString('T');
                break;
            case 4:
                this.myDateTimeInput.formatString('f');
                break;
            case 5:
                this.myDateTimeInput.formatString('F');
                break;
            case 6:
                this.myDateTimeInput.formatString('M');
                break;
            case 7:
                this.myDateTimeInput.formatString('Y');
                break;
            case 8:
                this.myDateTimeInput.formatString('dddd-MMMM-yyyy');
                break;
        }
    }
//-----------------------------------

}
