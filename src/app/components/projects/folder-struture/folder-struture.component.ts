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
}

export class Folder {
  name: string;
  isFolder: boolean;
  children: Folder[];
}
