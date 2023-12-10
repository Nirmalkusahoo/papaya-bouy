import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dsa-topic-list',
  templateUrl: './dsa-topic-list.component.html',
  styleUrls: ['./dsa-topic-list.component.scss']
})
export class DsaTopicListComponent {
  public listOfTopics: string[] = [];

  constructor(private router: Router, private route: ActivatedRoute,) {
    this.listOfTopics.push('LinkedList',
      'DoublyLinkedList',
      'Array', 'Strings', 'Stacks', 'Sliding Window', 'Binary Tree', 'Dynamic Programming', 'Graph');
  }

  public navigate(topic: string): void {
    // this.router.navigate(['list', topic], {relativeTo: this.route.parent});
    this.router.navigate(['../list', topic], {relativeTo: this.route});
  }
}


