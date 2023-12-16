import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {QuestionService} from '../question.service';
import {KeyValueModel} from '../../shared-module/models/key-value.model';

@Component({
  selector: 'app-dsa-topic-list',
  templateUrl: './dsa-topic-list.component.html',
  styleUrls: ['./dsa-topic-list.component.scss']
})
export class DsaTopicListComponent {
  public listOfTopics: KeyValueModel[] = [];

  public topic: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private route: ActivatedRoute, private questionService: QuestionService) {
    this.getTopics();
  }

  private getTopics(): void {
    this.questionService.getTopics().subscribe((data) => {
      this.listOfTopics = data;
    });
  }

  public navigate(topic: string): void {
    // this.router.navigate(['list', topic], {relativeTo: this.route.parent});
    this.router.navigate(['../list', topic], {relativeTo: this.route});
  }


  public navigateToList(): void {
    this.router.navigate(['topics'], {relativeTo: this.route.parent});
  }
}


