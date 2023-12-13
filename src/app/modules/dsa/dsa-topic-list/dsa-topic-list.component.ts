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
  displayedColumns: string[] = ['topic'];
  dataSource: MatTableDataSource<QuestionDetailModel>;
  selection = new SelectionModel<QuestionDetailModel>(true, []);

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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: QuestionDetailModel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.questionTitle + 1}`;
  }

  public navigateToList(): void {
    this.router.navigate(['topics'], {relativeTo: this.route.parent});
  }
}


