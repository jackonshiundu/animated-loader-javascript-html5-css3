const header=document.getElementById('header')
const title=document.getElementById('title')
const exerpt=document.getElementById('exerpt')
const profile=document.getElementById('profile-img')
const name=document.getElementById('name')
const date=document.getElementById('date')

const animated_bgs=document.querySelectorAll('.animated-bg')
const animated_bg_text=document.querySelectorAll('.animated-bg-text')

setTimeout(getData,3000)

//function to show data
function getData(){
    header.innerHTML='<img src="controller.png" alt="">';
    title.innerHTML='Lorem ipsum dolor sit amet.';
    exerpt.innerHTML='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, eaque';
    profile.innerHTML=' <img src="avatar1.jpg" alt="">';

    name.innerHTML='Lavin Aloo';
    date.innerHTML='Oct 08,2020';

    animated_bgs.forEach(bg=>bg.classList.remove('animated-bg'))
    animated_bg_text.forEach(bg=>bg.classList.remove('animated-bg-text'))
}
