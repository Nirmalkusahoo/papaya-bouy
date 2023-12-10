import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DsaRoutingModule} from './dsa-routing.module';
import {DsaQsListComponent} from './dsa-qs-list/dsa-qs-list.component';
import {DsaTopicListComponent} from './dsa-topic-list/dsa-topic-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    DsaQsListComponent,
    DsaTopicListComponent],
  imports: [
    CommonModule,
    DsaRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DsaModule {
}
