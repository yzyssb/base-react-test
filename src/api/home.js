import requestFun from './index';
import qs from 'qs';

const { stringify } = qs;
const { post, get } = requestFun;

//get方式
export async function fetchData1(params) {
    return get(`/api/bbb?${stringify(params)}`);
}


//post方式
export async function fetchData2(params) {
    return post(`/api/aaa`, params);
}

export async function getCategory(params) {
    return post(`/getCategory`, params);
}