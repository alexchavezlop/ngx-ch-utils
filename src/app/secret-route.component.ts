import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataTableConfig } from 'projects/ngx-ch-utils/src/lib/components/data-table/models/data-table.models';
import { TableData } from './data';

@Component({
    selector: 'demo-secret-component',
    templateUrl: './secret-route.component.html'
})

export class SecretRouteComponent implements OnInit {

  public tableConfig: DataTableConfig;
  public data: any;

    constructor(private route: ActivatedRoute) {
      this.data = TableData;
      this.tableConfig = {
        paging: true,
        globalFilterText: 'Filtro Global',
        columns: [
          {title: 'Nome', name: 'name', filtering: {filterString: '', placeholder: 'Filtro por Nome'}},
          {
            title: 'Endereço',
            name: 'position',
            filtering: {filterString: '', placeholder: 'Filter by position'}
          },
          {title: 'Office', className: ['office-header', 'text-success'], name: 'office', sort: 'asc'},
          {title: 'Extn.', name: 'ext', sort: '', filtering: {filterString: '', placeholder: 'Filter by extn.'}},
          {title: 'Start date', className: ['text-warning'], name: 'startDate'},
          {title: 'Salary ($)', name: 'salary'}
        ],
      };
    }

    ngOnInit() { }
}
