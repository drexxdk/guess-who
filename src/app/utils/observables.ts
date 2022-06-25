import { Observable, take } from 'rxjs';

export function getObservableValueSync<T>(observable: Observable<any>): T {
  let returnValue: T | undefined = undefined;

  observable.pipe(take(1)).subscribe((data: T) => (returnValue = data));

  return <T>(<unknown>returnValue);
}
