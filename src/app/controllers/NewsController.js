class NewsController {
    //[get] /new
    index(req, res) {
        res.render('new');
    }
    //
    show(req, res) {
        res.send('slug');
    }
}

module.exports = new NewsController();
