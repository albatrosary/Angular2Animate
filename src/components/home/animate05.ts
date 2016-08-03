import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'my-animate-05',
  template: `
    <div
      @heroState="heroes.state"
      (click)="toggleState()">
    {{heroes.name}}</div>
    `,
  styles: [`
    div {
      height: 50px;
      width: 100px;
      background-color: #eee;
    }
  `],
  animations: [
    trigger('heroState', [
      transition('void => *', animate('100ms ease-in')),
      transition('* => void', animate('100ms ease-out')),
      state('in', style({transform: 'translateX(0)'})),
      state('void', style({ 
        transform: 'translateX(-100%)'
      })),
      state('*', style({
        transform: 'translateX(100%)'
      }))
    ])
  ]
})

export class MyAnimate05 {
  public heroes = {
    state: 'in',
    name: 'Angular2'
  };
  toggleState () {
    this.heroes.state = 'hoge';
  }
}
