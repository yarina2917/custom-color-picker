import {Component, ChangeDetectorRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-color-picker',
  templateUrl: './custom-color-picker.component.html',
  styleUrls: ['./custom-color-picker.component.scss']
})
export class CustomColorPickerComponent implements OnInit {

  public color;
  public favouriteColors = [];
  public presetColors = [];

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    const handleSetColor = (event) => {
      if (event.data.event === 'init-color-picker') {
        this.initConfig(JSON.parse(event.data.config));
        this.cdr.detectChanges();
      }
    };
    window.parent.addEventListener('message', handleSetColor, false);
  }

  public initConfig(config: any): void {
    this.color = config.color;
    this.favouriteColors = config.favouriteColors || [];
    this.presetColors = config.presetColors || [];
  }

  public setColor(color) {
    this.color = color;
    window.parent.postMessage({event: 'set-color', color: color}, '*');
  }

  public handleFavouritesColors(colors: string[]): void {
    window.parent.postMessage({event: 'update-favourite-colors', colors: colors}, '*');
  }
}
