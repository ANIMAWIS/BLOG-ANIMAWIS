class MobileNavbar{
constructor(mobilemenu){
this.mobileMenu = document.querySelector(mobilemenu);
this.navList = document.querySelector(navList);
this.navLinks = document.querySelectorAll(navLinks);
this.activeClass= "active";

this.handleClick = this.handleClick.bind();
}
handleClick(){
    console.log(this);
    this.navList.classlist.toggle(this.activeClass);
}
addClickEvent() {
this.mobileMenu.addEventListener("click",()=> console.log(funcionou))
}
init(){
    if (this.mobileMenu) {
        this.addClickEvent();
    }
return this
}
}
const mobileNavbar =  new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();
