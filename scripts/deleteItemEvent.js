export default function(){
    const saved=document.querySelector('.saved');
    saved.addEventListener('click',function(event){
        let close=event.target;
        close=close.closest('.close');
        if (!close) return;
        const parent=close.parentElement;
        parent.remove();
    })
}