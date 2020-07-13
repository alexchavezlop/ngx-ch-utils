export interface DataTableConfig {
  paging: boolean;
  className?: string;
  globalFilterText?: string;
  columns: DataTableColumn[];
  optionColumnConfig?: DataTableOptionColumn;
}

export interface DataTableColumn {
  title: string;
  name: string;
  sort?: string | boolean;
  className?: string[];
  filtering?: DataTableFiltering;
}

export interface DataTableFiltering {
  filterString: string;
  placeholder: string;
}

export interface DataTableOptionColumn {
  headerText: string;
  className?: string;
  butons: DataTableOptionButton[];
}

export interface DataTableOptionButton {
  className?: string;
}
