import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tryParseInt',
})
export class TryParseIntPipe implements PipeTransform {
  transform(str: string, defaultValue: number): number {
    let retValue = defaultValue;
    if (str !== null) {
      if (str.length > 0) {
        retValue = parseInt(str, 10);
      }
    }
    return retValue;
  }
}
