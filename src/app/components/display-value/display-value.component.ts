import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-value',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Current value: {{ value }}</p>`
})
export class DisplayValueComponent {
  @Input() value: number = 0;
}