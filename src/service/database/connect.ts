import { createConnection } from 'typeorm';
import { UserOperation } from './dao/index'

export const dbInt = async (app) =>{
    createConnection ({
        type: 'mysql', // 数据库类型
        host: '127.0.0.1', // 数据库地址
        port: 3306, // 数据库端口号
        username: 'root', // 数据库用户名
        password: 'root', // 密码
        database: 'ayunblog', // 数据库名
        entities: [ __dirname + '/entity/*.ts', 'dist/data/entity/*.js'], // 引入实体
        synchronize: true,
    }).then((conn: any) => {
        console.log('connect success.');
        let param =  {username:'admin', password: 'adminya',email: '123admin@qq.com',telephone: '000000000',wechat: '123byy1233',time:1324324242,ip: '123127.0.0.1',nickname: '123阿云'}
        let userOperation = new UserOperation; 
       userOperation.find({username: 'admin'}).then(res => {
           console.log(res[0]['id'])
       })
        console.log('应用启动成功')
        return true
    }).catch((err: any) => {
        console.log('应用启动失败');
        console.log(err)
        return false
    })
}