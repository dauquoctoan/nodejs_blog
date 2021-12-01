const path = require('path');
const express = require('express');
//sử dung templates engine
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const router = require('./routers');

//cấu hình file static
app.use(express.static(path.join(__dirname, 'public')));

// sử dụng middleware để lấy dữ liệu post từ html
//từ phên bản mới thì đã cài sẵn body-parse nên không cần cài thêm nưa
app.use(express.urlencoded({ extended: true }));

//lấy data từ javascript
app.use(express.json());

app.use(morgan('combined'));
//template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

router(app);

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`),
);
