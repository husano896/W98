import { Component, OnInit, ViewChild, AfterContentInit, AfterViewInit, ContentChild } from '@angular/core';

import fileSaver from 'file-saver';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss']
})
export class NotepadComponent implements OnInit {

  public static appName = 'APPS.NOTEPAD'; // '記事本';
  public static icon = 'shell32-301';
  public static description = '耶，我不用買紙了！';
  public static iconSet = 'shell32';

  // 文本內容
  fileContent: any;

  // 字型大小
  fontSize = 14;

  constructor() { }
  ngOnInit(): void {
  }

  SelectFile() {
    const fileInput = document.querySelector('#fileInput') as HTMLElement;
    fileInput.click();
  }

  onFileChange($event) {
    console.log($event);
    const fileReader = new FileReader();

    fileReader.readAsText($event.target.files[0]);

    fileReader.addEventListener('load', (event) => {
      console.log(event);
      this.fileContent = event.target.result;
    }, false);
  }

  // 存檔
  SaveAsFile() {
    const blob = new Blob([this.fileContent], {type: 'text/plain;charset=utf-8'});
    fileSaver.saveAs(blob, 'W98text.txt');
  }

  textAreaStyle() {
    return {
      'font-size' : `${this.fontSize}px`
    }
  }
}
