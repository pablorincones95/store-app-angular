import {
  Component,
  Input,
  SimpleChange,
  OnChanges,
  SimpleChanges,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  public counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    //NO ASYNC
    //BEROFE RENDER
    console.log('cosntructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    //BEFORE AND DURING RENDER
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);

    const duration: any = changes['duration'];

    if (duration) {
      this.doSometing();
    }
  }

  ngOnInit() {
    // AFTER RENDER
    // UNA VEZ
    // ASYNC, THEN, SUBS
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('durtions =>', this, this.duration);
    console.log('message =>', this, this.message);

    this.counterRef = window.setInterval(() => {
      console.log('run interval');
      this.counter.update((statePrev) => statePrev + 1);
    }, 1000);
  }

  ngAfterViewInit() {
    //After rednder
    // hijos ya fueron renderizados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    //After rednder
    // hijos ya fueron renderizados
    console.log(' ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
  }

  doSometing() {
    console.log('change duration');
  }
}
