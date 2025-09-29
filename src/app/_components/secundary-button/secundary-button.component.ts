import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secundary-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secundary-button.component.html',
  styleUrls: ['./secundary-button.component.css']
})
export class SecundaryButtonComponent {
  @Input() buttonText: string = ''
  @Input() phClass: string = ''
  @Input() disabled: boolean = false
}
