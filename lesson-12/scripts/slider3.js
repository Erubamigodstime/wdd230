let dex = 0;
function slider3() {
    setTimeout(slider3, 1500);    
    let photos;
    const pic = document.querySelectorAll('#dl');
    for (photos = 0; photos  < pic.length;photos ++) {
        pic[photos].style.display="none";        
    }
    dex++
    if (dex > pic.length) {
        dex = 1
    }
    pic[dex -1].style.display="block";
}

slider3();
