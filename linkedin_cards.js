(function() {
  function init() {
    const html = `
      <div id="li-card">
        <button id="li-close">✕</button>
        <div class="li-banner">
          <img src="https://aimediafy.github.io/mediafy-chatbot/BanerLinkedIn.png" alt="" onerror="this.style.display='none'"/>
        </div>
        <div class="li-body">
          <div class="li-avatar-wrap">
            <img class="li-avatar" src="https://aimediafy.github.io/mediafy-chatbot/ProfiloweLinkedIn.png" alt="Jerzy Niewiadowski" onerror="this.src='https://ui-avatars.com/api/?name=Jerzy+Niewiadowski&background=2563eb&color=fff&size=80'"/>
          </div>
          <div class="li-name">Jerzy Niewiadowski</div>
          <div class="li-title">Co-Founder Mediafy</div>
          <div class="li-sub">Wdrażamy Automatyzacje i Szkolenia AI dla Liderów Rynku</div>
          <div class="li-location">📍 Poznań, Polska</div>
          <a class="li-btn" href="https://www.linkedin.com/in/jerzy-mediafy/" target="_blank">Obserwuj na LinkedIn</a>
        </div>
      </div>

      <div id="li-tab">
        <img id="li-tab-avatar" src="https://aimediafy.github.io/mediafy-chatbot/ProfiloweLinkedIn.png" alt="J" onerror="this.src='https://ui-avatars.com/api/?name=Jerzy&background=2563eb&color=fff&size=40'"/>
        <span>Jerzy · LinkedIn</span>
      </div>

      <div id="mac-card">
        <button id="mac-close">✕</button>
        <div class="li-banner">
          <img src="https://aimediafy.github.io/mediafy-chatbot/BanerLinkedIn.png" alt="" onerror="this.style.display='none'"/>
        </div>
        <div class="li-body">
          <div class="li-avatar-wrap">
            <img class="li-avatar" src="https://aimediafy.github.io/mediafy-chatbot/maciejf.png" alt="Maciej Fidor" onerror="this.src='https://ui-avatars.com/api/?name=Maciej+Fidor&background=2563eb&color=fff&size=80'"/>
          </div>
          <div class="li-name">Maciej Fidor</div>
          <div class="li-title">CEO at Mediafy</div>
          <div class="li-sub">Automatyzacje AI | SaaS</div>
          <div class="li-location">📍 Poznań, Polska</div>
          <a class="li-btn" href="https://www.linkedin.com/in/maciej-fidor-100850298/" target="_blank">Obserwuj na LinkedIn</a>
        </div>
      </div>

      <div id="mac-tab">
        <img id="mac-tab-avatar" src="https://aimediafy.github.io/mediafy-chatbot/maciejf.png" alt="M" onerror="this.src='https://ui-avatars.com/api/?name=Maciej&background=2563eb&color=fff&size=40'"/>
        <span>Maciej · LinkedIn</span>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', html);

    const liCard  = document.getElementById('li-card');
    const liTab   = document.getElementById('li-tab');
    const liClose = document.getElementById('li-close');
    const macCard  = document.getElementById('mac-card');
    const macTab   = document.getElementById('mac-tab');
    const macClose = document.getElementById('mac-close');

    function hideJerzy() {
      liCard.classList.remove('visible');
      liCard.classList.add('hiding');
    }
    function showJerzy() {
      hideMaciej();
      liCard.classList.remove('hiding');
      liCard.classList.add('visible');
    }
    function hideMaciej() {
      macCard.classList.remove('visible');
      macCard.classList.add('hiding');
    }
    function showMaciej() {
      hideJerzy();
      macCard.classList.remove('hiding');
      macCard.classList.add('visible');
    }

    liClose.addEventListener('click', hideJerzy);
    liTab.addEventListener('click', showJerzy);
    macClose.addEventListener('click', hideMaciej);
    macTab.addEventListener('click', showMaciej);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
