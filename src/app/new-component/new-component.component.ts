import { Component, OnInit } from '@angular/core';
import { ReadingJsonFilesComponent } from '../reading-json-files.component';

@Component({
  selector: 'app-new-component',
  template: `
    <h2>Test</h2>
    <ul *ngFor="let donnee of donnees">
      <li>
        Nom : {{ donnee.name }}
      </li>
    </ul>
  `,
  styleUrls: []
})
export class NewComponentComponent implements OnInit {
  public donnees: any[] = [];
  constructor(private _readingFile: ReadingJsonFilesComponent) {}

  ngOnInit() {
    this._readingFile.getJSON().subscribe(data => (this.donnees = data))
  }

}
