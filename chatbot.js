(function() {function init() {
    // HTML struktura obu chatbotów
    const html = `
        <!-- SPARTA CHATBOT (Pomarańczowy) -->
        <div id="sparta-root-container">
            <div class="sparta-welcome-badge" onclick="document.body.classList.add('show-widget');this.style.display='none';">
                <span class="material-symbols-outlined" style="font-size:18px;color:#F97316">sms</span>
                Przetestuj rozwiązanie RAG AGENT
            </div>
            
            <button class="chatbot-toggler">
                <span class="material-symbols-outlined">mode_comment</span>
                <span class="material-symbols-outlined">close</span>
            </button>
            
            <div class="chatbot-widget">
                <header class="widget-header">
                    <span class="material-symbols-outlined menu-icon">menu</span>
                    <div class="header-title">
                        <h1>Asystent SPARTA</h1>
                        <span class="demo-badge">DEMO</span>
                    </div>
                    <div class="profile-icon">S</div>
                </header>
                
                <!-- Panel kontaktowy SPARTA -->
                <div class="settings-panel">
                    <div style="display:flex;justify-content:space-between;color:#fff;border-bottom:1px solid #333;padding-bottom:10px">
                        <h3>Kontakt</h3>
                        <span class="material-symbols-outlined close-panel-icon" style="cursor:pointer">close</span>
                    </div>
                    <div style="margin-top:20px;display:flex;flex-direction:column;gap:24px">
                        <div style="display:flex;gap:16px">
                            <div class="icon-box" style="width:40px;height:40px;background:#2c2c2e;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#F97316;flex-shrink:0">
                                <span class="material-symbols-outlined">location_on</span>
                            </div>
                            <div>
                                <span style="color:#9da3ae;font-size:12px">Adres</span><br>
                                <span style="color:#fff;font-size:14px;line-height:1.5;display:block;margin-top:2px">
                                    SPARTA SP. Z O.O.<br>
                                    Bogucin, ul. Boczna 4<br>
                                    62-006 Kobylnica k/Poznania
                                </span>
                            </div>
                        </div>
                        <div style="display:flex;gap:16px">
                            <div class="icon-box" style="width:40px;height:40px;background:#2c2c2e;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#F97316;flex-shrink:0">
                                <span class="material-symbols-outlined">schedule</span>
                            </div>
                            <div>
                                <span style="color:#9da3ae;font-size:12px">Godziny otwarcia</span><br>
                                <span style="color:#fff">pon-pt 8.00-17.00</span>
                            </div>
                        </div>
                        <div style="display:flex;gap:16px">
                            <div class="icon-box" style="width:40px;height:40px;background:#2c2c2e;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#F97316;flex-shrink:0">
                                <span class="material-symbols-outlined">call</span>
                            </div>
                            <div>
                                <span style="color:#9da3ae;font-size:12px">Telefon</span><br>
                                <a href="tel:+48618150086" style="color:#fff;text-decoration:none">+48 61 815 00 86</a>
                            </div>
                        </div>
                        <div style="display:flex;gap:16px">
                            <div class="icon-box" style="width:40px;height:40px;background:#2c2c2e;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#F97316;flex-shrink:0">
                                <span class="material-symbols-outlined">mail</span>
                            </div>
                            <div>
                                <span style="color:#9da3ae;font-size:12px">Email</span><br>
                                <a href="mailto:bok@sparta.com.pl" style="color:#fff;text-decoration:none">bok@sparta.com.pl</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Panel koszyka SPARTA -->
                <div class="cart-panel">
                    <div style="display:flex;justify-content:space-between;color:#fff;border-bottom:1px solid #333;padding-bottom:10px">
                        <h3>Koszyk</h3>
                        <span class="material-symbols-outlined close-cart" style="cursor:pointer">close</span>
                    </div>
                    <div class="cart-items-container"></div>
                    <div class="cart-footer">
                        <div style="display:flex;justify-content:space-between;font-size:16px;font-weight:500">
                            <span>Razem:</span>
                            <span class="total-price" style="color:#F97316;font-weight:700">0.00 zł</span>
                        </div>
                        <button class="checkout-btn" style="width:100%;background:#F97316;color:#fff;border:none;padding:14px;border-radius:12px;margin-top:16px;cursor:pointer">
                            Złóż zamówienie
                        </button>
                    </div>
                </div>
                
                <!-- Główna treść SPARTA -->
                <main class="widget-content">
                    <div class="initial-content">
                        <div class="welcome-text">
                            <h2>Witaj! 👋</h2>
                            <p>Pomogę dobrać tobie odpowiedni samozamykacz</p>
                        </div>
                        <div class="action-chips">
                            <button class="chip" onclick="fillInput('sparta',this.innerText)">Jak dobrać samozamykacz?</button>
                            <button class="chip" onclick="fillInput('sparta',this.innerText)">Potrzebuję samozamykacza</button>
                            <button class="chip" onclick="fillInput('sparta',this.innerText)">Co to jest samozamykacz?</button>
                            <button class="chip" onclick="fillInput('sparta',this.innerText)">Godziny otwarcia firmy</button>
                        </div>
                    </div>
                    <ul class="chatbox"></ul>
                </main>
                
                <!-- Pole tekstowe SPARTA -->
                <div class="bottom-input-area">
                    <div class="input-container-dark">
                        <textarea class="chat-input-field" data-bot-id="sparta" placeholder="Jaki samozamykacz Cię interesuje?" rows="1"></textarea>
                        <div class="input-controls-row">
                            <button class="icon-btn-dark cart-trigger">
                                <span class="material-symbols-outlined">shopping_cart</span>
                                <span class="cart-badge" style="display:none">0</span>
                            </button>
                            <div style="display:flex;gap:10px;align-items:center">
                                <button class="pill-btn-outline" id="voice-btn-sparta">
                                    <span class="material-symbols-rounded">graphic_eq</span> Mów
                                </button>
                                <button class="send-btn" data-bot-id="sparta">
                                    <span class="material-symbols-rounded">send</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="mediafy-footer"><span>Created by Mediafy</span></div>
                </div>
                
                <!-- Modal usuwania SPARTA -->
                <div class="custom-modal" id="delete-modal-sparta" style="display:none">
                    <div class="modal-content" style="background:#2c2c2e;padding:24px;border-radius:20px;text-align:center;width:300px;border:1px solid #444">
                        <span class="material-symbols-outlined" style="color:#facc15;font-size:40px;margin-bottom:10px">warning</span>
                        <h3 style="color:#fff;margin-bottom:8px">Usuń produkt</h3>
                        <p style="color:#9da3ae;margin-bottom:20px">Czy na pewno chcesz usunąć ten produkt?</p>
                        <div style="display:flex;gap:10px">
                            <button class="cancel-delete-btn" style="flex:1;background:transparent;border:1px solid #555;color:#fff;padding:10px;border-radius:50px;cursor:pointer">Anuluj</button>
                            <button class="confirm-delete-btn" style="flex:1;background:#ff4444;border:none;color:#fff;padding:10px;border-radius:50px;cursor:pointer">Usuń</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- MEDIAFY CHATBOT (Niebieski) -->
        <div id="mediafy-root-container">
            <div class="mediafy-welcome-badge" onclick="document.body.classList.add('show-mediafy-widget');this.style.display='none';">
                <span class="material-symbols-outlined" style="font-size:18px;color:#2563EB">auto_awesome</span>
                Masz pytanie? Porozmawiajmy 👋
            </div>
            
            <button class="chatbot-toggler">
                <span class="material-symbols-outlined">psychology</span>
                <span class="material-symbols-outlined">close</span>
            </button>
            
            <div class="chatbot-widget">
                <header class="widget-header">
                    <span class="material-symbols-outlined menu-icon">menu</span>
                    <div class="header-title">
                        <h1>Asystent Mediafy</h1>
                        <span class="demo-badge">AI</span>
                    </div>
                    <div class="profile-icon">M</div>
                </header>
                
                <!-- Panel kontaktowy MEDIAFY -->
                <div class="settings-panel">
                    <div style="display:flex;justify-content:space-between;color:#fff;border-bottom:1px solid #333;padding-bottom:10px">
                        <h3>Kontakt Mediafy</h3>
                        <span class="material-symbols-outlined close-panel-icon" style="cursor:pointer">close</span>
                    </div>
                    <div style="margin-top:20px;display:flex;flex-direction:column;gap:20px">
                        <div style="display:flex;gap:16px;align-items:center">
                            <div class="icon-box" style="width:40px;height:40px;background:#2c2c2e;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#2563EB;flex-shrink:0">
                                <span class="material-symbols-outlined">mail</span>
                            </div>
                            <div>
                                <div style="color:#9da3ae;font-size:12px;margin-bottom:4px">Email główny</div>
                                <a href="mailto:kontakt@mediafy.com.pl" style="color:#fff;text-decoration:none;font-size:14px">kontakt@mediafy.com.pl</a>
                            </div>
                        </div>
                        <div style="display:flex;gap:16px;align-items:center">
                            <div class="icon-box" style="width:40px;height:40px;background:#2c2c2e;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#2563EB;flex-shrink:0">
                                <span class="material-symbols-outlined">call</span>
                            </div>
                            <div>
                                <div style="color:#9da3ae;font-size:12px;margin-bottom:4px">Telefon</div>
                                <a href="tel:+48794027325" style="color:#fff;text-decoration:none;font-size:14px">+48 794 027 325</a>
                            </div>
                        </div>
                        <div style="display:flex;gap:16px;align-items:center">
                            <div class="icon-box" style="width:40px;height:40px;background:#2c2c2e;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#2563EB;flex-shrink:0">
                                <span class="material-symbols-outlined">person</span>
                            </div>
                            <div>
                                <div style="color:#9da3ae;font-size:12px;margin-bottom:4px">Jerzy Niewiadowski</div>
                                <a href="mailto:jerzy.niewiadowski@mediafy.com.pl" style="color:#fff;text-decoration:none;font-size:14px">jerzy.niewiadowski@mediafy.com.pl</a>
                            </div>
                        </div>
                        <div style="display:flex;gap:16px;align-items:center">
                            <div class="icon-box" style="width:40px;height:40px;background:#2c2c2e;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#2563EB;flex-shrink:0">
                                <span class="material-symbols-outlined">person</span>
                            </div>
                            <div>
                                <div style="color:#9da3ae;font-size:12px;margin-bottom:4px">Maciej Fidor</div>
                                <a href="mailto:maciej.fidor@mediafy.com.pl" style="color:#fff;text-decoration:none;font-size:14px">maciej.fidor@mediafy.com.pl</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Panel usług MEDIAFY -->
                <div class="cart-panel">
                    <div style="display:flex;justify-content:space-between;color:#fff;border-bottom:1px solid #333;padding-bottom:10px">
                        <h3>Usługi</h3>
                        <span class="material-symbols-outlined close-cart" style="cursor:pointer">close</span>
                    </div>
                    <div class="cart-items-container" style="justify-content:center;text-align:center">
                        <p style="color:#9da3ae;padding-top:50px">Tutaj możesz zobaczyć listę naszych usług.</p>
                    </div>
                    <div class="cart-footer">
                        <button class="checkout-btn" style="width:100%;background:#2563EB;color:#fff;border:none;padding:14px;border-radius:12px;margin-top:0;cursor:pointer">
                            Wyślij zapytanie
                        </button>
                    </div>
                </div>
                
                <!-- Główna treść MEDIAFY -->
                <main class="widget-content">
                    <div class="initial-content">
                        <div class="welcome-text">
                            <h2>Cześć! 👋</h2>
                            <p>W czym mogę ci pomóc?</p>
                        </div>
                        <div class="action-chips">
                            <button class="chip" onclick="fillInput('mediafy',this.innerText)">Dla jakich firm są wasze rozwiązania?</button>
                            <button class="chip" onclick="fillInput('mediafy',this.innerText)">Czy po wdrożeniu zapewniacie wsparcie?</button>
                            <button class="chip" onclick="fillInput('mediafy',this.innerText)">Czy potrzebujemy własnego zespołu IT?</button>
                            <button class="chip" onclick="fillInput('mediafy',this.innerText)">Ile kosztuje stworzenie automatyzacji procesów?</button>
                        </div>
                    </div>
                    <ul class="chatbox"></ul>
                </main>
                
                <!-- Pole tekstowe MEDIAFY -->
                <div class="bottom-input-area">
                    <div class="input-container-dark">
                        <textarea class="chat-input-field" data-bot-id="mediafy" placeholder="Pisz śmiało" rows="1"></textarea>
                        <div class="input-controls-row">
                            <div style="flex:1"></div>
                            <div style="display:flex;gap:10px;align-items:center">
                                <button class="pill-btn-outline" id="voice-btn-mediafy">
                                    <span class="material-symbols-rounded">graphic_eq</span> Mów
                                </button>
                                <button class="send-btn" data-bot-id="mediafy">
                                    <span class="material-symbols-rounded">send</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="mediafy-footer"><span>Created by Mediafy</span></div>
                </div>
                
                <!-- Modal MEDIAFY -->
                <div class="custom-modal" id="delete-modal-mediafy" style="display:none">
                    <div class="modal-content" style="background:#2c2c2e;padding:24px;border-radius:20px;text-align:center;width:300px;border:1px solid #444">
                        <span class="material-symbols-outlined" style="color:#facc15;font-size:40px;margin-bottom:10px">warning</span>
                        <h3 style="color:#fff;margin-bottom:8px">Usuń produkt</h3>
                        <p style="color:#9da3ae;margin-bottom:20px">Czy na pewno chcesz usunąć ten produkt?</p>
                        <div style="display:flex;gap:10px">
                            <button class="cancel-delete-btn" style="flex:1;background:transparent;border:1px solid #555;color:#fff;padding:10px;border-radius:50px;cursor:pointer">Anuluj</button>
                            <button class="confirm-delete-btn" style="flex:1;background:#ff4444;border:none;color:#fff;padding:10px;border-radius:50px;cursor:pointer">Usuń</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Wstawienie HTML do strony
    document.body.insertAdjacentHTML('beforeend', html);
    
    // Konfiguracja chatbotów
    const CONFIG = {
        sparta: {
            API_URL: "https://mediafy-sparta.app.n8n.cloud/webhook/e93d888f-7641-4e5b-aff5-c39572adf088",
            CHAT_SESSION_ID: 'sparta_demo_' + Math.random().toString(36).substring(2, 9),
            ROOT_ID: 'sparta-root-container',
            TOGGLE_CLASS: 'show-widget'
        },
        mediafy: {
            API_URL: "https://mediafy-sparta.app.n8n.cloud/webhook/528387eb-c2b0-45e6-a38f-5bc06f7355f0",
            CHAT_SESSION_ID: 'mediafy_demo_' + Math.random().toString(36).substring(2, 9),
            ROOT_ID: 'mediafy-root-container',
            TOGGLE_CLASS: 'show-mediafy-widget'
        }
    };
    
    // Przykładowe produkty dla koszyka SPARTA
    const sampleProducts = [
        { name: "Samozamykacz Geze TS 2000", price: 189 },
        { name: "Ramie standardowe TS 2000/4000", price: 45 }
    ];
    
    // Inicjalizacja chatbotów
    initAllChatbots();
    initCart('sparta');
    initCart('mediafy');
    
    // Funkcja wypełniania inputu (dla chipów)
    window.fillInput = (targetBotId, text) => {
        const config = CONFIG[targetBotId];
        if (!config) return;
        
        const root = document.getElementById(config.ROOT_ID);
        const input = root.querySelector(".chat-input-field");
        const sendBtn = root.querySelector(".send-btn");
        
        if (input && sendBtn) {
            input.value = text;
            sendBtn.click();
        }
    };
    
    // Inicjalizacja koszyka
    function initCart(botId) {
        const root = document.getElementById(CONFIG[botId].ROOT_ID);
        if (!root) return;
        
        const container = root.querySelector('.cart-items-container');
        const badge = root.querySelector('.cart-badge');
        const totalEl = root.querySelector('.total-price');
        
        if (container) container.innerHTML = '';
        
        let total = 0;
        const products = botId === 'sparta' ? sampleProducts : [];
        const color = botId === 'sparta' ? '#F97316' : '#2563EB';
        
        products.forEach(product => {
            total += product.price;
            const itemHTML = `
                <div class="cart-item">
                    <div class="item-image">
                        <span class="material-symbols-outlined">shopping_bag</span>
                    </div>
                    <div style="flex:1">
                        <div style="font-size:14px;font-weight:500;color:#fff;margin-bottom:4px">${product.name}</div>
                        <div class="item-price" style="color:${color}!important">${product.price.toFixed(2)} zł</div>
                    </div>
                    <button class="icon-btn-dark delete-item" style="color:#ef4444;all:unset;cursor:pointer">
                        <span class="material-symbols-outlined" style="font-size:20px">delete</span>
                    </button>
                </div>
            `;
            if (container) container.innerHTML += itemHTML;
        });
        
        if (badge) {
            badge.innerText = products.length;
            badge.style.display = products.length > 0 ? 'flex' : 'none';
        }
        
        if (totalEl) totalEl.innerText = total.toFixed(2) + " zł";
        
        // Obsługa kliknięć usuwania (pokazanie modala)
        if (root.querySelectorAll('.delete-item').length > 0) {
            root.querySelectorAll('.delete-item').forEach(btn => {
                btn.onclick = () => root.querySelector(`#delete-modal-${botId}`).style.display = 'flex';
            });
        }
        
        // Obsługa modala
        const modal = root.querySelector(`#delete-modal-${botId}`);
        if (modal) {
            const cancelBtn = modal.querySelector('.cancel-delete-btn');
            const confirmBtn = modal.querySelector('.confirm-delete-btn');
            
            if (cancelBtn) cancelBtn.onclick = () => modal.style.display = 'none';
            if (confirmBtn) confirmBtn.onclick = () => {
                alert('Produkt usunięty (DEMO).');
                modal.style.display = 'none';
                initCart(botId);
            };
        }
    }
    
    // Reset dymka do oryginalnej wiadomości
    function resetBadge(botId) {
        const root = document.getElementById(CONFIG[botId].ROOT_ID);
        if (!root) return;
        
        const badge = root.querySelector(`.${botId}-welcome-badge`);
        if (badge) {
            if (botId === 'sparta') {
                badge.innerHTML = '<span class="material-symbols-outlined" style="font-size:18px;color:#F97316">sms</span> Przetestuj rozwiązanie RAG AGENT';
            } else if (botId === 'mediafy') {
                badge.innerHTML = '<span class="material-symbols-outlined" style="font-size:18px;color:#2563EB">auto_awesome</span> Masz pytanie? Porozmawiajmy 👋';
            }
            badge.style.display = 'flex';
        }
    }
    
    // Inicjalizacja pojedynczego chatbota
    function initChatbot(botId) {
        const cfg = CONFIG[botId];
        const root = document.getElementById(cfg.ROOT_ID);
        if (!root) return;
        
        const toggler = root.querySelector(".chatbot-toggler");
        const body = document.body;
        const input = root.querySelector(".chat-input-field[data-bot-id='" + botId + "']");
        const sendBtn = root.querySelector(".send-btn[data-bot-id='" + botId + "']");
        const chatbox = root.querySelector(".chatbox");
        const initialContent = root.querySelector(".initial-content");
        const voiceBtn = root.querySelector(`#voice-btn-${botId}`);
        const bottomInputArea = root.querySelector(".bottom-input-area");
        
        // Obsługa otwarcia/zamknięcia chatbota
        toggler.onclick = () => {
            const otherBotId = botId === 'sparta' ? 'mediafy' : 'sparta';
            body.classList.remove(CONFIG[otherBotId].TOGGLE_CLASS);
            body.classList.toggle(cfg.TOGGLE_CLASS);
            
            // Ukryj wszystkie dymki przy otwarciu
            const spartaBadge = document.querySelector("#sparta-root-container .sparta-welcome-badge");
            const mediafyBadge = document.querySelector("#mediafy-root-container .mediafy-welcome-badge");
            if (spartaBadge) spartaBadge.style.display = 'none';
            if (mediafyBadge) mediafyBadge.style.display = 'none';
        };
        
        // Obsługa paneli bocznych
        const menuBtn = root.querySelector(".menu-icon");
        const settingsPanel = root.querySelector(".settings-panel");
        const closePanel = root.querySelector(".close-panel-icon");
        const cartBtn = root.querySelector(".cart-trigger");
        const cartPanel = root.querySelector(".cart-panel");
        const closeCart = root.querySelector(".close-cart");
        
        if (menuBtn) menuBtn.onclick = () => {
            settingsPanel.classList.toggle("active");
            if (cartPanel) cartPanel.classList.remove("active");
            if (bottomInputArea) bottomInputArea.style.display = "block";
        };
        
        if (closePanel) closePanel.onclick = () => settingsPanel.classList.remove("active");
        
        if (cartBtn) cartBtn.onclick = () => {
            cartPanel.classList.toggle("active");
            settingsPanel.classList.remove("active");
            if (cartPanel.classList.contains("active")) {
                if (bottomInputArea) bottomInputArea.style.display = "none";
            } else {
                if (bottomInputArea) bottomInputArea.style.display = "block";
            }
        };
        
        if (closeCart) closeCart.onclick = () => {
            cartPanel.classList.remove("active");
            if (bottomInputArea) bottomInputArea.style.display = "block";
        };
        
        // Tworzenie elementu wiadomości czatu
        const createChatLi = (message, className) => {
            const li = document.createElement("li");
            li.classList.add("chat-message", className);
            
            let content;
            if (className === "outgoing") {
                content = `<div class="message-text">${message}</div>`;
            } else {
                content = `<div class="bot-icon">${botId.charAt(0).toUpperCase()}</div><div class="message-text">${message}</div>`;
            }
            
            // Loading message (trzy kropki)
            if (message === "...") {
                content = `
                    <div class="bot-icon">${botId.charAt(0).toUpperCase()}</div>
                    <div class="message-text loading-message" style="display:flex;align-items:center">
                        <span class="loading-dot" style="width:6px;height:6px;background:#9da3ae;border-radius:50%;margin:0 2px"></span>
                        <span class="loading-dot" style="width:6px;height:6px;background:#9da3ae;border-radius:50%;margin:0 2px"></span>
                        <span class="loading-dot" style="width:6px;height:6px;background:#9da3ae;border-radius:50%;margin:0 2px"></span>
                    </div>
                `;
            }
            
            li.innerHTML = content;
            return li;
        };
        
        // Generowanie odpowiedzi od API
        const generateResponse = async (chatElement, userMessage) => {
            const messageText = chatElement.querySelector(".message-text");
            
            try {
                const response = await fetch(cfg.API_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        message: userMessage,
                        sessionId: cfg.CHAT_SESSION_ID
                    })
                });
                
                const data = await response.json();
                const botResponse = data.message || data.output || data.text || JSON.stringify(data);
                const linkColor = botId === 'sparta' ? '#F97316' : '#2563EB';
                
                // Formatowanie odpowiedzi (linki, pogrubienie)
                let formatted = botResponse
                    .replace(/\n[-\s]*\s/g, '\n')
                    .replace(/\n\n+/g, '\n\n')
                    .replace(/\[([^\]]*?)\]\s*\(([^)]+)\)/g, `<a href="$2" target="_blank" style="color:${linkColor};text-decoration:underline;font-weight:700;cursor:pointer">Kliknij tutaj</a>`)
                    .replace(/(?<!href="|">)(https?:\/\/[^\s<]+)/g, `<a href="$1" target="_blank" style="color:${linkColor};text-decoration:underline;font-weight:700;cursor:pointer">Kliknij tutaj</a>`);
                
                formatted = formatted
                    .replace(/\n/g, '<br>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                
                messageText.innerHTML = formatted;
            } catch (error) {
                messageText.textContent = "Błąd połączenia";
            }
            
            // Scrollowanie do najnowszej wiadomości
            // Znajdź ostatnią wiadomość użytkownika (Twoje pytanie)
