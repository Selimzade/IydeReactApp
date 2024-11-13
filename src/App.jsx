import { Button, Layout, Menu } from 'antd';
import { useState } from 'react';
import { PiUsers } from "react-icons/pi";
import { Outlet, Link } from 'react-router-dom';
import { MdOutlineRule } from "react-icons/md";
import { TbMenu2 } from "react-icons/tb";
import { CgLaptop } from "react-icons/cg";

const { Content, Header, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth="0"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          background: 'none',
          overflow: 'auto',
        }}
      >
        <h2 style={{marginLeft: 20}}>
          Iyde App
        </h2>
        <Menu
          style={{ border: 'none' }}
          theme="light"
          mode="inline"
          items={[
            {
              key: '1',
              icon: <PiUsers />,
              label: <Link to={`/`}>İşçilər</Link>,
            },
            {
              key: '2',
              icon: <MdOutlineRule />,
              label: <Link to={`punkts`}>Punktlar</Link>,
            },
            {
              key: '3',
              icon: <CgLaptop />,
              label: <Link to={`/`}>Başqa</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            position: 'sticky',
            top: 0,
            backdropFilter: 'blur(8px)',
            background: 'rgba(255, 255, 255, .5)',
            marginLeft: collapsed ? 0 : '200px',
          }}
        >
          <Button
            type="text"
            icon={<TbMenu2 />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
           style={{
            margin: `0 0 0 ${collapsed ? 0 : '200px'}`,
            // background: '#ebedf0',
            borderRadius: collapsed ? 0 : 20,
            transition: 'all .25s',
            padding: '24px 32px',
            minHeight: 360,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
