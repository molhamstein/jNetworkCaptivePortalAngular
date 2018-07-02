import { GlobalService } from './global.service';
import { CallAPIService } from './call-api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(public API: CallAPIService, public global: GlobalService) { }
}
