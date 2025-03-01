import {Component, Input} from '@angular/core';
import {Folder} from '../folder-struture.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent {
  @Input() folder: Folder;

  public isExpanded: boolean = false;

}

