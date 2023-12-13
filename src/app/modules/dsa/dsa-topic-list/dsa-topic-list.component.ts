import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LIST_OF_TOPICS} from '../dsa.util';

@Component({
  selector: 'app-dsa-topic-list',
  templateUrl: './dsa-topic-list.component.html',
  styleUrls: ['./dsa-topic-list.component.scss']
})
export class DsaTopicListComponent {
  public listOfTopics: string[] = LIST_OF_TOPICS;

  constructor(private router: Router, private route: ActivatedRoute,) {
  }

  public navigate(topic: string): void {
    // this.router.navigate(['list', topic], {relativeTo: this.route.parent});
    this.router.navigate(['../list', topic], {relativeTo: this.route});
  }
}


