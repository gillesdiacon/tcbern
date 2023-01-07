import { Component } from '@angular/core';
import { LoadedContentService } from "./loaded-content.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tchoukball Club Bern';

  trainingContent: string = "";
  contactContent: string = "";
  tournamentContent: string = "";

  constructor(private loadedContent: LoadedContentService) {}

  ngOnInit(): void {
    this.loadedContent.getLoadedContent().subscribe(res => this.trainingContent = this.handleUndefined(res.find(c => c.key == "TRAINING")?.content));
    this.loadedContent.getLoadedContent().subscribe(res => this.contactContent = this.handleUndefined(res.find(c => c.key == "CONTACT")?.content));
    this.loadedContent.getLoadedContent().subscribe(res => this.tournamentContent = this.handleUndefined(res.find(c => c.key == "TOURNAMENT")?.content));
  }

  private handleUndefined(content: string | undefined): string {
    return (content === undefined) ? "" : content;
  }
}
