import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/components/counter/counter.component';
import { CommonModule } from '@angular/common';
import { WaveAudioComponent } from '../../components/wave-audio/wave-audio.component';
import { HighlightDirective } from '../../../shared/directives/highlight.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    CounterComponent,
    WaveAudioComponent,
    HighlightDirective,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export default class AboutComponent {
  duration = signal(1000);
  message = signal('hola');

  changeDuration(event: Event) {
    const Input = event.target as HTMLInputElement;
    this.duration.set(Input.valueAsNumber);
  }

  changeMessage(event: Event) {
    const Input = event.target as HTMLInputElement;
    this.message.set(Input.value);
  }
}
