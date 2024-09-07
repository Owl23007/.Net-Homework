const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// 静态文件夹
app.use(express.static('src'));

// 获取随机图片
app.get('/captcha', (req, res) => {
    const captchaDir = path.join(__dirname, 'src', 'Captcha');
    fs.readdir(captchaDir, (err, files) => {
        if (err) {
            return res.status(500).send('无法读取验证码文件夹');
        }
        const randomFile = files[Math.floor(Math.random() * files.length)];
        res.sendFile(path.join(captchaDir, randomFile));
    });
});

// 默认打开 login.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});