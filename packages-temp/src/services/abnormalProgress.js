import { post } from './index';

//可疑进程相关

export const requestAddSupervise = (params) => post('user/user/AddSupervise', params);
