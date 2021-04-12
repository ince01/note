import { Menu } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

export const siderWidth = 54;
export const siderMenuWidth = 300;
export const headerHeigth = 48;

function AppMenu() {
  return (
    <div
      className="overflow-x-hidden overflow-y-auto"
      style={{ height: 'calc(100% - 161px)' }}
    >
      <Menu
        className="bg-transparent"
        style={{ width: siderMenuWidth - 1 }}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
            <SubMenu key="sub4" title="Submenu">
              <Menu.Item key="123">
                Option 7asdas dsad das da sdas da das d dasdasdadas d asdsa d
              </Menu.Item>
              <Menu.Item key="321">
                Option 8asdasdasdsads asd ad adsa da sd asd asdsad
              </Menu.Item>
            </SubMenu>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default AppMenu;
