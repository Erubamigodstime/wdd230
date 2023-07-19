let index = 0;
function slider2() {
    setTimeout(slider2, 1400);    
    let photo;
    const pics = document.querySelectorAll('#bl');
    for (photo = 0; photo  < pics.length;photo ++) {
        pics[photo].style.display="none";        
    }
    index++
    if (index > pics.length) {
        index = 1
    }
    pics[index -1].style.display="block";
}

slider2();
