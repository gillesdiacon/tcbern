import { TestBed } from '@angular/core/testing';

import { LoadedContentService } from './loaded-content.service';

describe('LoadedContentService', () => {
  let service: LoadedcontentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadedContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