// Znajdź ostatnią wiadomość użytkownika
const lastUserMessage = chatbox.querySelector(".chat-message.outgoing:last-of-type");

if (lastUserMessage) {
    setTimeout(() => {
        const container = document.querySelector(".widget-content");
        
        if (container) {
            // Pobierz prostokątne współrzędne wiadomości i kontenera
            const messageRect = lastUserMessage.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            // Oblicz różnicę: Gdzie jest wiadomość vs Gdzie jest góra kontenera
            // Odejmujemy 20px, żeby był lekki odstęp od sufitu
            const offset = messageRect.top - containerRect.top - 20;

            // Przesuń scroll dokładnie o wyliczoną różnicę
            container.scrollBy({
                top: offset,
                behavior: "smooth"
            });
        }
    }, 100);
}
        };
        
        // Obsługa wysyłania wiadomości
        const handleChat = () => {
            const message = input.value.trim();
            if (!message) return;
            
            initialContent.style.setProperty('display', 'none', 'important');
            chatbox.classList.add('active');
            input.value = "";
            
            chatbox.appendChild(createChatLi(message, "outgoing"));
            
            const loadingLi = createChatLi("...", "incoming");
            chatbox.appendChild(loadingLi);
            
            const scrollContainer = root.querySelector(".widget-content");
            scrollContainer.scrollTo({ top: scrollContainer.scrollHeight, behavior: 'smooth' });
            
            generateResponse(loadingLi, message);
        };
        
        if (sendBtn) sendBtn.onclick = handleChat;
        
        if (input) input.onkeydown = (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleChat();
            }
        };
        
        // Rozpoznawanie głosu
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            recognition.lang = 'pl-PL';
            recognition.interimResults = false;
            
            if (voiceBtn) {
                voiceBtn.onclick = () => {
                    if (voiceBtn.classList.contains("listening")) {
                        recognition.stop();
                        return;
                    }
                    recognition.start();
                    voiceBtn.classList.add("listening");
                    voiceBtn.innerHTML = '<span class="material-symbols-rounded">mic</span> Słucham...';
                };
                
                recognition.onresult = (event) => {
                    input.value = event.results[0][0].transcript;
                    voiceBtn.classList.remove("listening");
                    voiceBtn.innerHTML = '<span class="material-symbols-rounded">graphic_eq</span> Mów';
                    handleChat();
                };
                
                recognition.onend = () => {
                    voiceBtn.classList.remove("listening");
                    voiceBtn.innerHTML = '<span class="material-symbols-rounded">graphic_eq</span> Mów';
                };
            }
        } else {
            if (voiceBtn) voiceBtn.style.display = 'none';
        }
    }
    
    // Inicjalizacja obu chatbotów
    function initAllChatbots() {
        initChatbot('sparta');
        initChatbot('mediafy');
    }
    
    // Obsługa zamykania chatbota kliknięciem poza nim
    document.addEventListener('click', (e) => {
        const spartaRoot = document.getElementById('sparta-root-container');
        const mediafyRoot = document.getElementById('mediafy-root-container');
        const body = document.body;
        
        // Funkcja zamykająca chatbot
        const closeBot = (botId) => {
            const cfg = CONFIG[botId];
            const root = document.getElementById(cfg.ROOT_ID);
            if (!root) return;
            
            body.classList.remove(cfg.TOGGLE_CLASS);
            
            const badge = root.querySelector(`.${botId}-welcome-badge`);
            if (badge) {
                const color = botId === 'sparta' ? '#F97316' : '#2563EB';
                badge.innerHTML = `<span class="material-symbols-outlined" style="font-size:18px;color:${color}">sms</span> Czekam na Twoje kolejne pytania! 👋`;
                badge.style.display = 'flex';
                
                // Po 3 sekundach: ukryj obecny dymek i pokaż dymek drugiego chatbota
                setTimeout(() => {
                    badge.style.display = 'none';
                    const otherBot = botId === 'sparta' ? 'mediafy' : 'sparta';
                    resetBadge(otherBot);
                }, 3000);
            }
        };
        
        // Sprawdzenie czy kliknięto poza SPARTA
        if (body.classList.contains('show-widget')) {
            const isClickInsideSparta = spartaRoot && spartaRoot.contains(e.target);
            if (!isClickInsideSparta) {
                closeBot('sparta');
            }
        }
        
        // Sprawdzenie czy kliknięto poza MEDIAFY
        if (body.classList.contains('show-mediafy-widget')) {
            const isClickInsideMediafy = mediafyRoot && mediafyRoot.contains(e.target);
            if (!isClickInsideMediafy) {
                closeBot('mediafy');
            }
        }
    });
    
    // Opóźnienie 3 sekundy przed pokazaniem dymka Mediafy
    // Pokaż ikony chatbotów po 3 sekundach
