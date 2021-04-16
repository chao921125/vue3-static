import Mock from "mockjs";
import requestURL from "@/api/index";

Mock.setup({
  timeout: "200-600",
});

export const random = () => {
  return Math.floor(Math.random() * 10000000);
};

Mock.mock(requestURL.login, "post", () => {
  return { token: random(), uuid: random() };
});

Mock.mock(requestURL.logout, "post", () => {
  return { token: random(), uuid: random() };
});
Mock.mock(requestURL.getUserInfo, "post", () => {
  const menus = [{
      id: 1,
      orderNum: 1,
      type: 0,
      name: "首页",
      title: "首页",
      path: "home",
      component: "Home",
      redirect: "",
      icon: "el-icon-location",
      isLink: 0,
      isCache: 0,
      isDisable: 0,
      isSideMenu: 1,
      status: 1,
      perms: "admin:system:*",
    }, {
      id: 2,
      orderNum: 2,
      type: 0,
      name: "示例",
      title: "示例",
      path: "demo",
      component: "",
      redirect: "",
      icon: "el-icon-location",
      isLink: 0,
      isCache: 0,
      isDisable: 0,
      isSideMenu: 1,
      status: 1,
      perms: "admin:system:*",
      children: [{
          id: 21,
          orderNum: 1,
          type: 1,
          name: "国际化",
          title: "国际化",
          path: "i18n",
          component: "demo/i18n/I18n",
          redirect: "",
          icon: "el-icon-location",
          isLink: 0,
          isCache: 0,
          isDisable: 0,
          isSideMenu: 1,
          status: 1,
          perms: "admin:system:*",
        }, {
          id: 22,
          orderNum: 2,
          type: 1,
          name: "加密解密",
          title: "加密解密",
          path: "encrypt",
          component: "demo/encrypt/CryptoJs",
          redirect: "",
          icon: "el-icon-location",
          isLink: 0,
          isCache: 0,
          isDisable: 0,
          isSideMenu: 1,
          status: 1,
          perms: "admin:system:*",
        },
      ]
    }, {
      id: 9,
      orderNum: 2,
      type: 0,
      name: "系统管理",
      title: "系统管理",
      path: "system",
      component: "",
      redirect: "",
      icon: "el-icon-location",
      isLink: 0,
      isCache: 0,
      isDisable: 0,
      isSideMenu: 1,
      status: 1,
      perms: "admin:system:*",
      children: [{
          id: 91,
          orderNum: 1,
          type: 1,
          name: "用户管理",
          title: "用户管理",
          path: "users",
          component: "system/Users",
          redirect: "",
          icon: "el-icon-location",
          isLink: 0,
          isCache: 0,
          isDisable: 0,
          isSideMenu: 1,
          status: 1,
          perms: "admin:system:*",
        }, {
          id: 92,
          orderNum: 2,
          type: 1,
          name: "角色管理",
          title: "角色管理",
          path: "roles",
          component: "system/Roles",
          redirect: "",
          icon: "el-icon-location",
          isLink: 0,
          isCache: 0,
          isDisable: 0,
          isSideMenu: 1,
          status: 1,
          perms: "admin:system:*",
        }, {
          id: 93,
          orderNum: 3,
          type: 1,
          name: "菜单管理",
          title: "菜单管理",
          path: "menus",
          component: "system/Menus",
          redirect: "",
          icon: "el-icon-location",
          isLink: 0,
          isCache: 0,
          isDisable: 0,
          isSideMenu: 1,
          status: 1,
          perms: "admin:system:*",
        }, {
          id: 94,
          orderNum: 4,
          type: 1,
          name: "字典管理",
          title: "字典管理",
          path: "dictionary",
          component: "system/Dictionary",
          redirect: "",
          icon: "el-icon-location",
          isLink: 0,
          isCache: 0,
          isDisable: 0,
          isSideMenu: 1,
          status: 1,
          perms: "admin:system:*",
        }, {
          id: 95,
          orderNum: 5,
          type: 1,
          name: "公司管理",
          title: "公司管理",
          path: "company",
          component: "system/Company",
          redirect: "",
          icon: "el-icon-location",
          isLink: 0,
          isCache: 0,
          isDisable: 0,
          isSideMenu: 1,
          status: 1,
          perms: "admin:system:*",
        }, {
          id: 96,
          orderNum: 6,
          type: 1,
          name: "部门管理",
          title: "部门管理",
          path: "depts",
          component: "system/Depts",
          redirect: "",
          icon: "el-icon-location",
          isLink: 0,
          isCache: 0,
          isDisable: 0,
          isSideMenu: 1,
          status: 1,
          perms: "admin:system:*",
        },
      ],
    },
  ];
  return {
    name: "name",
    roles: [],
    permissions: [],
    menus: menus,
  };
});

export default Mock;
