import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PageModel } from "./shared/page.model";

@Injectable({
  providedIn: 'root'
})
export class LoadedContentService {
  loadedContent: Observable<PageModel[]>;

  constructor(private client: HttpClient) {
    this.loadedContent = this.client.get<PageModel[]>("../backend/v3/public/api/pages");
  }

  getLoadedContent(): Observable<PageModel[]> {
    return this.loadedContent;
  }
}
