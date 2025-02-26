import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() progressNumber = 0;


  ngOnInit(): void {
    setTimeout(() => {
      this.progressNumber = 5;
    }, 100);
  }

  public setProgress(value: number): void {
    this.progressNumber = value;
  }

  public openGitHubUrl(): void {
    window.open('https://github.com/Nirmalkusahoo/papaya-bouy/tree/ef2485716a8ecf206a189a6fd0bb2326f06adeb4/src/app/components/projects/progress-bar', '_blank');
  }
}
