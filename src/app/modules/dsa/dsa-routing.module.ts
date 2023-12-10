import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DsaQsListComponent} from './dsa-qs-list/dsa-qs-list.component';
import {DsaTopicListComponent} from './dsa-topic-list/dsa-topic-list.component';

const routes: Routes = [
  {path: 'topics', component: DsaTopicListComponent},
  {path: 'list/:topic', component: DsaQsListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DsaRoutingModule {
}
