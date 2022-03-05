import {useEffect, useRef, useState} from "react";

/*
基于IntersectionObserver无限滚动列表的hooks兼容问题可以安装（IntersectionObserver polyfill这个包）
* len 渲染数据的长度
* option ：IntersectionObserverInit api的option选择的配置
* MAX 虚拟列表存在最大的条数
* callbackFun 可自定义配置重写IntersectionObserver的callback
* */

export default function useScroll<T extends HTMLElement>(
  len:number,
  MAX=15,
  option?:IntersectionObserverInit,
  callbackFun?:IntersectionObserverCallback
) {
  const [start,setStart] = useState<number>(0);
  const [observes,setObserves] = useState<IntersectionObserver>();
  const [end,setEnd] = useState<number>(MAX);
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const $isTopScroll = useRef<T>(null);//向上滚动
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const $isButtonScroll = useRef<T>(null)//向下滚动
  useEffect(() => {
    initIntiateScrollObserver();
    return () => {
      removeObserve()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[start, end])
  const initIntiateScrollObserver = ()=>{
      const io = new IntersectionObserver(callbackFun||callback,option)
      if ($isTopScroll.current){
        io.observe($isTopScroll.current)
      }
      if ($isButtonScroll.current){
        io.observe($isButtonScroll.current)
      }
      setObserves(io)
  }
  const callback:IntersectionObserverCallback = (entries)=>{
    entries.forEach((item,index)=>{
      if (item.isIntersecting){
        /*向下滚动*/
        if (item.target.id==="bottom"){
          const maxStart = len- MAX;
          const newStart = (end-5)<=maxStart?end-5:maxStart;
          setStart(newStart);
          setEnd(newStart+MAX===len?len:newStart+MAX)
        }
        if (item.target.id==="top"){
          const newStart = start===0?0:(start-10>0?start-10:0);
          setStart(newStart);
          setEnd(newStart+MAX);
          console.log(MAX)
        }
      }
    })
  }
  const removeObserve = ()=>{
    if (observes){
      observes.unobserve(<HTMLElement>$isTopScroll.current)
      observes.unobserve(<HTMLElement>$isButtonScroll.current)
    }
  }
  //处理头尾节点
  const getRefDom =(index:number,lastIndex:number)=>{
    if (index===0) {
      if ($isTopScroll.current){
        $isTopScroll.current.id = 'top'
      }
      return $isTopScroll
    };

    if (lastIndex) {
      if ($isButtonScroll.current){
        $isButtonScroll.current.id = 'bottom'
      }
      return $isButtonScroll
    };

    return  null
  }
  return {
    getRefDom,
    start,
    end,
  }
}
