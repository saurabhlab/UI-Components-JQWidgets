import { Component, OnInit, ViewChild } from '@angular/core';
import { jqxWindowComponent } from '../../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxwindow';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
@ViewChild('myWindow') myWindow: jqxWindowComponent;
 btnOnClick(): void {
        this.myWindow.open();
    }
  constructor() { }

  ngOnInit() {
  }
 localization: any = {
        'bold': 'Fett',
        'italic': 'Kursiv',
        'underline': 'Unterstreichen',
        'format': 'Block-Format',
        'font': 'Schriftname',
        'size': 'Schriftgre',
        'color': 'Textfarbe',
        'background': 'Hintergrundfarbe',
        'left': 'Links ausrichten',
        'center': 'Mitte ausrichten',
        'right': 'Rechts ausrichten',
        'outdent': 'Weniger Einzug',
        'indent': 'Mehr Einzug',
        'ul': 'Legen Sie ungeordnete Liste',
        'ol': 'Geordnete Liste einfgen',
        'image': 'Bild einfgen',
        'link': 'Link einfgen',
        'html': 'html anzeigen',
        'clean': 'Formatierung entfernen'
    };
}
