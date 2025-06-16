import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() public  noOfPages: number;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  public currentPage: number;

  public goToNextPage(): void {
    this.setCurrentPage(this.currentPage + 1);
  }

  public goToPrevPage(): void {
    this.setCurrentPage(this.currentPage - 1);
  }

  public setCurrentPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.pageChange.emit(pageNumber);
  }
}
