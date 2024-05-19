// import {
//   Gamepad2,
//   Headphones,
//   Image,
//   LucideIcon,
//   Share2,
//   Shirt,
//   ShoppingCart,
//   Ticket,
// } from 'lucide-react';

export interface ISectionCardData {
  id: number;
  title: string;
  src: string;
  exp: string;
  snippetCount: number;
  progress: number;
  href?: string;
}

export interface IProjectSectionCardData {
  id: number;
  imageUrl?: string;
  icon?: string;
  title: string;
  techStack: string;
  href?: string;
}

export const projectCard: IProjectSectionCardData[] = [
  {
    id: 1,
    title: 'Crowdfunding Platform',
    techStack: 'Next.js , React,Thirdweb,Hardhat Solidity, Typescript',
    imageUrl: 'crowdfund.png',
    href: 'https://github.com/ayazahmed97/Crowdfunding',
  },
  {
    id: 1,
    title: 'Fun & Earn',
    techStack: 'Next.js,Typescript,HardHat,EtherJs,Tailwind CSS',
    imageUrl: 'play.png',
    href: 'https://github.com/ayazahmed97/FunandEarn',
  },
  {
    id: 2,
    title: 'Ai-NFT-Generator',
    techStack:
      'Next.js,React,ThirdWeb,Solidity,Typescript,   OpenAi Dalle.E 3',
    imageUrl: 'ainftgen.png',
    href: 'https://github.com/ayazahmed97/Ainftgenerator',
  },
  {
    id: 3,
    title: 'NFT-Marketplace',
    techStack:
      'NodeJs, Express, Mongoose, Next.js 13, Next Auth, React Hook Form, Typescript, Tailwind CSS',
    imageUrl: 'market.jpg',
    href: 'https://github.com/ayazahmed97/NFT-marketplace',
  },

];

export const moreProjects = [
  {
    id: 1,
    title: 'Ez Clothing',
    techStack: 'Next.js 13, Drizzle, PostgreSql, Docker, ShadCn',
    icon: 'shirt',
    href: 'https://github.com/nwaliaez/ezClothing',
  },
  {
    id: 2,
    title: 'Ethereum Lottery',
    techStack: 'Solidity, Ethers, Hardhat, Chai',
    icon: 'lottery',
    href: 'https://github.com/nwaliaez/HardhatLottery',
  },
  
  {
    id: 3,
    title: 'File Sharing App',
    techStack: 'Node js, Express, Web Sockets, WebRTC, ReactJs',
    icon: 'share',
    href: 'https://github.com/nwaliaez/filetransfer-webrtc',
  },

  {
    id: 4,
    title: 'Snake Game',
    techStack: 'Next.js 13, Tailwind CSS, Typescript',
    icon: 'game',
    href: 'https://snake-nwaliaez.vercel.app/',
  },
];
export const web3Cards: ISectionCardData[] = [
  {
    id: 1,
    title: 'Solidity',
    src: '/tech/web3/solidity.jfif',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: 'Hardhat',
    src: '/tech/web3/hardhat.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 6,
    title: 'Web3Js',
    src: '/tech/web3/web3js.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 7,
    title: 'EtherJs',
    src: '/tech/web3/ethersjs.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 3,
    title: 'Metamask',
    src: '/tech/web3/metamask.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 8,
    title: 'Remix IDE',
    src: '/tech/web3/remix.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 4,
    title: 'Chainlink',
    src: '/tech/web3/chainlink.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 5,
    title: 'Alchemy',
    src: '/tech/web3/alchemy.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 8,
    title: 'Thirdweb',
    src: '/tech/web3/thirdweb.jpg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 8,
    title: 'OpenZeppelin',
    src: '/tech/web3/openzeppelin.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 8,
    title: 'IPFS',
    src: '/tech/web3/ipfs.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 8,
    title: 'Geth',
    src: '/tech/web3/geth.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 8,
    title: 'Defi',
    src: '/tech/web3/defi.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
];

export const frontendCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'Html',
    src: '/tech/frontend/html.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: 'Css',
    src: '/tech/frontend/css.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 6,
    title: 'JavaScript',
    src: '/tech/frontend/javaScript.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 7,
    title: 'TypeScript',
    src: '/tech/frontend/typescript.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 3,
    title: 'React',
    src: '/tech/frontend/React.svg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 4,
    title: 'Nextjs',
    src: '/tech/frontend/next.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  // {
  //   id: 5,
  //   title: 'Alchemy',
  //   src: '/tech/web3/alchemy.png',
  //   exp: '1 day ago',
  //   snippetCount: 1128,
  //   progress: 70,
  // },
  // {
  //   id: 8,
  //   title: 'Thirdweb',
  //   src: '/tech/web3/thirdweb.jpg',
  //   exp: '1 day ago',
  //   snippetCount: 1128,
  //   progress: 70,
  // },
  // {
  //   id: 8,
  //   title: 'OpenZeppelin',
  //   src: '/tech/web3/openzeppelin.png',
  //   exp: '1 day ago',
  //   snippetCount: 1128,
  //   progress: 70,
  // },
];
// export const : ISectionCardData[] = [
//   {
//     id: 1,
//     title: 'HTML, CSS',
//     src: '/tech/frontend/htmlcss.jpeg',
//     exp: '1 day ago',
//     snippetCount: 1128,
//     progress: 90,
//   },
//   {
//     id: 2,
//     title: 'Tailwind',
//     src: '/tech/frontend/tailwind.jpg',
//     exp: '1 day ago',
//     snippetCount: 1128,
//     progress: 90,
//   },
//   {
//     id: 3,
//     title: 'Javascript, Typescript',
//     src: '/tech/frontend/jsts.jpeg',
//     exp: '1 day ago',
//     snippetCount: 1128,
//     progress: 85,
//   },
//   {
//     id: 4,
//     title: 'Reactjs',
//     src: '/tech/frontend/reactjs.jpg',
//     exp: '1 day ago',
//     snippetCount: 1128,
//     progress: 80,
//   },
//   // {
//   //   id: 5,
//   //   title: 'Nextjs 13',
//   //   src: '/tech/frontend/nextjs13.jpeg',
//   //   exp: '1 day ago',
//   //   snippetCount: 1128,
//   //   progress: 80,
//   // },
// ];

