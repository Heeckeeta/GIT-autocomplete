import clearSearchList from './clearSearchList.js';
import getItems from './getItems.js';
import debounce from './debounce.js';


export default function(){
    const search=document.querySelector('.search');
    const searchList=document.querySelector('.search-list');
    function listener(){
        clearSearchList();
        let word=search.value.trim();
        if (!word) return;
        getItems(word).then(fragment=>{
            searchList.append(...fragment);
        });
    }
    const listenerDebounce=debounce(listener,400);
    search.addEventListener('keyup',listenerDebounce);
}