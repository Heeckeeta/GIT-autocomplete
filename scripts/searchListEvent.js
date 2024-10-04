import clearSearchList from './clearSearchList';
import setLi from './setLi';


export default function(){
    const searchList=document.querySelector('.search-list');
    const search=document.querySelector('.search');
    searchList.addEventListener('click',function(event){
        item=event.target;
        if (!item.classList.contains('search-list__item')) return;
        clearSearchList();
        setLi(item);
        search.value='';
    })
}