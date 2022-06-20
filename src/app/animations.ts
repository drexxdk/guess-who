import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export function routerAnimation() {
  return trigger('routerAnimation', [
    // transition('-1 => *', [
    //   // dont animate initial
    // ]),
    transition('* => *', [
      query(':enter', [style({ opacity: 0 })], {
        optional: true,
      }),
      query(
        ':leave',
        [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
        { optional: true }
      ),
      query(
        ':enter',
        [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
        { optional: true }
      ),
    ]),
  ]);
}
