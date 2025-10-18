function Footer() {
    return `
        <footer>
            <p>&copy; ${new Date().getFullYear()} Your Name. All rights reserved.</p>
            <ul>
                <li><a href="https://github.com/yourusername" target="_blank">GitHub</a></li>
                <li><a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a></li>
                <li><a href="https://twitter.com/yourusername" target="_blank">Twitter</a></li>
            </ul>
        </footer>
    `;
}

export default Footer;