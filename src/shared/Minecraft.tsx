import type {AnchorHTMLAttributes,ButtonHTMLAttributes,ReactNode} from 'react';
import {withReferer} from './config';
import './style.css';
import './assets.css';
export function MCButton({children,className='',...p}:ButtonHTMLAttributes<HTMLButtonElement>){return <button className={`mc-button ${className}`} {...p}><span>{children}</span></button>}
export function MCLink({children,className='',href,...p}:AnchorHTMLAttributes<HTMLAnchorElement>){return <a className={`mc-button ${className}`} href={typeof href==='string'?withReferer(href):href} {...p}><span>{children}</span></a>}
export function Logo(){return <a className="brand-lockup" href="https://gtamine.com" aria-label="Перейти на gtamine.com"><img className="gtamine-brand" src={new URL('../assets/logo_2.png',import.meta.url).href} alt="GTAMINE"/></a>}
export function Panorama({children}: {children:ReactNode}){return <main className="panorama"><div className="panorama-bg" aria-hidden="true"/>{children}</main>}
