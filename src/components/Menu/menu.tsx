import React, {createContext, useState} from "react";
import classNames from "classnames";

type MenuMode = 'horizontal'|'vertical';
type SelectCallback = (selectIndex:number)=>void
export interface MenuProps {
  defaultIndex?:number,
  className?:string,
  mode?:MenuMode,
  style?:React.CSSProperties,
  onSelect?:SelectCallback
}
interface IMenuContext {
  index:number
  onSelect?:SelectCallback
}

export const MenuContext = createContext<IMenuContext>({index:0});

const Menu:React.FC<MenuProps> = (props)=>{
  const {defaultIndex,className,style,mode,onSelect,children} = props;
  const [currentActive,setCurrentActive] = useState<number>(defaultIndex||0)
  const classes = classNames('viking-menu',className,{
    'menu-vertical':mode==="vertical",
  })
  const handleClick = (index:number)=>{
    setCurrentActive(index);
    if (onSelect){
      onSelect(index)
    }
  }
  const passedContext:IMenuContext = {
    index:currentActive,
    onSelect:handleClick
  }
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {
          children
        }
      </MenuContext.Provider>
    </ul>
  )
}
Menu.defaultProps = {
  defaultIndex:0,
  mode:"horizontal"
}
export default Menu
