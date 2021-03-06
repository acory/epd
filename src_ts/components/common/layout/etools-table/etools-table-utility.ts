/**
 * Utility functions used in etools data lists
 */

import {AnyObject} from '../../../../types/globals';
import {EtoolsTableColumn, EtoolsTableColumnSort} from '@unicef-polymer/etools-table/etools-table';
export interface EtoolsTableSortItem {
  name: string;
  sort: EtoolsTableColumnSort;
}

export const getUrlQueryStringSort = (sortFields: EtoolsTableSortItem[]): string => {
  let sort = '';
  if (sortFields.length > 0) {
    sort = sortFields
      .filter(({sort}: EtoolsTableSortItem) => Boolean(sort))
      .map((sortItem: EtoolsTableSortItem) => `${sortItem.name}.${sortItem.sort}`)
      .join('|');
  }
  return sort;
};

export const getSortFields = (columns: EtoolsTableColumn[]): EtoolsTableSortItem[] => {
  let sortItems: EtoolsTableSortItem[] = [];
  const sortedColumns: any[] = columns.filter((c: EtoolsTableColumn) => c.sort !== undefined);
  if (sortedColumns.length > 0) {
    sortItems = sortedColumns.map((c: EtoolsTableColumn) =>
      Object.assign({}, {name: c.name, sort: c.sort})
    ) as EtoolsTableSortItem[];
  }
  return sortItems;
};

export const getSortFieldsFromUrlSortParams = (param: string): EtoolsTableSortItem[] => {
  const sortFields: EtoolsTableSortItem[] = param.split('|').map((sort: string) => {
    const s = sort.split('.');
    const sortItem = {
      name: s[0],
      sort: s[1]
    } as EtoolsTableSortItem;
    return sortItem;
  });
  return sortFields;
};

export const buildUrlQueryString = (params: AnyObject): string => {
  const queryParams = [];

  for (const param in params) {
    if (!params[param]) {
      continue;
    }
    const paramValue = params[param];
    let filterUrlValue;

    if (paramValue instanceof Array) {
      if (paramValue.length > 0) {
        filterUrlValue = paramValue.join(',');
      }
    } else if (typeof paramValue === 'boolean') {
      if (paramValue) {
        // ignore if it's false
        filterUrlValue = 'true';
      }
    } else {
      if (!(param === 'page' && paramValue === 1)) {
        // do not include page if page=1
        filterUrlValue = String(paramValue).trim();
      }
    }

    if (filterUrlValue) {
      queryParams.push(param + '=' + filterUrlValue);
    }
  }

  return queryParams.join('&');
};
