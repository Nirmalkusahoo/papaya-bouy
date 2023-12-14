import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionDetailModel} from '../dsa-qs-list/question-detail.model';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {QuestionService} from '../question.service';

@Component({
  selector: 'app-dsa-topic-list',
  templateUrl: './dsa-topic-list.component.html',
  styleUrls: ['./dsa-topic-list.component.scss']
})
export class DsaTopicListComponent {
  public listOfTopics: string[];

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


