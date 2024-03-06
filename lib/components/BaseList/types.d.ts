export interface IBaseListProps {
    isEditTable: boolean;
    handleSaveCallBack: (a: any) => void;
    serviceFunc: (a: any, b: any) => void;
    functionControlTableTitle: string;
    columns: any[];
    otherParams: any;
    optionButtonGroup: any[];
    searchParamList: any[];
    rowSelection: boolean | {};
    scrollX: null | number;
    scrollY: number;
    functionControlHide: boolean;
    topPagination: boolean;
    bottomPagination: boolean;
}
export interface IStateProps {
    isHideFormItem?: boolean;
    tableDensity?: 'small' | 'middle' | 'large' | undefined;
    loading?: boolean;
    dataSource?: object[];
    selectedRows?: any[];
    selectedRowKeys?: any[];
    Condition?: {};
    rowSelection?: boolean | {};
    current?: number;
    pageSize?: number;
    total?: number;
}
