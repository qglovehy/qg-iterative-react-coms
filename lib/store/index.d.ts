/// <reference types="redux-persist/types/persistreducer" />
/// <reference types="redux-persist/types/types" />
/// <reference types="redux-persist" />
declare const store: import("redux").Store<import("redux").EmptyObject & {
    counter: {
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
    };
} & import("redux-persist/es/persistReducer").PersistPartial, import("redux").AnyAction>;
declare const persistence: import("redux-persist").Persistor;
export { store, persistence };
