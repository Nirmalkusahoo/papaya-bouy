import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DsaQsListComponent} from './dsa-qs-list/dsa-qs-list.component';
import {DsaTopicListComponent} from './dsa-topic-list/dsa-topic-list.component';
import {AddQuestionComponent} from './add-question/add-question.component';
import {StarRatingComponent} from '../../components/projects/star-rating/star-rating.component';
import {ProgressBarComponent} from '../../components/projects/progress-bar/progress-bar.component';

const routes: Routes = [
  {path: 'topics', component: DsaTopicListComponent},
  {path: 'list/:topic', component: DsaQsListComponent},
  {path: 'addqs', component: AddQuestionComponent},
  {path: 'starrating', component: StarRatingComponent},
  {path: 'progress-bar', component: ProgressBarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DsaRoutingModule {
}
