import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import ScrollComponent from "./components/ScrollComponent";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import type { ParseOptions, StringifyOptions } from 'query-string';
function App(props={
}) {
  return (
    <div className="App">
      <Menu defaultIndex='0' onSelect={(index)=>{alert(index)}} mode="vertical" defaultOpenSubMenus={['1']}>
        <MenuItem>
          active
        </MenuItem>
          <SubMenu title="xxx">
              <MenuItem>
                5155
              </MenuItem>
            <MenuItem>
              5155
            </MenuItem>
          </SubMenu>
        <MenuItem disabled>
          disabled
        </MenuItem>
        <MenuItem>
          sdfs
        </MenuItem>
      </Menu>
      {/*<ScrollComponent dataList={[]} height={200} max={20}/>*/}
      {/*<header className="App-header">*/}
      {/*  <Button>nihao</Button>*/}
      {/*  <Button disabled={true}>nihao</Button>*/}

      {/*  <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>*/}
      {/*    small*/}
      {/*  </Button>*/}
      {/*  <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>*/}
      {/*    small*/}
      {/*  </Button>*/}
      {/*  <Button btnType={ButtonType.Link} href="https://www.baidu.com">*/}
      {/*    去百度*/}
      {/*  </Button>*/}
      {/*  <Button btnType={ButtonType.Link} disabled={true} href="https://www.baidu.com">*/}
      {/*    去百度1*/}
      {/*  </Button>*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
      {/*  </p>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
