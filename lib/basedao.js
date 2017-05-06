/**
 * Created by CKLogic on 2017/5/6.
 */
/**
 * Created by CKLogic on 2017/5/6.
 */
var mongoose = require('mongoose');
var db;//；连接数据库
function BaseDao(){};
function EntryDao(dbname,schema){
    this.dbname=dbname
    this.schema=schema;
};
EntryDao.prototype.create=function(model,callback) {
    var temp = db.model(this.dbname, this.schema); //  与users集合关联
    temp.create(model, function (err, doc) {
        callback(doc);
    })
};
BaseDao.prototype.connect=function(url){
    if(db==null){
        db=mongoose.connect(url);
    }
    return db;
}
BaseDao.prototype.disconnect=function(){
    if(db!=null){
        db.disconnect();
    }
}
BaseDao.prototype.init=function(dao) {
    return new EntryDao(dao.dBname,dao.schema);
};
exports.baseDao = new BaseDao();