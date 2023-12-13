import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  public dsaTopicList = 'dsa/topics';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  public navigate(path: string): void {
    this.router.navigate([path], {relativeTo: this.activatedRoute.parent});
  }
}
