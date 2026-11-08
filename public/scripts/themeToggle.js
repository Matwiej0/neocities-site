document.getElementById("themeToggle").addEventListener("click", function(){
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme;

    if (currentTheme === 'light') {
        newTheme = 'dark';
    } else {
        newTheme = 'light';
    }

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
})