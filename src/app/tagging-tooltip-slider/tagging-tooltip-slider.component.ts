// /// <reference path="jquery.d.ts" />
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { jqxTagCloudComponent } from '../../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxtagcloud';
import { jqxTooltipComponent } from '../../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxtooltip';
import { generatedata } from './tagData';
import { jqxSliderComponent } from "jqwidgets-framework/jqwidgets-ts/angular_jqxslider";
//declare var $:JQueryStatic;
declare var $:any;
@Component({
  selector: 'app-tagging-tooltip-slider',
  templateUrl: './tagging-tooltip-slider.component.html',
  styleUrls: ['./tagging-tooltip-slider.component.css']
})
export class TaggingTooltipSliderComponent implements AfterViewInit {

constructor() { }
 

    // ngAfterViewInit() {
    //     // $(this.el.nativeElement)
    //     //     .chosen()
    //     //     .on('change', (e, args) => {
    //     //         this.selectedValue = args.selected;
    //     //     });

    //     $(document).ready(function(){
    //         //alert("angular 5")
    //     })
    // }
  // data: any[] = [
  //       { countryName: "Australia", technologyRating: 35 },
  //       { countryName: "United States", technologyRating: 60 },
  //       { countryName: "Germany", technologyRating: 55 },
  //       { countryName: "Brasil", technologyRating: 20 },
  //       { countryName: "United Kingdom", technologyRating: 50 },
  //       { countryName: "Japan", technologyRating: 80 }
  //   ];
 
  //   source: any =
  //   {
  //       localdata: this.data,
  //       datatype: "array",
  //       datafields: [
  //           { name: 'countryName' },
  //           { name: 'technologyRating' }
  //       ]
  //   };
 
  //   dataAdapter: any = new jqx.dataAdapter(this.source);

  @ViewChild('tagCloud') tagCloud: jqxTagCloudComponent;
    
    source: any =
    {
        datatype: 'array',
        localdata: generatedata(10, false),
        datafields: [
            { name: 'productname' },
            { name: 'price' }
        ]
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    addItemClick(): void {
        let row = generatedata(1, false)[0];
        this.tagCloud.insertAt(0, row);
    };

    deleteItemClick(): void {
        this.tagCloud.removeAt(0);
    };

    updateItemClick(): void {
        let row = generatedata(1, false)[0];
        this.tagCloud.updateAt(0, row);
    };

    //--------------------------
    //slider
     @ViewChild('redSlider') redSlider: jqxSliderComponent;
    @ViewChild('greenSlider') greenSlider: jqxSliderComponent;
    @ViewChild('blueSlider') blueSlider: jqxSliderComponent;
    ngAfterViewInit(): void {
        this.setColor();
    }
    redSliderOnChange(): void {
        this.setColor();
    };
    greenSliderOnChange(): void {
        this.setColor();
    };
    blueSliderOnChange(): void {
        this.setColor();
    };
    checkBoxOnChange(event: any): void {
        let checked = event.args.checked;
        let value = 'default';
        if (!checked) {
            value = 'fixed';
        }
        this.redSlider.mode(value);
        this.greenSlider.mode(value);
        this.blueSlider.mode(value);
    };
 
    setColor(): void {
        let red = this.fixHex(Math.round(this.redSlider.value()).toString(16)),
            green = this.fixHex(Math.round(this.greenSlider.value()).toString(16)),
            blue = this.fixHex(Math.round(this.blueSlider.value()).toString(16));
        document.getElementById('colorBlock').style.backgroundColor = '#' + red + green + blue;
        document.getElementById('colorLabel').innerHTML = ('#' + red + green + blue).toUpperCase();
        let color = this.getTextElement({ r: parseInt(red, 16), g: parseInt(green, 16), b: parseInt(blue, 16) });
        document.getElementById('colorLabel').style.color = color;
    };
 
    fixHex(hex: any): any {
        return (hex.length < 2) ? '0' + hex : hex;
    };
 
    getTextElement(color: any): any {
        let nThreshold = 105;
        let bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
        let foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
        return foreColor;
    };
 
    tickLabelFormatFunction: any = (value) => {
        if (value == 0) return value;
        if (value == 255) return value;
        return "";
    };
 
    tooltipFormatFunction: any = (value) => {
        if (this.redSlider.mode() === 'default') {
            if (value < 10) return new Number(value.toPrecision(3));
            if (value > 10 && value < 100) return new Number(value.toPrecision(4));
            else return new Number(value.toPrecision(5));
        }
        else {
            if (value < 10) return new Number(value.toPrecision(3));
            if (value > 10 && value < 256) return new Number(value.toPrecision(4));
        }
    };

}
