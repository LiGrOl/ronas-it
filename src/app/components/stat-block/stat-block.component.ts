import {Component, Input} from '@angular/core';

export class StatModel {
  constructor(public name: string, public data: string) {
  }
}

@Component({
  selector: 'app-stat-block',
  templateUrl: './stat-block.component.html',
  styleUrls: ['./stat-block.component.css']
})

export class StatBlockComponent {
  @Input() data: StatModel;
  constructor() {}
}
