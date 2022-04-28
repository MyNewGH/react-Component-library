import React, {useContext} from "react";
import classNames from "classnames";
import {MenuContext} from "./menu";

export interface MenuItemProps {
  index:number,
  className:string,
  style:React.CSSProperties,
  disabled:boolean
}
const MenuItem:React.FC<Partial<MenuItemProps>> = (props)=>{
  const {index,className,style,disabled,children} = props;
  const menuContext = useContext(MenuContext);

  const classes = classNames('menu-item',className,{
    'is-disabled':disabled,
    'is-active':menuContext.index===index
  })
  const handleClick = () => {
    if (menuContext.onSelect&&!disabled){
      menuContext.onSelect(index as number)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {
        children
      }
    </li>
  )
}

export default MenuItem
