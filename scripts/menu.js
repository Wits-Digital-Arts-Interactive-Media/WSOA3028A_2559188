const menuItems = [
    {name:"Home", href: "index.html"}, 
    {name:"Blog", href: "/blogs/index.html"},
    {name:"Portfolio", href: "/portfolio/index.html"},
    {name:"Profile", href: "/profile/index.html"},
    {name:"Design", href: "/design/index.html"},
]

export function initialise (currentPage) {
    const nav = document.querySelector ("header > nav")
    const ul = document.createElement ("ul")
    for (let menuItem of menuItems){
        const li = document.createElement ("li")
        if (currentPage != menuItems.name){
            const a = document.createElement ("a")
            a.innerText = menuItem.name
    
            a.setAttribute("href", menuItem.href)
            a.appendChild(a)
            ul.appendChild(li)
        } else {
            li.innerText = menuItem.name
        }
       
    }
    nav.appendChild(ul)
}