import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, AfterViewInit {
  @Input() progressNumber = 0;

  public progressArray: number[] = [0, 0, 0, 0, 0, 0];

  ngOnInit(): void {
    setTimeout(() => {
      // this.progressArray = [0, 1, 5, 10, 25, 50, 75, 100];
      this.progressNumber = 5;
    }, 100);
  }

  public setProgress(value: number): void {
    this.progressNumber = value;
  }

  ngAfterViewInit(): void {
    /*setTimeout(() => {
      this.progressArray = [0, 1, 5, 10, 25, 50, 75, 100];
    }, 2000);*/
  }
}
