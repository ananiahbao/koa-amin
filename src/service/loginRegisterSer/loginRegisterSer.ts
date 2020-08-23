import { constants } from "buffer";
import { userInfo } from "os";

export default class LoginService {
  hello = () => {
    return new Promise(resolve => resolve('hello world'));
  };
  loginInfo = (info: object) => {
    if(info['user'] == 2000){
      return new Promise(resolve => resolve('success'));
    }else{
      return new Promise(resolve => resolve('fail'));
    }
    
  }
}
