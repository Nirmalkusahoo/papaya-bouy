import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DsaQsListComponent} from './dsa-qs-list/dsa-qs-list.component';
import {DsaTopicListComponent} from './dsa-topic-list/dsa-topic-list.component';
import {AddQuestionComponent} from './add-question/add-question.component';
import {StarRatingComponent} from '../../components/projects/star-rating/star-rating.component';
import {ProgressBarComponent} from '../../components/projects/progress-bar/progress-bar.component';
import {FolderComponent} from '../../components/projects/folder-struture/folder/folder.component';
import {FolderStrutureComponent} from '../../components/projects/folder-struture/folder-struture.component';
import {AutoCompleteSearchBarComponent} from '../../components/projects/auto-complete-search-bar/auto-complete-search-bar.component';

const routes: Routes = [
  {path: 'topics', component: DsaTopicListComponent},
  {path: 'list/:topic', component: DsaQsListComponent},
  {path: 'addqs', component: AddQuestionComponent},
  {path: 'starrating', component: StarRatingComponent},
  {path: 'progress-bar', component: ProgressBarComponent},
  {path: 'folder-structure', component: FolderStrutureComponent},
  {path: 'auto-complete', component: AutoCompleteSearchBarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DsaRoutingModule {
}
