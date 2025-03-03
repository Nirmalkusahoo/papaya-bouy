import {Component} from '@angular/core';
import {HttpService} from '../../../modules/shared-module/services/http.service';

@Component({
  selector: 'app-folder-struture',
  templateUrl: './folder-struture.component.html',
  styleUrls: ['./folder-struture.component.scss']
})
export class FolderStrutureComponent {
  folders: Folder[] = [];

  constructor(private httpService: HttpService) {
    this.getAllFolder();
  }

  private getAllFolder(): void {
    const url = `assets/jsondata/folder-structure-data.json`;
    this.httpService.getData(url).subscribe((data) => {
      this.folders = data;
    });
  }

  public deleteFolder(id: string): void {
    const response = this.deleteFolderById(this.folders, id);
    if (response) {
      alert('Deleted');
    } else {
      alert('Couldn\'t delete');
    }
  }

  private deleteFolderById(folders: Folder[], id: string): boolean {
    for (let i = 0; i < folders.length; i++) {
      if (folders[i].id === id) {
        folders.splice(i, 1);
        return true;
      }
      if (folders[i].children && folders[i].children.length > 0) {
        const isDeleted = this.deleteFolderById(folders[i].children, id);
        if (isDeleted) {
          return true;
        }
      }
    }
    return false;
  }

  public openGitHubUrl(): void {
    window.open('https://github.com/Nirmalkusahoo/papaya-bouy/tree/7827db184bd00413b18f0ef5ae3e356d15486772/src/app/components/projects/folder-struture', '_blank');
  }
}

export class Folder {
  id: string;
  name: string;
  isFolder: boolean;
  children: Folder[];
}
