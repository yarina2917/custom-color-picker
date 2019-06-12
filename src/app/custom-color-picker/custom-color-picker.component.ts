import {Component, ChangeDetectorRef, OnInit} from '@angular/core';

@Component({
  // selector: 'app-custom-color-picker',
  templateUrl: './custom-color-picker.component.html',
  styleUrls: ['./custom-color-picker.component.scss']
})
export class CustomColorPickerComponent implements OnInit {

  public color;

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    const handleSetColor = (event) => {
      if (event.data.event === 'set-tempcolor') {
        this.color = event.data.color;
        this.cdr.detectChanges();
      }
    };
    window.parent.addEventListener('message', handleSetColor, false);
  }

  public setColor(color) {
    this.color = color;
    window.parent.postMessage({event: 'set-color', color: color}, '*');
  }

}
