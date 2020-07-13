import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { Ng2TableModule } from 'ngx-datatable';

@NgModule({
  declarations: [ DataTableComponent ],
  exports: [ DataTableComponent ],
  imports: [
    CommonModule,
    Ng2TableModule,
  ]
})
export class ComponentsModule { }
