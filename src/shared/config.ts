const serverHost=import.meta.env.VITE_SERVER_HOST?.trim()||window.location.hostname;

export const SITE_CONFIG={server:{name:'GTAMINE',host:serverHost,port:25565,version:'1.21.11'},downloads:{windows:'https://legacylauncher.ru/ru',android:'https://play.google.com/store/apps/details?id=net.kdt.pojavlaunch',ios:'https://github.com/AngelAuraMC/Amethyst-iOS'}} as const;
