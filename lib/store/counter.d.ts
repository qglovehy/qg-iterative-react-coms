interface IPayloadProps {
    payload: any;
    type: string;
}
export declare const counter: import("@reduxjs/toolkit").Slice<{
    value: {
        dict: null;
        token: null;
        antdTheme: {
            token: {
                colorPrimary: string;
                borderRadius: number;
            };
            components: {
                Button: {
                    colorPrimary: string;
                    algorithm: boolean;
                };
                Input: {
                    colorPrimary: string;
                };
            };
        };
        projectTheme: {
            colorPrimary: string;
        };
        componentSize: string;
        direction: string;
    };
}, {
    onMergeState: (state: any, action: IPayloadProps) => void;
    onSetState: (state: any, action: IPayloadProps) => void;
    onResetState: (state: any) => void;
    setAntdTheme: (state: any, action: IPayloadProps) => void;
}, "counter">;
export declare const onSetState: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "counter/onSetState">, setAntdTheme: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "counter/setAntdTheme">, onResetState: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"counter/onResetState">, onMergeState: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "counter/onMergeState">;
declare const _default: import("redux").Reducer<{
    value: {
        dict: null;
        token: null;
        antdTheme: {
            token: {
                colorPrimary: string;
                borderRadius: number;
            };
            components: {
                Button: {
                    colorPrimary: string;
                    algorithm: boolean;
                };
                Input: {
                    colorPrimary: string;
                };
            };
        };
        projectTheme: {
            colorPrimary: string;
        };
        componentSize: string;
        direction: string;
    };
}>;
export default _default;
