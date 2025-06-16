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
    window.open('https://github.com/Nirmalkusahoo/papaya-bouy/tree/78b009d174525086bf9ecf7182e0266888326d4e/src/app/components/projects/star-rating', '_blank');
  }
}
