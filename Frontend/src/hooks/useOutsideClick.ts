import React from "react";

export const useOutsideClick = (callback: Function) => {
    const ref: React.MutableRefObject<any>  = React.useRef();
  
    React.useEffect(() => {
      const handleClick = (event:Event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };
  
      document.addEventListener('click', handleClick, true);
  
      return () => {
        document.removeEventListener('click',  handleClick, true);
      };
    }, [ref]);
  
    return ref;
  };