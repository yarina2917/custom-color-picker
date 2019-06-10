import {Component, Input, OnInit} from '@angular/core';

@Component({
  // selector: 'app-custom-color-picker',
  templateUrl: './custom-color-picker.component.html',
  styleUrls: ['./custom-color-picker.component.scss']
})
export class CustomColorPickerComponent implements OnInit {

  public color;

  constructor() { }

  ngOnInit() {
  }

  public setColor(color) {
    this.color = color;
    window.parent.postMessage({event: 'set-color', color: color}, '*');
  }

}
