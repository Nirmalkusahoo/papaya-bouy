import {Component, Input} from '@angular/core';
import {Folder} from '../folder-struture.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent {
  @Input() folder: Folder;

  public isExpanded = false;

  public addFolder(): void {
    const name = prompt('Enter name');
    if (name) {
      const newFolder: Folder = new Folder();
      newFolder.name = name;
      newFolder.isFolder = true;
      newFolder.children = [];
      this.folder.children.push(newFolder);
    }
  }

  public deleteFolder(): void {
    alert('Not implemented');
  }
}

