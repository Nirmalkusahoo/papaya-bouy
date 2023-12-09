import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DsaRoutingModule} from './dsa-routing.module';
import {DsaQsListComponent} from './dsa-qs-list/dsa-qs-list.component';
import {DsaTopicListComponent} from './dsa-topic-list/dsa-topic-list.component';


@NgModule({
  declarations: [
    DsaQsListComponent,
    DsaTopicListComponent],
  imports: [
    CommonModule,
    DsaRoutingModule
  ]
})
export class DsaModule {
}
