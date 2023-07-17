import {Component} from '@angular/core';

@Component({
  selector: 'app-dsa-topic-list',
  templateUrl: './dsa-topic-list.component.html',
  styleUrls: ['./dsa-topic-list.component.scss']
})
export class DsaTopicListComponent {
  public listOfTopics: string[] = [];

  constructor() {
    this.listOfTopics.push('Arrays', 'Strings', 'Stacks', 'Sliding Window', 'Binary Tree', 'Dynamic Programming', 'Graph');
  }
}


