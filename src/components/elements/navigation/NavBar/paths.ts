import { ISubNav } from '../SubNav/SubNav';

const NAV_LINKS: ISubNav[] = [
  { label: 'Home', href: '/' },
  // {
  //   label: 'Menu',
  //   href: '/menu',
  // },
  // {
  //   label: 'About',
  //   subLabel: 'About us',
  // },
  {
    label: 'Receipts',
    href: '/balances',
    children: [
      {
        label: 'SPL',
        subLabel: 'Get your SPL balances',
        href: '/balances/spl',
        logo: 'token',
      },
      {
        label: 'NFT',
        subLabel: 'Get your NFT balances',
        href: '/balances/nft',
        logo: 'pack',
      },
    ],
  },
  {
    label: 'Shopping Cart',
    href: '/nftMinter',
  },
  // {
  //   label: 'Contacts',
  //   href: '/contacts',
  // },
];

export default NAV_LINKS;
