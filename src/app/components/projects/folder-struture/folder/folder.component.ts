import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Folder} from '../folder-struture.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent {
  @Input() folder: Folder;
  @Input() index: number;
  @Output() deleteFolderEvent = new EventEmitter<string>();
  public isExpanded = false;

  public addFolder(): void {
    const name = prompt('Enter name');
    if (name) {
      const newFolder: Folder = new Folder();
      newFolder.id = new Date().toDateString();
      newFolder.name = name;
      newFolder.isFolder = true;
      newFolder.children = [];
      this.folder.children.push(newFolder);
    }
  }

  public deleteFolder(): void {
    this.deleteFolderEvent.emit(this.folder.id);
  }

  public deleteNestedFolder(id: string): void {
    this.deleteFolderEvent.emit(id);
  }
}

