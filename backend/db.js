const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bao2005bao', // hoặc mật khẩu nếu có
    database: 'parkingcar'
});

db.connect(err => {
    if (err) {
        console.error('❌ Không kết nối DB:', err);
    } else {
        console.log('✅ Kết nối DB thành công');
    }
});

module.exports = db;
