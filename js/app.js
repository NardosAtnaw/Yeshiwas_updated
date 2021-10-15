const linksContainer = document.querySelector(".links-container");
const nav = document.querySelector(".nav");
const links = document.querySelectorAll('.link')
const logo = document.querySelector(".logo");
const menu = document.querySelector(".menu");
const sidenav = document.querySelector(".links-container");
const close = document.querySelector(".close-btn");
menu.addEventListener("click", () => {
  sidenav.classList.add("show-nav");
  links.forEach(link => {
    link.style.color = '#10284e'
})
});
close.addEventListener("click", () => {
  sidenav.classList.remove("show-nav");
});

if(window.innerWidth > 1152){
  console.log("scroll");
  console.log(window.innerWidth);
  window.addEventListener("scroll", () => {
    const navheight = nav.getBoundingClientRect().height;
    const scorllheight = window.pageYOffset;
    const upperText = document.querySelector('.upper-text')
    const upperImg = document.querySelector(".upper-img")
    if (scorllheight > navheight) {
      menu.innerHTML = `<img src="./Image/menu3.svg" class="ham" alt="" />`;

      logo.innerHTML = `<a href="./index.html"><img src="./Image/logo.svg" alt="Yeshiwas Logo" /> </a>`;
      nav.classList.add("fixed-nav");
      links.forEach(link => {
          link.style.color = '#10284e'
      })
      upperText.style.color = '#10284e'
      upperImg.setAttribute('src',"./Image/call3.svg")

    } else {
      logo.innerHTML = `<a href="./index.html"><img src="./Image/logo1.svg" alt="Yeshiwas Logo" />  </a>`;
      nav.classList.remove("fixed-nav");
      menu.innerHTML = ` <img src="./Image/menu.svg" class="ham" alt="" />`;
      links.forEach(link => {
          link.style.color = 'white'
      })
      upperText.style.color = 'white'
      upperImg.setAttribute('src',"./Image/call1.svg")
    }
  });
}else{
  window.addEventListener("scroll", () => {
    const navheight = nav.getBoundingClientRect().height;
    const scorllheight = window.pageYOffset;
    const upperText = document.querySelector('.upper-text')
    const upperImg = document.querySelector(".upper-img")
    if (scorllheight > navheight) {
      menu.innerHTML = `<img src="./Image/menu3.svg" class="ham" alt="" />`;

      logo.innerHTML = `<a href="./index.html"><img src="./Image/logo.svg" alt="Yeshiwas Logo" /> </a>`;
      nav.classList.add("fixed-nav");
      upperText.style.color = '#10284e'
      upperImg.setAttribute('src',"./Image/call3.svg")

    } else {
      logo.innerHTML = `<a href="./index.html"><img src="./Image/logo1.svg" alt="Yeshiwas Logo" />  </a>`;
      nav.classList.remove("fixed-nav");
      menu.innerHTML = ` <img src="./Image/menu.svg" class="ham" alt="" />`;
      upperText.style.color = 'white'
      upperImg.setAttribute('src',"./Image/call1.svg")
    }
  });
}

const client1 = document.querySelector('.client1')
const client2 = document.querySelector('.client2')

client1.addEventListener('mouseover', () =>{
  client1.setAttribute('src','./Image/client3.svg')
})
client1.addEventListener('mouseleave', () =>{
    client1.setAttribute('src','./Image/client1.svg')
  })

  client2.addEventListener('mouseover', () =>{
    client2.setAttribute('src','./Image/clients4.svg')
  })
  client2.addEventListener('mouseleave', () =>{
      client2.setAttribute('src','./Image/clients2.svg')
    })



