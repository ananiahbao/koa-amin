import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {

    /**
     * @param id {string} 自增id
     * @param username {string} 用户名
     * @param password {string} 用户密码
     * @param email {string} 用户邮箱
     * @param telephone {string} 用户手机
     * @param wechat {string} 用户微信
     * @param time {number} 登录时间
     * @param ip {string} 登录ip地址
     */

    @PrimaryGeneratedColumn() 
    id: number = 0;

    @Column("varchar", { length: 255 })
    username: string = '';

    @Column("varchar", { length: 255 })
    password: string = '';

    @Column("varchar", { length: 255 })
    email: string = '';

    @Column("varchar", { length: 11 })
    telephone: string = '';

    @Column("varchar", { length: 255 })
    wechat: string = '';

    @Column()
    time: number = 0;

    @Column("varchar", { length: 255 })
    ip:string = '';

    @Column("varchar", { length: 255 })
    nickname: string = '';
}
