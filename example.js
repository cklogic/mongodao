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
var userDTO = {
    dBname:"user",
    schema:new Schema({
        username: String,
        password: String
    })
};
var userDao=baseDao.init(userDTO);

//function for add a docment
var user = {
    username:"admin",
    password:"123456"
}
userDao.create(user,function(doc){
    console.log(doc);
});

//funtion for query one
var queryUser={
    username:"admin"
}
userDao.findOne(queryUser,function(doc){
    console.log(doc);
})

//funtion for query list
var queryUser={
    username:"admin"
}
userDao.find(queryUser,function(docs){
    console.log(docs);
})

//function for DELETE
var queryUser={
    username:"admin"
}
userDao.remove(queryUser,function(e){
    console.log(e);
})

//function for update
var queryUser={
    username:"admin",
}
var updateUser={
    password:"123456"
}
userDao.findOneAndUpdate(queryUser,updateUser,function(e){
    console.log(e);
})

//function for count
var queryUser={
    username:"admin",
}

userDao.count(queryUser,function(e){
    console.log(e);
})



baseDao.disconnect();