setTimeout(() => {
    document.querySelectorAll('.chatbot-toggler').forEach(btn => {
        btn.style.display = 'flex';
        setTimeout(() => btn.classList.add('show'), 10);
    });
}, 3000);

// Pokaż biały dymek Mediafy po 10 sekundach
setTimeout(() => {
    resetBadge('mediafy');
}, 10000);
}
             
// --- OBSŁUGA PRZYCISKÓW Z FRAMERA (Wersja z Priorytetem) ---
    document.addEventListener('click', (e) => {
        // 1. Sprawdź, czy kliknięto w link (lub element wewnątrz linku)
        const link = e.target.closest('a');

        // 2. Jeśli to link i ma w adresie nasz znacznik #open-sparta
        if (link && link.href.includes('#open-sparta')) {
            // 3. NAJWAŻNIEJSZE: Zablokuj Framera
            e.preventDefault();  // Nie przeładowuj strony/nie zmieniaj URL
            e.stopPropagation(); // Nie mów Framerowi, że kliknięto (zatrzymaj bąbelkowanie)
            
            // 4. Logika otwierania SPARTY
            document.body.classList.remove('show-mediafy-widget'); // Zamknij niebieskiego (jak jest otwarty)
            document.body.classList.add('show-widget');            // Otwórz pomarańczowego
            
            // Ukryj dymki powitalne
            const badges = document.querySelectorAll('.sparta-welcome-badge, .mediafy-welcome-badge');
            badges.forEach(b => b.style.display = 'none');
        }
    }, true); // <--- TO JEST KLUCZ: 'true' oznacza, że łapiemy kliknięcie PIERWSI, przed Framerem!
             
             
// Uruchomienie po załadowaniu DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

 })();
