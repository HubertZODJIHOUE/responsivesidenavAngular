export  const navData= [
  {
    routeLink : "dashboard",
    icon: "fa-solid fa-house",
    label: 'Dashboard'
  },
  {
    routeLink : "products",
    icon: 'fa fa-shopping-cart',
    label: 'Products'
  } ,
  {
    routeLink : "coupens",
    icon: "fa fa-clone",
    label: 'Coupens'
  },
  {
    routeLink : "media",
    icon: "fa fa-camera",
    label: 'media'
  },
  {
    routeLink : "settings",
    icon: 'fa fa-wrench',
    label: 'Settings'
  }
]

export interface  sideNavToggle{
  screenWidth : number;
  collapsed : boolean;
}
