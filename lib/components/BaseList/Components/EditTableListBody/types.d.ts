import { ReactNode } from 'react';
export interface IEditableCellProps {
    title: string;
    editable: boolean;
    children: ReactNode;
    dataIndex: string;
    record: Record<string, any>;
    handleSave: () => void;
    type: string;
    typeValue: string;
    dictItemMap: Map<any, any>;
    [key: string]: any;
}
export interface IEditTableListBodyProps {
    onRowChange?: (selectedRowKeys: any[], selectedRows: any[]) => void;
    handleSaveCallBack?: () => void;
    columns?: any[];
    dataSource?: any[];
    selectedRows?: any[];
    rowSelection?: boolean | {
        selectedRowKeys?: any[];
        selectedRows?: any[];
    };
    otherParams?: object;
    tableDensity?: 'small' | 'middle' | 'large' | undefined;
    scrollX?: string | number | true | null;
    scrollY?: string | number | undefined;
    className?: string;
}
