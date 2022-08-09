import {
  Button,
  Message,
  Form,
  FormItem,
  Input,
  Container,
  Header,
  Main,
  Aside,
  Col,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
} from "element-ui";

const element = {
  install: function (Vue) {
    Vue.use(Button);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Input);
    Vue.use(Container);
    Vue.use(Header);
    Vue.use(Main);
    Vue.use(Aside);
    Vue.use(Col);
    Vue.use(Menu);
    Vue.use(Submenu);
    Vue.use(MenuItemGroup);
    Vue.use(MenuItem);
    Vue.use(Breadcrumb);
    Vue.use(BreadcrumbItem);

    Vue.prototype.$message = Message;
  },
};
export default element;
