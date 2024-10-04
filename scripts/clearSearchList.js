export default function(){
    const list=document.getElementsByClassName('search-list__item');
    while(list.length){
        list[0].remove();
    }
}