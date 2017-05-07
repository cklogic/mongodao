/**
 * Created by CKLogic on 2017/5/6.
 */
/**
 * Created by CKLogic on 2017/5/6.
 */
var mongoose = require('mongoose');
var db;
function BaseDao(){};
function EntryDao(dbname,schema){
    this.dbname=dbname
    this.schema=schema;
};
EntryDao.prototype.create=function(model,callback) {
    var temp = db.model(this.dbname, this.schema); 
    temp.create(model, function (err, doc) {
        callback(doc);
    })
};
EntryDao.prototype.findOne=function(model,callback) {
    var temp = db.model(this.dbname, this.schema); 
    temp.findOne(model, function (err, doc) {
        callback(doc);
    })
};
EntryDao.prototype.findOne=function(model,callback) {
    var temp = db.model(this.dbname, this.schema); 
    temp.findOne(model, function (err, doc) {
        callback(doc);
    })
};
EntryDao.prototype.find=function(model,callback) {
    var temp = db.model(this.dbname, this.schema); 
    temp.find(model, function (err, doc) {
        callback(doc);
    })
};
EntryDao.prototype.remove=function(model,callback) {
    var temp = db.model(this.dbname, this.schema); 
    temp.remove(model, function (err, doc) {
        callback(doc);
    })
};
EntryDao.prototype.findOneAndUpdate=function(model,update,callback) {
    var temp = db.model(this.dbname, this.schema); 
    temp.findOneAndUpdate(model, update,function (err, doc) {
        callback(doc);
    })
};
EntryDao.prototype.count=function(model,callback) {
    var temp = db.model(this.dbname, this.schema); 
    temp.count(model,function (err, doc) {
        callback(doc);
    })
};
EntryDao.prototype.update=function(model,update,callback) {
    var updates={
        $set:update
    };
    var temp = db.model(this.dbname, this.schema); 
    temp.update(model, updates,function (err, doc) {
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