export default Intl;
declare namespace Intl {
    function init(currentLocale: any): Promise<void>;
    function v(key?: string, option?: {}): string;
    function vHtml(key?: string, option?: {}): string;
    function getAllLocals(): {
        key: string;
        label: any;
    }[];
}
