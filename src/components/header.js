function createHeader() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    const links = [
        { href: 'index.html', text: 'Home' },
        { href: 'about.html', text: 'About' },
        { href: 'projects.html', text: 'Projects' },
        { href: 'contact.html', text: 'Contact' }
    ];

    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(nav);
    document.body.insertBefore(header, document.body.firstChild);
}

export default createHeader;