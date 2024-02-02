interface IPayloadProps {
    payload: any;
    type: string;
}
export declare const counter: import("@reduxjs/toolkit").Slice<{
    value: {
        currentIntl: string;
        dict: null;
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
    };
}, {
    onSetState: (state: any, action: IPayloadProps) => void;
    onResetState: (state: any) => void;
    setAntdTheme: (state: any, action: IPayloadProps) => void;
}, "counter">;
export declare const onSetState: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "counter/onSetState">, setAntdTheme: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "counter/setAntdTheme">, onResetState: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"counter/onResetState">;
declare const _default: import("redux").Reducer<{
    value: {
        currentIntl: string;
        dict: null;
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
    };
}>;
export default _default;
