function home(){
    let frame = document.getElementById("frame")
    frame.src = "subpages/home.html"
    rename("Home");
}

function rename(text) {
    document.title = 'Lambda Core ';
    let chars = text.split('');

    chars.forEach((char, index) => {
        setTimeout(() => {
            document.title += char;
        }, 150 * index); // 150ms per character
    });
}

function swap(btn){
    let frame = document.getElementById("frame");
    let page = btn.innerText; // keep original case if you want
    frame.src = "subpages/" + page.toLowerCase() + ".html";
    rename(page); // animate the page name in the title
}
