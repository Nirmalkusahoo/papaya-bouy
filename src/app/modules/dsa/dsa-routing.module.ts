import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DsaQsListComponent} from './dsa-qs-list/dsa-qs-list.component';
import {DsaTopicListComponent} from './dsa-topic-list/dsa-topic-list.component';

const routes: Routes = [
  {path: 'list/:id', component: DsaQsListComponent},
  {path: 'topics', component: DsaTopicListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DsaRoutingModule {
}
