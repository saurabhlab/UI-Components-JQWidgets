import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { jqxBarGaugeComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbargauge';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { jqxButtonComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxbuttons';
import { jqxInputComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxinput';
import { jqxCheckBoxComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcheckbox';
import { BulletChartComponent } from './bullet-chart/bullet-chart.component';
import { jqxBulletChartComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxbulletchart';
import { jqxCalendarComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcalendar';
import { CalenderComponent } from './calender/calender.component';
import { PieDountChartComponent } from './pie-dount-chart/pie-dount-chart.component';
//import { ChartModule } from '../../modules/chart.module'
import { jqxChartComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxChart';
import { ColumnBarChartComponent } from './column-bar-chart/column-bar-chart.component';
import { LivePerformanceUpdateChartComponent } from './live-performance-update-chart/live-performance-update-chart.component';
//import { DropDownListModule } from '../../modules/dropdownlist.module
import { jqxDropDownListComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxdropdownlist';
import { LiveColumnUpdateChartComponent } from './live-column-update-chart/live-column-update-chart.component';
import { jqxRibbonComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxribbon';
import { jqxLoaderComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader';
import { RateRibbonLoaderComponent } from './rate-ribbon-loader/rate-ribbon-loader.component';
import { jqxRatingComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxrating';
import { TaggingTooltipSliderComponent } from './tagging-tooltip-slider/tagging-tooltip-slider.component';
import { jqxTagCloudComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxtagcloud';
 import { jqxTooltipComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxtooltip';
import { DatatableGridPivotegridComponent } from './datatable-grid-pivotegrid/datatable-grid-pivotegrid.component';
import { jqxDataTableComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxdatatable';
import { jqxGridComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';
import { jqxPivotGridComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxpivotgrid';
import { jqxSliderComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxslider';
import { EditorComponent } from './editor/editor.component';
import { jqxEditorComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxeditor';
//import { EditorModule } from '../../modules/editor.module';
import { jqxWindowComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxwindow';
import { UploadfileNotificationComponent } from './uploadfile-notification/uploadfile-notification.component';
import { jqxFileUploadComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxfileupload';
//import { FileUploadModule } from '../../modules/fileupload.module';
import { jqxNotificationComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification';
//import { NotificationModule } from '../../modules/notification.module';
const routes: Routes = [
  { path: 'ReactiveForm', component: ReactiveFormComponent },
  { path: 'BulletChart', component: BulletChartComponent },
  { path: 'Calender', component: CalenderComponent },
  { path: 'PieDountChart', component: PieDountChartComponent },
  { path: 'ColumnBarChart', component: ColumnBarChartComponent },
  { path: 'LiveChart', component: LivePerformanceUpdateChartComponent },
    { path: 'LiveColumnUpdateChart', component: LiveColumnUpdateChartComponent },
     { path: 'RateRibbonLoader', component: RateRibbonLoaderComponent },
      { path: 'TaggingTooltipSlider', component: TaggingTooltipSliderComponent },
       { path: 'DatatableGridPivotegrid', component: DatatableGridPivotegridComponent },
        { path: 'Editor', component: EditorComponent },
        { path: 'UploadfileNotification', component: UploadfileNotificationComponent }


];


@NgModule({
  declarations: [
    AppComponent,
    jqxBarGaugeComponent,
    ReactiveFormComponent,
    jqxButtonComponent,
    jqxInputComponent,
    jqxCheckBoxComponent,
    BulletChartComponent,
    jqxBulletChartComponent,
    jqxCalendarComponent,
    CalenderComponent,
    PieDountChartComponent,
    jqxChartComponent,
    ColumnBarChartComponent,
    LivePerformanceUpdateChartComponent,
    jqxDropDownListComponent,
    LiveColumnUpdateChartComponent,
    jqxRibbonComponent,
    jqxLoaderComponent,
    RateRibbonLoaderComponent,
    jqxRatingComponent,   
    jqxTagCloudComponent,
    jqxTooltipComponent,
     TaggingTooltipSliderComponent,
     DatatableGridPivotegridComponent, 
     jqxDataTableComponent,
     jqxGridComponent,
     jqxPivotGridComponent,
     jqxSliderComponent,
     EditorComponent,
     jqxEditorComponent,
     jqxWindowComponent,
     UploadfileNotificationComponent,
     jqxFileUploadComponent,
     jqxNotificationComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
