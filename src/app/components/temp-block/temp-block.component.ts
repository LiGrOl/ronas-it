import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-temp-block',
  templateUrl: './temp-block.component.html',
  styleUrls: ['./temp-block.component.css']
})
export class TempBlockComponent {
  @Input() temp: string;
  @Input() iconSrc: string;
  @Input() desc: string;

  constructor() {}
}
