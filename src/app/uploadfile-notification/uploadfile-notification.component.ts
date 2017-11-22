import { Component, OnInit, ViewChild } from '@angular/core';
//import { Http, Headers, Response, RequestOptions } from '@angular/http';/
//import { Observable } from 'rxjs/Rx';
import { jqxNotificationComponent } from '../../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification';
@Component({
  selector: 'app-uploadfile-notification',
  templateUrl: './uploadfile-notification.component.html',
  styleUrls: ['./uploadfile-notification.component.css']
})
export class UploadfileNotificationComponent implements OnInit {
 // public headers: Headers;
  // constructor(public http: Http) {
  //   this.headers = new Headers({ 'Authorization': 'Bearer ' });
  //   this.headers.append('Content-Type', 'application/json') //******
  // }

  ngOnInit() {
  }

  //-----Rendering Image
  imageTypes: string[] = ['.gif', '.jpg', '.png', '.jpeg'];

  videoTypes: string[] = ['.wmv', '.mov', '.avi', '.divx', '.mpeg', '.mpg', '.m4p'];

  renderFiles = (fileName: string): string => {
    let stopIndex = fileName.indexOf('.');
    let name = fileName.slice(0, stopIndex);
    let extension = fileName.slice(stopIndex);
    let iconUrl;
    if (this.imageTypes.indexOf(extension) !== -1) {
      iconUrl = '../../assets/Images/nature1.jpg';
      //iconUrl = fileName;
    } else if (this.videoTypes.indexOf(extension) !== -1) {
      iconUrl = '../../assets/Images/nature 2.jpg';
    } else {
      iconUrl = '../../assets/Images/nature 3.jpeg';
      //iconUrl = fileName;
    }
    return '<div><img src="' + iconUrl + '" style="dislplay: inline; width: 16px; height: 16px; margin-right: 5px;" /><span>' + name + '<strong>' + extension + '</strong></span></div>';
  };
  //------------
  

// onUploadEnd(event: any): void {
//         //let args = event.args;
//        // let fileName = args.file;
//        // let serverResponce = args.response;
//       //  console.log("onUploadEnd",args);
//         // this.myPanel.append('<strong>' + event.type + ':</strong> ' +
//         //     fileName + ';<br />' + 'server response: ' + serverResponce + '<br />');
//     };

// // onUploadEnd().subscribe((result: any) => {}
// //---
// onchange(){
//   console.log("ee called");
// }
//---------------------------------------notification--------------------------------------------------
  @ViewChild('msgNotification') msgNotification: jqxNotificationComponent;
    @ViewChild('timeNotification') timeNotification: jqxNotificationComponent;
    @ViewChild('successNotification') successNotification: jqxNotificationComponent;

 onClickOpenSuccessNotification(): void {
        this.successNotification.open();
    }


    onClickOpenMessageNotification(): void {
        this.msgNotification.open();
    }

    onClickOpenTimeNotification(): void {
        let date = new Date();
        let minutes = date.getMinutes();
        let minutesString: String = '';
        if (minutes < 10) {
            minutesString = "0" + minutes;
        } else {
            minutesString = "" + minutes;
        }

        let seconds = date.getSeconds();
        let secondsString: String = '';
        if (seconds < 10) {
            secondsString = "0" + seconds;
        } else {
            secondsString = "" + seconds;
        }

        let timeSpan = document.getElementById('currentTime');
        timeSpan.innerText = date.getHours() + ":" + minutesString + ":" + secondsString;
        this.timeNotification.open();
    }
}
