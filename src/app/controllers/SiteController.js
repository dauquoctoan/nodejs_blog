const Course = require('../models/Course');
const { mutilPleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[get] /
    index(req, res, next) {
        //promise
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutilPleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    // index(req, res) {
    //     var arr =[{name:"toan"},{name:"Quan"},{name:"ba"}];
    // }

    //[get] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
