import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AppState} from './app.service';

@Component({
  selector: 'app',
  styleUrls: ['./style.scss'],
  template: `<p>I work</p>`
})
export class AppComponent implements OnInit {
  constructor(
    public appState: AppState
  ) {}

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}