export const backendCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'NodeJs',
    src: '/tech/backend/nodejs.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 2,
    title: 'ExpressJs',
    src: '/tech/backend/express.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 3,
    title: 'Next Auth',
    src: '/tech/backend/nextauth.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  // {
  //   id: 3,
  //   title: 'Solidity',
  //   src: '/tech/backend/Solidity.png',
  //   exp: '1 day ago',
  //   snippetCount: 1128,
  //   progress: 90,
  // },
  // {
  //   id: 3,
  //   title: 'DenoJs',
  //   src: '/tech/backend/denojs.webp',
  //   exp: '1 day ago',
  //   snippetCount: 1128,
  //   progress: 60,
  // },
  
  // {
  //   id: 5,
  //   title: 'PHP',
  //   src: '/tech/backend/php.png',
  //   exp: '1 day ago',
  //   snippetCount: 1128,
  //   progress: 70,
  // },
];

export const databaseCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'MySQL',
    src: '/tech/database/mysql.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 2,
    title: 'MongoDB',
    src: '/tech/database/mongo.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  // {
  //   id: 3,
  //   title: 'Redis',
  //   src: '/tech/database/redis.jpeg',
  //   exp: '1 day ago',
  //   snippetCount: 1128,
  //   progress: 70,
  // },
  // {
  //   id: 4,
  //   title: 'PostgreSQL',
  //   src: '/tech/database/postgres.png',
  //   exp: '1 day ago',
  //   snippetCount: 1128,
  //   progress: 70,
  // },
  // {
  //   id: 5,
  //   title: 'Elastic Search',
  //   src: '/tech/database/elasticSearch.png',
  //   exp: '1 day ago',
  //   snippetCount: 1128,
  //   progress: 70,
  // },
];

export const devopsCards: ISectionCardData[] = [
  {
    id: 1,
    title: 'Docker',
    src: '/tech/devops/docker.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 2,
    title: 'Kubernetes',
    src: '/tech/devops/k8s.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 3,
    title: 'GIT',
    src: '/tech/devops/git.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 4,
    title: 'Jenkins',
    src: '/tech/devops/jenkins.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 5,
    title: 'Terraform',
    src: '/tech/devops/terraform.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 60,
  },
];



export const otherCards: ISectionCardData[] = [
  {
    id: 1,
    title: 'Rest API',
    src: '/tech/others/rest.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: 'SOAP API',
    src: '/tech/others/soap.jpg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 3,
    title: 'GraphQl',
    src: '/tech/others/graphql.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
];
