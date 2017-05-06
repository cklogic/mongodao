/**
 * Created by CKLogic on 2017/5/6.
 */
/*var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://123.207.221.15/test');//；连接数据库*/

var mongodao=require('mongodao');
var Schema = require('mongoose').Schema;

var baseDao=mongodao.baseDao;
var url='mongodb://123.207.221.15/test';
baseDao.connect(url);
var userDao = {
    dBname:"user",
    schema:new Schema({
        username: String,
        password: String
    })
}; //  定义了一个新的模型，但是此模式还未和users集合有关联
var user = {
    username:"xiaoming5",
    password:"abcd6"
}
var entryDao=baseDao.init(userDao);
entryDao.create(user,function(u){
    console.log(u);
});
baseDao.disconnect();
