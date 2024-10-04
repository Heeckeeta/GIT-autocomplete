export default async function(word){
    let response=await fetch(`https://api.github.com/search/repositories?q=${word}&per_page=5&page=1`);
    response=await response.json();
    const items=response.items.map(e=>({name: e.name, owner: e.owner.login, stars: e.stargazers_count }));
    let fragment=[];
    items.forEach(e=>{
        const item=document.createElement('div');
        item.classList.add('search-list__item');
        item.textContent=e.name;
        item.setAttribute('data-name',e.name);
        item.setAttribute('data-owner',e.owner);
        item.setAttribute('data-stars',e.stars);
        fragment.push(item);
    })
    return fragment;
}