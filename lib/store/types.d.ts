interface AntdComponentTheme {
    colorPrimary: string;
    algorithm?: boolean;
}
interface AntdTheme {
    token: {
        colorPrimary: string;
        borderRadius: number;
    };
    components: {
        Button: AntdComponentTheme;
        Input: AntdComponentTheme;
    };
}
interface ProjectTheme {
    colorPrimary: string;
}
interface CounterState {
    value: {
        token: string;
        username: string;
        roleType: string;
        dict: Array<Map<any, any>>;
        currentIntl: string;
        currentMenuItem: string;
        collapsed: boolean;
        menuWidth: number;
        loading: boolean;
        loadingText: string;
        openMenuDraw: boolean;
        socketId: string | null;
        breadcrumb: Array<any>;
        Itemtype: string;
        antdTheme: AntdTheme;
        projectTheme: ProjectTheme;
    };
}
export interface IRootStateProps {
    counter: CounterState;
}
export {};
