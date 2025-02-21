import {Component} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent {
  public rating: number;
  public hoverIndex: number;

  public rate(index: number) {
    this.rating = index;
  }

  public setHover(index: number): void {
    this.hoverIndex = index;
  }

  public openGitHubUrl(): void {
    window.open();
  }
}
