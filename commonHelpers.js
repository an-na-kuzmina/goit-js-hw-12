import{a as y,S as L,i as h}from"./assets/vendor-D1eTGYtO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const b="45094869-2592a7d622688fe6b4ce663f6";async function v(t,s=1,i=15){try{return(await y.get("https://pixabay.com/api/",{params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:i}})).data}catch(o){throw new Error(o.response?o.response.data:o.message)}}function p(t){const s=document.querySelector(".list"),i=new L(".card a",{inlineStyles:!1,captionsData:"alt",captionDelay:250,disableScroll:!0}),o=t.hits.map(e=>`
    <li class="card">
      <a class="card-link" href="${e.largeImageURL}">
        <img class="card-image" src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="info-text">
        <ul class="card-list">
          <li class="card-list-li">
            <h3>likes</h3>
            <p>${e.likes}</p>
          </li>
          <li class="card-list-li">
            <h3>views</h3>
            <p>${e.views}</p>
          </li>
          <li class="card-list-li">
            <h3>comments</h3>
            <p>${e.comments}</p>
          </li>
          <li class="card-list-li">
            <h3>downloads</h3>
            <p>${e.downloads}</p>
          </li>
        </ul>
      </div>
    </li>
  `).join("");s.insertAdjacentHTML("beforeend",o),i.refresh()}function c(t){h.error({title:"❌",messageColor:"white",backgroundColor:"#E25757",position:"topRight",message:`${t}`})}function w(){const t=document.querySelector(".list");t.innerHTML=""}const S=document.querySelector("#search-form"),f=document.querySelector("#search-input"),d=document.querySelector("#loader"),a=document.querySelector(".load-more-btn");let n=1,u=15,m="";S.addEventListener("submit",async t=>{t.preventDefault(),n=1,m=f.value.trim(),w(),a.classList.add("hidden"),await g()});a.addEventListener("click",()=>{n++,g()});async function g(){if(d.classList.remove("hidden"),m===""){c("Please enter a search query."),d.classList.add("hidden");return}try{const t=await v(m,n,u);if(t.total===0)c("Sorry, there are no images matching your search query. Please try again!");else{if(n>1){const s=document.querySelector(".list").getBoundingClientRect().height;p(t);const i=document.querySelector(".list").getBoundingClientRect().height;console.log(document.querySelector(".list").getBoundingClientRect()),window.scrollBy({top:(i-s)*.6,behavior:"smooth"})}else p(t);if(t.hits.length<u)return a.classList.add("hidden"),h.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});if(t.totalHits>n*u)a.classList.remove("hidden");else return a.classList.add("hidden"),h.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}}catch(t){c(t.message)}finally{d.classList.add("hidden"),f.value=""}}
//# sourceMappingURL=commonHelpers.js.map
