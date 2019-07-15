import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [
    transition('* => *', [
      animate('2s', keyframes([
        style({ backgroundColor: 'blue'}),
        style({ backgroundColor: 'yellow'}),
        style({backgroundColor: 'purple'})
      ]))
    ])
  ]
})
export class AnimationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
