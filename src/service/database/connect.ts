import { createConnection } from 'typeorm';

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
        console.log('database connect success.');
        console.log('应用启动成功')
        return true
    }).catch((err: any) => {
        console.log('应用启动失败');
        console.log(err)
        return false
    })
}