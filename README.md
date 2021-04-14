# 校验台湾身份证号

## 安装
```shell
$ npm i taiwan-idcard
# or
$ yarn add taiwan-idcard
```

## 使用

### 校验

```js
const twIdCard = require('taiwan-idcard')

twIdCard.verify('A123456789')

// 返回结果 成功
true

// 返回结果 失败
false
```

### 详情

```js
const twIdCard = require('taiwan-idcard')

twIdCard.info('A234567893')

// 返回结果 成功
{
  valid: true,
  gender: "F", // M->男 F->女
  area: "台北市",
}

// 返回结果 失败
{
  valid: false,
}
```