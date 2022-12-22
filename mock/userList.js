import Mock from "mockjs"; //导入mockjs

const tokens = {
  admin: {
    token: "admin-token",
  },
  editor: {
    token: "editor-token",
  },
};
const users = {
  "admin-token": {
    roles: ["admin"],
    introduction: "I am a super administrator",
    avatar:
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    name: "Super Admin",
  },
  "editor-token": {
    roles: ["editor"],
    introduction: "I am an editor",
    avatar:
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    name: "Normal Editor",
  },
};
const userList = {
  //定义用户数据
  data: {
    total: 6,

    //前两个用户数据分别固定设为管理员和普通用户，为后续权限设置做准备，其他用户随机生成
    userinfo: [
      {
        username: "admin",
        password: "123456",
        roles: "admin",
        name: "张三",
        age: 23,
        job: "前端工程师",
      },
      {
        username: "editor",
        password: "123456",
        roles: "editor",
        name: "测试1",
        "age|20-30": 23,
        job: "前端工程师",
      },
      {
        username: "@word(3, 5)",
        password: "123456",
        roles: "editor",
        name: "@cname",
        "age|20-30": 23,
      },
    ],
    meta: {
      status: 200,
      message: "success",
    },
  },
};

//定义请求方法与路径
export default {
  "get|/user": userList,
};

Mock.mock("/user", "post", (req) => {
  //路径与请求方式
  const { username, password } = JSON.parse(req.body); //将传递进来的数据保存
  for (let i = 0; i < userList.data.userinfo.length; i++) {
    //判断userList中是否存在该用户并且用户密码是否正确
    if (
      username === userList.data.userinfo[i].username &&
      password === userList.data.userinfo[i].password
    ) {
      return {
        meta: {
          msg: "success",
          code: 20000,
          token: tokens[username],
        },
        user: {
          username: userList.data.userinfo[i].username,
          roles: userList.data.userinfo[i].roles,
        },
      };
    }
  }
  return {
    meta: {
      msg: "error",
      status: 201,
    },
  };
});
