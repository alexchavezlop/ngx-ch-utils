import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';

@NgModule({
  declarations: [ DataTableComponent ],
  exports: [ DataTableComponent ],
  imports: [
    CommonModule,
    Ng2TableModule,
  ]
})
export class ComponentsModule { }
