import{_ as w,u as b,r as k,o as N,h as y,a,e as s,f as o,w as c,d as e,n as x,i as n,j as d,T as C,k as $,p as B,g as R}from"./index-b1ac3fe8.js";const ae="/assets/temp-a33a73d8.jpg",I="/assets/otley-space-logo-0c6e26c1.png",v="/assets/up-svg-fc36f38e.svg";const S={class:"flex flex-col items-center"},F={key:0,class:"w-4 -mt-1",src:v},T={class:"flex flex-col items-center"},V={key:0,class:"w-4 -mt-1",src:v},A={class:"flex flex-col items-center"},E={key:0,class:"w-4 -mt-1",src:v},H={__name:"NavBar",props:{homepage:{type:Boolean,default:!1}},setup(l){const i=l,p=b(),t=k(!i.homepage);var _=p.currentRoute.value.name;i.homepage&&window.addEventListener("scroll",r),N(()=>{i.homepage&&window.removeEventListener("scroll",r)});function u(h){return _===h}function r(){document.documentElement.scrollTop>0?t.value=!0:t.value=!1}return(h,ee)=>{const m=y("router-link");return a(),s("div",{class:x([{unpadded:t.value,padded:!t.value},"sticky top-0 bg-waves z-40 bg-otley-light-blue bg-repeat"])},[o(C,{appear:"",name:"opacity"},{default:c(()=>[e("div",{class:x([{slide:t.value,unslide:!t.value},"relative flex flex-row gap-5 text-3xl lg:text-4xl w-min place-content-center"])},[e("div",S,[o(m,{class:"m-0 p-0 transition ease-in-out delay-50 text-white hover:-translate-y-0.5 hover:scale-110 hover:text-otley-dark-blue duration-300",to:"/"},{default:c(()=>[n("Home")]),_:1}),u("Home")?(a(),s("img",F)):d("",!0)]),e("div",T,[o(m,{class:"m-0 p-0 transition ease-in-out delay-50 text-white hover:-translate-y-0.5 hover:scale-110 hover:text-otley-dark-blue duration-300",to:"/about"},{default:c(()=>[n("About")]),_:1}),u("About")?(a(),s("img",V)):d("",!0)]),e("div",A,[o(m,{class:"m-0 p-0 transition ease-in-out delay-50 text-white hover:-translate-y-0.5 hover:scale-110 hover:text-otley-dark-blue duration-300",to:"/contact"},{default:c(()=>[n("Contact")]),_:1}),u("Contact")?(a(),s("img",E)):d("",!0)])],2)]),_:1})],2)}}},se=w(H,[["__scopeId","data-v-7ba84c49"]]),f="/assets/right-arrow-218d6bf6.svg",j="/assets/facebook-c2f95595.svg",L="/assets/instagram-122e2b9f.svg",z="/assets/twitter-d7ca115a.svg";const g=l=>(B("data-v-3accd51a"),l=l(),R(),l),U={class:"max-w-full flex flex-col lg:flex-row items-center justify-left gap-10 lg:gap-60 py-5 lg:px-80 lg:py-10 bg-waves bg-otley-light-blue bg-repeat"},q=g(()=>e("img",{src:I,class:"w-60 lg:w-60"},null,-1)),D={class:"text-xl flex-row text-otley-dark-blue flex gap-20"},G={class:"flex flex-col"},J=g(()=>e("p",{class:"font-bold mb-3 underline"},"Links",-1)),K={class:"flex flex-row gap-1"},M={key:0,class:"w-3",src:f},O={class:"flex gap-1"},P={key:0,class:"w-3",src:f},Q={class:"flex gap-1"},W={key:0,class:"w-3",src:f},X=$('<div data-v-3accd51a><p class="font-bold mb-3 underline" data-v-3accd51a>Socials</p><a href="https://m.facebook.com/groups/908657096695235/" class="" data-v-3accd51a><div class="flex flex-row gap-1 items-center" data-v-3accd51a><img class="w-7" src="'+j+'" data-v-3accd51a><p data-v-3accd51a>Facebook</p></div></a><a href="https://www.instagram.com/otley_space/" class="" data-v-3accd51a><div class="flex flex-row gap-1" data-v-3accd51a><img class="w-7" src="'+L+'" data-v-3accd51a><p data-v-3accd51a>Instagram</p></div></a><div class="flex flex-row gap-1" data-v-3accd51a><img class="w-7" src="'+z+'" data-v-3accd51a><p data-v-3accd51a>Twitter</p></div></div>',1),Y=g(()=>e("div",{class:"flex flex-row text-lg text-otley-dark-blue"},[e("p",null,"made by"),e("a",{href:"https://github.com/BenCrowther64",class:"font-semibold"}," ben crowther")],-1)),Z={__name:"Footer",setup(l){var p=b().currentRoute.value.name;function t(_){return p===_}return(_,u)=>{const r=y("router-link");return a(),s("div",U,[q,e("div",D,[e("div",G,[J,e("div",K,[t("Home")?(a(),s("img",M)):d("",!0),o(r,{class:"m-0 p-0",to:"/"},{default:c(()=>[n("Home")]),_:1})]),e("div",O,[t("About")?(a(),s("img",P)):d("",!0),o(r,{class:"m-0 p-0",to:"/about"},{default:c(()=>[n("About")]),_:1})]),e("div",Q,[t("Contact")?(a(),s("img",W)):d("",!0),o(r,{class:"m-0 p-0",to:"/contact"},{default:c(()=>[n("Contact")]),_:1})])]),X]),Y])}}},oe=w(Z,[["__scopeId","data-v-3accd51a"]]);export{oe as F,se as N,I as _,ae as a};
