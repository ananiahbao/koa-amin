import { UserOperation } from '../database/dao/index'
import { pasEncryption } from '../database/dao/checkBcrypt'
import { aboutToken } from './token'

const reg = new UserOperation()
const encryption = new pasEncryption();
const tokenFuc = new aboutToken();
export default class LoginService {
  hello = () => {
    return new Promise(resolve => resolve('hello world'));
  };
  registerInfo = (ctx: object) => {
    let ispPost = ctx['request'].body
    let data:object = {};

    if(Object.keys(ispPost).length > 0){
      //获取当前时间
      ispPost['time'] =  Number(parseInt( (Date.now() / 1000).toString() ));
      let regok: object = reg.find({username: ispPost.username}).then(res => {
          if(res.length > 0){
              return ctx['body'] = {error: 1, msg: '该用户名已被注册！'}  
          }else{
              return reg.insert(ispPost).then( res => {
                  return ctx['body'] = {status: 200, error: 0, msg: '注册成功', result: res}
              })
          }
      });

      return new Promise(resolve => resolve(regok));
    }else{
      let data:object = ctx['body'] = {error: 1, msg: '注册失败'}

      return new Promise(resolve => resolve(data));
    }
  };
  loginInfo = (ctx: object) => {
    let params: object = ctx['request'].body;

    if(params['username'] != '' && params['username'] != ''){
      let result: object = reg.find({username: params['username']}).then(res => {

        if(res.length > 0){
          let isTrue = encryption.checkBcry(params['password'], res[0]['password']);

          if(isTrue){
            // 创建token
            let currentToken = tokenFuc.createToken();
            // 验证token
            console.log(tokenFuc.checkToken(params['token']))
            return ctx['body'] = {status: 200, error: 0, msg: '登录成功', token: currentToken, result: res}
          }else{
            return ctx['body'] = {status: 200, error: 1, msg: '登录失败'}
          }
        }
      }).then(res => {
        delete res['result'][0]['password'];

        return res;
      })
      return new Promise(resolve => resolve(result));

    }else{
      let result: object = ctx['body'] = {status: 200, error: 1, msg: '用户名密码不能为空！'}

      return new Promise(resolve => resolve(result));
    }
  }
}
