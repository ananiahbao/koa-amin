import { UserOperation } from '../database/dao/index'
import { type } from 'os';

export default class LoginService {
  hello = () => {
    return new Promise(resolve => resolve('hello world'));
  };
  registerInfo = (ctx: object) => {
    let ispPOst = ctx['request'].body
    let reg = new UserOperation();
    //获取当前时间
    ispPOst['time'] =  Number(parseInt( (Date.now() / 1000).toString() ));
    if(ispPOst){
      let data: object = reg.insert(ispPOst).then( res => {
          return ctx['body'] = {status: 200, error: 0, msg: 'ok', result: res}
      })
      return new Promise(resolve => resolve(data));
    }
    
  }
}
