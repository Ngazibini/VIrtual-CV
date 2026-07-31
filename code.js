const text = "Cybersecurity Enthusiast | Full Stack Developer | Future Cybersecurity Analyst";

let index = 0;

function typeEffect() {

    const typing = document.getElementById("typing");

    if (typing && index < text.length) {

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 60);
    }

}

function showSection(id){

    const sections = document.querySelectorAll("section");

    sections.forEach(section=>{

        section.style.display="none";

    });

    const selected=document.getElementById(id);

    if(selected){

        selected.style.display="flex";

        selected.style.flexDirection="column";

        selected.style.justifyContent="center";

    }

}

window.onload=function(){

    showSection("home");

    typeEffect();

}