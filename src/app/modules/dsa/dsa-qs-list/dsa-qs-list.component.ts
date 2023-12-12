import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {QuestionDetailModel} from './question-detail.model';
import {publish} from 'rxjs';
import {SelectionModel} from '@angular/cdk/collections';
import {HttpService} from '../../shared-module/services/http.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-dsa-qs-list',
  templateUrl: './dsa-qs-list.component.html',
  styleUrls: ['./dsa-qs-list.component.scss'],
})
export class DsaQsListComponent {


  public listOfQs: QuestionDetailModel[] = [];
  public topic: string;
  displayedColumns: string[] = ['select', 'questionTitle', 'answerUrl', 'conceptUrl'];
  dataSource: MatTableDataSource<QuestionDetailModel>;
  selection = new SelectionModel<QuestionDetailModel>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute, private httpService: HttpService, private router: Router) {
    this.route.params.subscribe((params: Params) => this.topic = params.topic);

    this.getAllQuestions();
  }

  private getAllQuestions(): void {
    const url = environment.baseUrl + environment.getAllQuestion + this.topic;
    this.httpService.getData(url).subscribe((data) => {
      this.listOfQs = data;
      this.dataSource = new MatTableDataSource(this.listOfQs);
    });
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



