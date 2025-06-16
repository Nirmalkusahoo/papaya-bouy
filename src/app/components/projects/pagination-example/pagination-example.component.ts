import {Component} from '@angular/core';
import {HttpService} from '../../../modules/shared-module/services/http.service';

@Component({
  selector: 'app-pagination-example',
  templateUrl: './pagination-example.component.html',
  styleUrls: ['./pagination-example.component.scss']
})
export class PaginationExampleComponent {
  public products = [];
  public noOfItemsPerPage = 10;
  public totalItem: number;
  public noOfPages: number;
  public start: number;
  public end: number;
  public currentPage: number;

  constructor(private httpService: HttpService) {
    this.getProducts();
    this.setCurrentPage(0);
  }

  public getProducts(): void {
    const url = 'https://dummyjson.com/products?limit=500';
    this.httpService.getData(url).subscribe((response) => {
      this.products = response.products;
      this.totalItem = this.products.length;
      this.noOfPages = Math.ceil(this.totalItem / this.noOfItemsPerPage);
    });
  }

  public setCurrentPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.start = 10 * this.currentPage;
    this.end = this.start + this.noOfItemsPerPage;
  }


  public openGitHubUrl(): void {
    window.open('https://github.com/Nirmalkusahoo/papaya-bouy/tree/4f074d3b3e0c8d7e35642f92ac8fba4958902530/src/app/components/projects/pagination-example', '_blank');
  }
}
