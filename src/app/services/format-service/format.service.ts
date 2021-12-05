import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatService {

  trimString(string: string) {
    return string.length > 200 ? `${string.slice(0, 200)} ...` : string;
  }
}
