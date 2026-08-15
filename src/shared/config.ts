/*
 *   Copyright (c) 2026 
 *   All rights reserved.
 */
const refererWhitelist=(import.meta.env.VITE_REFERER_WHITELIST||'').split(',').map((value:string)=>value.trim().toLowerCase()).filter(Boolean);

function matchesWildcard(value:string,pattern:string){
  const expression=new RegExp(`^${pattern.split('*').map((part:string)=>part.replace(/[.+?^${}()|[\]\\]/g,'\\$&')).join('.*')}$`);
  return expression.test(value);
}

function normalizeHost(value:string){
  try{
    const url=new URL(value.includes('://')?value:`https://${value}`);
    const host=url.host.toLowerCase();
    return refererWhitelist.some((pattern:string)=>matchesWildcard(url.hostname.toLowerCase(),pattern)||matchesWildcard(host,pattern))?host:undefined;
  }catch{return undefined}
}

function getQueryReferer(){return normalizeHost(new URLSearchParams(window.location.search).get('referer')||'')}
function getRefererHost(){
  if(!document.referrer)return undefined;
  try{return new URL(document.referrer).host||undefined}catch{return undefined}
}
const queryReferer=getQueryReferer();
const serverHost=queryReferer||import.meta.env.VITE_SERVER_HOST?.trim()||getRefererHost()||window.location.hostname;

export function withReferer(href:string){
  if(!queryReferer||/^(?:[a-z]+:)?\/\//i.test(href)||href.startsWith('#'))return href;
  const separator=href.includes('?')?'&':'?';
  return `${href}${separator}referer=${encodeURIComponent(queryReferer)}`;
}

export const SITE_CONFIG={server:{name:'GTAMINE',host:serverHost,port:25565,version:'1.21.11'},downloads:{windows:'https://legacylauncher.ru/ru',android:'https://play.google.com/store/apps/details?id=net.kdt.pojavlaunch',ios:'https://www.google.com/ai?q=как+установить+amethyst+minecraft+java+edition+client+на+ios+и+зайти+на+'+ serverHost +'?'}} as const;
