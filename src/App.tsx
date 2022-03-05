import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import ScrollComponent from "./components/ScrollComponent";
function App() {
  return (
    <div className="App">
      <ScrollComponent dataList={[]} height={200} max={20}/>
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
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
