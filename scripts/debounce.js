export default (fn, debounceTime) => {
    let intervalid;
    return function(...args){
        clearTimeout(intervalid);
        intervalid=setTimeout(()=>fn.call(this,...args),debounceTime);
    }
};