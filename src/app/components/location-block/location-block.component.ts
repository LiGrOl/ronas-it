import {Component, Input, Output, EventEmitter} from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-location-block',
  templateUrl: './location-block.component.html',
  styleUrls: ['./location-block.component.css'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0, marginLeft: '-40px', position: 'absolute' }),
        animate('400ms', style({ opacity: 1, marginLeft: '0'})),
      ]),
      transition(':leave', [
        style({ position: 'absolute' }),
        animate('400ms', style({ opacity: 0, marginTop: '-30px', position: 'absolute' }))
      ])
    ]),
  ]
})

export class LocationBlockComponent {
  @Input() city: string;
  @Output() cityChanged = new EventEmitter<string>();
  @Output() curLocationSelected = new EventEmitter<any>();

  searchString: string;

  isCityChanging: boolean;
  constructor() {
    this.isCityChanging = false;
  }

  setMyLocation(): void {
    this.curLocationSelected.emit();
  }

  changeCity(): void {
    this.searchString = this.city;
    this.isCityChanging = true;
  }

  confirmCity(): void {
    debugger;
    this.cityChanged.emit(this.searchString);
    this.isCityChanging = false;
  }
}
