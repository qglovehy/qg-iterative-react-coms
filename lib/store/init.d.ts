export namespace state {
    let token: string;
    let username: string;
    let roleType: string;
    let currentMenuItem: string;
    let collapsed: boolean;
    let menuWidth: number;
    let loading: boolean;
    let loadingText: string;
    let openMenuDraw: boolean;
    let socketId: null;
}
export namespace prevState {
    let collapsed_1: boolean;
    export { collapsed_1 as collapsed };
    let menuWidth_1: number;
    export { menuWidth_1 as menuWidth };
    let loading_1: boolean;
    export { loading_1 as loading };
    let loadingText_1: string;
    export { loadingText_1 as loadingText };
    let openMenuDraw_1: boolean;
    export { openMenuDraw_1 as openMenuDraw };
}
