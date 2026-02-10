import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  standalone: false
})
export class SectionComponent {
  @Input() sectionTitle: string = "No Title";
  @Input() content: string = "*No content*";
}
