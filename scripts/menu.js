const root = "/WSOA3028A_2559188";

const menuItems = [
    { name: "Home", href: root + "/index.html" },
    { name: "Blogs", href: `${root}/Weekly_Blogs/Blogs.html` },
    { name: "Essays", href: `${root}/Essays/Essays.html` },
    { name: "Portfolio", href: `${root}/Portfolio/Portfolio.html` },
    { name: "Design", href: `${root}/Designs/Designs.html` },
    { name: "Profile", href: `${root}/Profile/Profile.html`},
]
export function initialise(currentPage) {
    const nav = document.querySelector("header > nav")
    const ul = document.createElement("ul")
    for (let menuItem of menuItems) {
        const li = document.createElement("li")
        if (currentPage != menuItem.name) {
            const a = document.createElement("a")
            a.innerText = menuItem.name
            a.setAttribute("href", menuItem.href)
            li.appendChild(a)
        } else { li.innerText = menuItem.name }
        ul.appendChild(li)
    }
    nav.appendChild(ul)
}