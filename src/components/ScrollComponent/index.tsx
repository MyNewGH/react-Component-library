import React, { useRef } from "react";
import useScroll from "../../hooks/useScroll";
import './index.css'
type ScrollComponentProps = {
  max?: number,
  dataList: any[],
  height: number
}
/*
* flag 是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
* */
let arr: { key: number; value: number | string; }[] = [];
for (let i = 0; i < 100; i++) {
  arr.push({
    key: i + 1,
    value: i + 1
  })
}
const ScrollComponent: React.FC<ScrollComponentProps> = ({ max, dataList, height }) => {
  const { getRefDom, start, end } = useScroll<HTMLLIElement>(dataList.length || arr.length, max, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });

  const updateList = (dataList.length ? dataList : arr).slice(start, end);
  return <ul style={{ position: "relative" }}>
    {
      updateList.map((item, index) => {
        const top = (height * (index + start)) + 'px';
        //首位节点绑定ref
        const ref = getRefDom(index, Number(index === updateList.length - 1))
        // const id = index===0?'top':(index===updateList.length-1?"bottom":'')
        return <li key={item.key} className="list" style={{ top }} ref={ref}>{item.value}</li>
      })
    }
  </ul>
}
export default ScrollComponent