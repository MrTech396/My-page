  import {button, intro, mainContent, mySkills, socailContent} from '/content.js';
  import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
  
  function renderNavigationBtn(btns, intro) {
    let button = '';
    btns.forEach((btn) => {
      button += `
        <button class="${btn.btnClass}">
          <img class="${btn.imgClass}"src="${btn.image}" />
        </button>
      `
    });
    
    document.querySelector('.navigation').innerHTML = button;
    
    document.querySelector('.introduction').innerHTML = intro;
  }
  
  function renderMainContent(contents, mySkills) {
    let mainContent = '';
    let skills = '';
    
    contents.forEach((content) => {
      mainContent += `
        <div class="my-offer">
          ${content.subHeading}
          <img class="main-img"src="${content.img}" />
         
          <p class="note">
            ${content.note}
          </p>
        </div>
      `
    });
    
    mySkills.forEach((skill) => {
      skills += `
        <div class="inner-con">
          <p>${skill.language}</p>
          <p class="percent">${skill.rating}%</p>
        </div>
      `;
    });
    
    document.getElementById('mainContent').innerHTML = mainContent + `<h3>My skills :</h3>`;
    
    document.querySelector('.skills').innerHTML = skills;
  }
  
  function renderSocialInfo(contents) {
    const followItems = contents
      .filter((contents) => contents.type === 'follow')
      .map((items1) => `
        <a href="${items1.link}">
          <p class="social-name">
            <img class="social-img" src="${items1.socialIcon}" />
          ${items1.name}
          </p>
          <img class="left-angle-img" src="${items1.rightIcon}" />
        </a>
      `).join('');
    
    const subscribeItems = contents
      .filter((contents) => contents.type === 'subscribe')
      .map((items2) => `
        <a href="${items2.link}">
          <p class="social-name">
            <img class="social-img" src="${items2.socialIcon}" />
            ${items2.name}
          </p>
          <img class="left-angle-img" src="${items2.rightIcon}" />
        </a>
      `).join('');
    
    const contactItems = contents
      .filter((contents) => contents.type1 === 'contact')
      .map((items3) => `
        <a href="${items3.link}" target="_blank">
          <p class="social-name">
            <img class="social-img" src="${items3.socialIcon}" />
            ${items3.name}
          </p>
          <img class="left-angle-img" src="${items3.rightIcon}" />
        </a>
      `).join('');
    
    const currentYear = dayjs().year();
    
    document.getElementById('follow')
      .innerHTML = `<h2>Follow me :</h2>${followItems}`;
    
    document.getElementById('subscribe')
      .innerHTML = `<h2>Subcribe :</h2>${subscribeItems}`;
    
    document.getElementById('contact')
      .innerHTML = `<h2>Contact me :</h2>${contactItems}`;
    
    document.querySelector('.year')
      .innerHTML = `&copy; ${currentYear} by Mr-Tech @ccp.com`;
  }
  
  renderNavigationBtn(button, intro);
  renderMainContent(mainContent, mySkills);
  renderSocialInfo(socailContent);