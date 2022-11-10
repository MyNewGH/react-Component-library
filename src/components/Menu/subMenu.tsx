import React, {FunctionComponentElement, useContext, useState} from "react";
import {MenuContext} from "./menu";
import classNames from "classnames";
import {MenuItemProps} from "./menuItem";

export interface SubMenuProps{
  index?:string,
  title:string,
  className?:string
}
const SubMenu:React.FC<SubMenuProps> = ({index,title,className,children}) => {
  const context = useContext(MenuContext);
  const openSubMenu = context.defaultOpenSubMenus as string[];
  const isOpen = (index && context.mode==="vertical") ? openSubMenu.includes(index):false
  const [open,setOpen] = useState<boolean>(isOpen)
  const classes = classNames('menu-item submenu-item',className,{
    'is-active':context.index ===index
  })
  const handleClick = (event:React.MouseEvent)=>{
    event.preventDefault();
    setOpen(!open)
  }
  let timer:any;
  const handleMouse = (event:React.MouseEvent,toggle:boolean)=>{
    clearTimeout(timer);
    event.preventDefault()
    timer = setTimeout(()=>{
      setOpen(toggle)
    },300)
  }

  const clickEvent = context.mode ==="vertical"?{onClick:handleClick}:{};
  const mouseEvent = context.mode === "horizontal"?{
    onMouseEnter:(e:React.MouseEvent)=>{handleMouse(e,true)},
    onMouseLeave:(e:React.MouseEvent)=>{handleMouse(e,false)}

  }:{}
  const renderChildren = () => {
    const subMenuClass = classNames('viking-submenu',{
      'menu-opened':open
    })
    const childrenComponent = React.Children.map(children,(child,i)=>{
      const childrenElement = child as FunctionComponentElement<MenuItemProps>;
      if (childrenElement.type.displayName==="MenuItem"){
        return React.cloneElement(childrenElement,{
          index:`${index}-${i}`
        });
      }else {
        console.error('Warning: Menu has a child which is not a MenuItem component')
      }
    })
    return <ul className={subMenuClass}>
      {childrenComponent}
    </ul>
  }
  return (<li key={index} className={classes} {...mouseEvent}>
    <div className="submenu-title" {...clickEvent}>{title}</div>
    {
      renderChildren()
    }
  </li>)
}
SubMenu.displayName = 'SubMenu'
export default SubMenu;
