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
    window.open('https://github.com/Nirmalkusahoo/papaya-bouy/tree/78b009d174525086bf9ecf7182e0266888326d4e/src/app/components/projects/star-rating', '_blank');
  }
}
