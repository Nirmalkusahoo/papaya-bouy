import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dsa-qs-list',
  templateUrl: './dsa-qs-list.component.html',
  styleUrls: ['./dsa-qs-list.component.scss'],
})
export class DsaQsListComponent {
  public listOfQs: string[] = [];
  private topic: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.topic = params.id;
    });
    this.listOfQs.push('Qs1',);
  }
}


