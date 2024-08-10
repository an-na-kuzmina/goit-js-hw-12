import{a as g,S as L,i as u}from"./assets/vendor-D1eTGYtO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const w="45094869-2592a7d622688fe6b4ce663f6";async function b(t,s=1,a=15){try{return(await g.get("https://pixabay.com/api/",{params:{key:w,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:a}})).data}catch(o){throw new Error(o.response?o.response.data:o.message)}}function f(t){const s=document.querySelector(".list"),a=new L(".card a",{inlineStyles:!1,captionsData:"alt",captionDelay:250,disableScroll:!0}),o=t.hits.map(e=>`
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
  `).join("");s.insertAdjacentHTML("beforeend",o),a.refresh()}function c(t){u.error({title:"❌",messageColor:"white",backgroundColor:"#E25757",position:"topRight",message:`${t}`})}function v(){const t=document.querySelector(".list");t.innerHTML=""}const S=document.querySelector("#search-form"),m=document.querySelector("#search-input"),h=document.querySelector("#loader"),i=document.querySelector(".load-more-btn");let n=1,d=15,p="";S.addEventListener("submit",async t=>{t.preventDefault(),v(),h.classList.remove("hidden"),p=m.value.trim(),n=1,i.classList.add("hidden"),await y()});i.addEventListener("click",async()=>{n++,await y()});async function y(){if(h.classList.add("hidden"),p===""){c("Please enter a search query.");return}try{const t=await b(p,n,d);if(t.total===0)c("Sorry, there are no images matching your search query. Please try again!");else{if(n>1){f(t);const s=document.querySelector(".list").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}else f(t);if(t.hits.length<d)return i.classList.add("hidden"),u.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});if(t.totalHits>n*d)i.classList.remove("hidden");else return i.classList.add("hidden"),u.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}}catch(t){c(t.message),h.classList.add("hidden")}finally{m.value=""}}
//# sourceMappingURL=commonHelpers.js.map
