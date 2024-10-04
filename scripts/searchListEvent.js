import clearSearchList from './clearSearchList.js';
import setLi from './setLi.js';


export default function(){
    const searchList=document.querySelector('.search-list');
    const search=document.querySelector('.search');
    searchList.addEventListener('click',function(event){
        let item=event.target;
        if (!item.classList.contains('search-list__item')) return;
        clearSearchList();
        setLi(item);
        search.value='';
    })
}