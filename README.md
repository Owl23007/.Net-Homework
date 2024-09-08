
# 这是我.NET课程作业仓库————第一次作业
1. `userinfo.html` 为静态网页，打开可以直接查看
2. `login.html` 为了实现动态验证码的功能，使用 Node.js 和 Express 实现。参阅以下内容以启动服务器。

## 目录结构

```
myapp/ 
├── node_modules/ 
├── src/
|    ├──Avatar/avatar.png
|    └── Captcha/ 
|        ├── oic1.png 
|        ├── captcha2.png 
|        └── ... (更多验证码图片)
├── package.json 
├── server.js 
├── login.html (作业二)
└── userinfo.html(作业一)
```


## 安装

1. 确保你已经安装了 [Node.js](https://nodejs.org/) 和 npm。
2. 克隆或下载此项目到你的本地机器。
3. 在项目根目录下运行以下命令来安装依赖：

```bash
npm install
```

## 运行服务器

在项目根目录下运行以下命令来启动服务器：

```bash
node server.js
```

你应该会看到类似以下的输出，表示服务器已经启动并正在监听端口 3000：

```
服务器运行在 http://localhost:3000
```

## 访问网页

打开浏览器，访问 `http://localhost:3000`，你应该能够看到 `login.html` 页面，并且验证码图片会随机显示。点击“刷新验证码”按钮，可以刷新验证码图片。

## 文件说明

- [`server.js`](./server.js): 服务器端代码，使用 Express 实现。
- `login.html`: 前端 HTML 文件，包含登录表单和验证码图片。
- `src/Captcha/`: 存放验证码图片的文件夹。

## 自定义

你可以根据需要自定义以下内容：

1. **验证码图片**: 将更多的验证码图片添加到 `src/Captcha/` 文件夹中。
2. **表单样式**: 修改 `login.html` 文件中的 CSS 样式以满足你的需求。
3. **服务器端逻辑**: 修改 [`server.js`](./server.js) 文件中的服务器端逻辑以添加更多功能。

## 许可证

此项目使用 MIT 许可证。


