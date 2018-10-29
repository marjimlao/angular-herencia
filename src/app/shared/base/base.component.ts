import { OnDestroy, Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
   template: ''
})
export class BaseComponent implements OnDestroy {

   subscriptions: Array<Subscription> = [];

   constructor() { }

   ngOnDestroy() {
       this.subscriptions.forEach(s => {
          console.log('Destruye subscripción');
          s.unsubscribe();
       });
   }
}
