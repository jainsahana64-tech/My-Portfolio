function contact(type) {
    if (type === 'email') {
        window.location.href = "mailto:sahana@example.com"; // change to your real email
    } else if (type === 'github') {
        window.open("https://github.com/yourgithub", "_blank");
    } else if (type === 'linkedin') {
        window.open("https://linkedin.com/in/yourlinkedin", "_blank");
    }
}
