import { Component, OnInit,ViewChild, ElementRef,AfterViewInit  } from '@angular/core';
import { jqxRatingComponent } from '../../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxrating';
 import { jqxTooltipComponent } from '../../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxtooltip';
 
//import { jqxTooltipComponent } from '../assets/jqwidgets-ts/angular_jqxtooltip';

@Component({
  selector: 'app-rate-ribbon-loader',
  templateUrl: './rate-ribbon-loader.component.html',
  styleUrls: ['./rate-ribbon-loader.component.css']
})
export class RateRibbonLoaderComponent implements AfterViewInit  {
 @ViewChild('rate') rate: ElementRef;

@ViewChild('jqxRating') jqxRating: jqxRatingComponent;



    change(event: any): void {
        let rate = this.rate.nativeElement;
        rate.innerHTML = '<span> ' + event.value + '</span>';
    }
  constructor() { }
a;
b=3.5;
  ngAfterViewInit(): void 
    {
        this.jqxRating.setValue(this.b);
  //this.a= this.jqxRating.getValue();
  //alert("a"+this.a);
    }

}
