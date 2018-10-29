import { BehaviorSubject, Subscription } from 'rxjs';
import { BaseComponent } from './../shared/base/base.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component extends BaseComponent implements OnInit {

  subject = new BehaviorSubject('Página 1');
  subscription: Subscription;

  constructor() {
    super();
   }

  ngOnInit() {
    this.subscriptions.push(this.subject.subscribe(v => console.log('Subscripción 1')));
  }

}
