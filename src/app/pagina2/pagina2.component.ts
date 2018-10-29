import { BaseComponent } from './../shared/base/base.component';
import { Component, OnInit } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component extends BaseComponent implements OnInit {

  subject = new BehaviorSubject('Página 2');
  subscription: Subscription;

  constructor() {
    super();
   }

  ngOnInit() {
    this.subscriptions.push(this.subject.subscribe(v => console.log('Subscripción 2')));
  }

}
