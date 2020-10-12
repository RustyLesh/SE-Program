const Upshortinfos = require('./db');

module.exports = {
    sear_user,
    sear_title,
    sear_label
}

// 以发布题集的用户名为搜索条件
async function sear_user(keyword, maxvalue, minvalue, sort, sortype) {
    let reg = new RegExp(keyword, 'i');
    let params = {
        created: {
            $gte: minvalue,
            $lte: maxvalue
        },
        author: { $regex: reg }
    };
    let model = Upshortinfos.find(params);
    if (sortype) {
        model.sort({ 'created': sort });
    } else {
        model.sort({ 'collected': sort });
    }
    try {
        let ret = await new Promise((resolve, reject) => {
            model.exec(function (err, doc) {
                if (err) {
                    reject('fail to find set by author:' + keyword);
                } else {
                    if (!doc.length) {
                        reject('the result is empty search by author:' + keyword);
                    } else {
                        resolve(doc);
                    }
                }
            });
        });
        return ret;
    } catch (error) {
        throw err;//从async模块中抛出错误
    }
}

//以题集标题为搜索条件
async function sear_title(keyword, maxvalue, minvalue, sort, sortype) {
    let reg = new RegExp(keyword, 'i');
    let params = {
        created: {
            $gte: minvalue,
            $lte: maxvalue
        },
        pname: { $regex: reg }
    };
    let model = Upshortinfos.find(params);
    if (sortype) {
        model.sort({ 'created': sort });
    } else {
        model.sort({ 'collected': sort });
    }
    try {
        let ret = await new Promise((resolve, reject) => {
            model.exec(function (err, doc) {
                if (err) {
                    reject('fail to find set by title:' + keyword);
                } else {
                    if (!doc.length) {
                        reject('the result is empty search by title:' + keyword);
                    } else {
                        resolve(doc);
                    }
                }
            });
        });
        return ret;
    } catch (error) {
        throw err;//从async模块中抛出错误
    }
}

//以题集标签为搜索条件
async function sear_label(keyword, maxvalue, minvalue, sortype, sort) {
    let reg = new RegExp(keyword, 'i');
    let params = {
        created: {
            $gte: minvalue,
            $lte: maxvalue
        },
        label: { $regex: reg }
    };
    let model = Upshortinfos.find(params);
    if (sortype) {
        model.sort({ 'created': sort });
    } else {
        model.sort({ 'collected': sort });
    }
    try {
        let ret = await new Promise((resolve, reject) => {
            model.exec(function (err, doc) {
                if (err) {
                    reject('fail to find set by label:' + keyword);
                } else {
                    if (!doc.length) {
                        reject('the result is empty search by label:' + keyword);
                    } else {
                        resolve(doc);
                    }
                }
            });
        });
        return ret;
    } catch (error) {
        throw err;//从async模块中抛出错误
    }
}