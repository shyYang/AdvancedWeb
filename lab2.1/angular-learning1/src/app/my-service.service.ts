import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  // LocalStorage判断是否重复并设置数据
  set(key: string, value: any){
    for (let i = 0; i < localStorage.length; i++){
      if (key === localStorage.key(i)){
        return 0;
      }
    }
    localStorage.setItem(key, JSON.stringify(value));
    return 1;
  }
  // 获取数据
  getAll(){
    let returnProducts: Object[] = [];
    console.log(localStorage.length);
    for (let i = 0; i < localStorage.length; i++){
      returnProducts.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    return returnProducts;
  }
  // 删除数据
  remove(key: string){
    localStorage.removeItem(key);
  }
}
