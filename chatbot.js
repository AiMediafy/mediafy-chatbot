(function() {
    function init() {
        const html = `
        <div id="mediafy-root-container">
            <div class="mediafy-welcome-badge" onclick="document.body.classList.add('show-mediafy-widget');this.style.display='none';">
                <span class="badge-dot"></span>
                Masz pytanie? Porozmawiajmy 👋
            </div>

            <button class="chatbot-toggler">
                <span class="material-symbols-rounded">psychology</span>
                <span class="material-symbols-rounded">close</span>
            </button>

            <div class="chatbot-widget">
                <header class="widget-header">
                    <div class="header-left">
                        <div class="header-avatar">M</div>
                        <div class="header-info">
                            <div class="header-name">Asystent Mediafy</div>
                            <div class="header-status">
                                <span class="status-dot"></span>
                                Online teraz
                            </div>
                        </div>
                    </div>
                    <div class="header-actions">
                        <span class="header-ai-badge">AI</span>
                        <button class="header-icon-btn menu-icon" title="Kontakt">
                            <span class="material-symbols-rounded" style="font-size:18px">menu</span>
                        </button>
                    </div>
                </header>

                <div class="settings-panel">
                    <div class="settings-title">Kontakt Mediafy</div>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <span class="material-symbols-rounded">mail</span>
                        </div>
                        <div>
                            <div class="contact-label">Email</div>
                            <div class="contact-value"><a href="mailto:kontakt@mediafy.com.pl">kontakt@mediafy.com.pl</a></div>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <span class="material-symbols-rounded">call</span>
                        </div>
                        <div>
                            <div class="contact-label">Telefon</div>
                            <div class="contact-value"><a href="tel:+48794027325">+48 794 027 325</a></div>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <span class="material-symbols-rounded">person</span>
                        </div>
                        <div>
                            <div class="contact-label">Jerzy Niewiadowski</div>
                            <div class="contact-value"><a href="mailto:jerzy.niewiadowski@mediafy.com.pl">jerzy.niewiadowski@mediafy.com.pl</a></div>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <span class="material-symbols-rounded">person</span>
                        </div>
                        <div>
                            <div class="contact-label">Maciej Fidor</div>
                            <div class="contact-value"><a href="mailto:maciej.fidor@mediafy.com.pl">maciej.fidor@mediafy.com.pl</a></div>
                        </div>
                    </div>

                    <button class="header-icon-btn close-panel-icon" style="margin-top:auto;width:100%;border-radius:10px;border:1px solid rgba(255,255,255,0.07);color:rgba(255,255,255,0.4);height:36px;justify-content:center;gap:6px;font-size:12px;font-family:Inter,sans-serif">
                        <span class="material-symbols-rounded" style="font-size:16px">close</span>
                        Zamknij
                    </button>
                </div>

                <main class="widget-content">
                    <div class="initial-content">
                        <div class="welcome-text">
                            <h2>Cześć! 👋</h2>
                            <p>W czym mogę ci pomóc?<br>Wybierz temat lub napisz dowolne pytanie.</p>
                        </div>
                        <div>
                            <div class="chips-label">Popularne pytania</div>
                            <div class="action-chips">
                                <button class="chip" onclick="mediafyFillInput(this.innerText)">Dla jakich firm są wasze rozwiązania?</button>
                                <button class="chip" onclick="mediafyFillInput(this.innerText)">Czy po wdrożeniu zapewniacie wsparcie?</button>
                                <button class="chip" onclick="mediafyFillInput(this.innerText)">Czy potrzebujemy własnego zespołu IT?</button>
                                <button class="chip" onclick="mediafyFillInput(this.innerText)">Ile kosztuje stworzenie automatyzacji?</button>
                            </div>
                        </div>
                    </div>
                    <ul class="chatbox"></ul>
                </main>

                <div class="bottom-input-area">
                    <div class="input-container-dark">
                        <textarea class="chat-input-field" data-bot-id="mediafy" placeholder="Pisz śmiało..." rows="1"></textarea>
                        <div class="input-controls-row">
                            <button class="voice-btn" id="voice-btn-mediafy">
                                <span class="material-symbols-rounded" style="font-size:14px">graphic_eq</span>
                                Mów
                            </button>
                            <button class="send-btn" data-bot-id="mediafy">
                                <span class="material-symbols-rounded" style="font-size:16px">send</span>
                            </button>
                        </div>
                    </div>
                    <div class="mediafy-footer">Powered by Mediafy AI</div>
                </div>
            </div>
        </div>
        `;

        document.body.insertAdjacentHTML('beforeend', html);

        const CONFIG = {
            API_URL: "https://mediafy-sparta.app.n8n.cloud/webhook/528387eb-c2b0-45e6-a38f-5bc06f7355f0",
            CHAT_SESSION_ID: 'mediafy_' + Math.random().toString(36).substring(2, 9),
        };

        // Globalna pomocnicza funkcja dla chipów
        window.mediafyFillInput = function(text) {
            const root = document.getElementById('mediafy-root-container');
            const input = root.querySelector('.chat-input-field');
            const sendBtn = root.querySelector('.send-btn');
            if (input && sendBtn) {
                input.value = text;
                sendBtn.click();
            }
        };

        initChatbot();

        function initChatbot() {
            const root = document.getElementById('mediafy-root-container');
            const toggler = root.querySelector('.chatbot-toggler');
            const input = root.querySelector('.chat-input-field');
            const sendBtn = root.querySelector('.send-btn');
            const chatbox = root.querySelector('.chatbox');
            const initialContent = root.querySelector('.initial-content');
            const voiceBtn = root.querySelector('#voice-btn-mediafy');
            const menuBtn = root.querySelector('.menu-icon');
            const settingsPanel = root.querySelector('.settings-panel');
            const closePanel = root.querySelector('.close-panel-icon');

            // Toggle open/close
            toggler.onclick = () => {
                document.body.classList.toggle('show-mediafy-widget');
                const badge = root.querySelector('.mediafy-welcome-badge');
                if (badge) badge.style.display = 'none';
            };

            // Settings panel
            if (menuBtn) menuBtn.onclick = () => settingsPanel.classList.toggle('active');
            if (closePanel) closePanel.onclick = () => settingsPanel.classList.remove('active');

            // Create message element
            const createMsg = (message, className) => {
                const li = document.createElement('li');
                li.classList.add('chat-message', className);

                if (message === '...') {
                    li.innerHTML = `
                        <div class="bot-icon">M</div>
                        <div class="message-text loading-message">
                            <span class="loading-dot"></span>
                            <span class="loading-dot"></span>
                            <span class="loading-dot"></span>
                        </div>`;
                } else if (className === 'outgoing') {
                    li.innerHTML = `<div class="message-text">${message}</div>`;
                } else {
                    li.innerHTML = `<div class="bot-icon">M</div><div class="message-text">${message}</div>`;
                }
                return li;
            };

            // Fetch response from n8n
            const generateResponse = async (chatElement, userMessage) => {
                const msgEl = chatElement.querySelector('.message-text');
                try {
                    const res = await fetch(CONFIG.API_URL, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ message: userMessage, sessionId: CONFIG.CHAT_SESSION_ID })
                    });
                    const data = await res.json();
                    const reply = data.message || data.output || data.text || JSON.stringify(data);

                    let formatted = reply
                        .replace(/\n[-\s]*\s/g, '\n')
                        .replace(/\n\n+/g, '\n\n')
                        .replace(/\[([^\]]*?)\]\s*\(([^)]+)\)/g, `<a href="$2" target="_blank" style="color:#3b82f6;text-decoration:underline;font-weight:600">Kliknij tutaj</a>`)
                        .replace(/(?<!href="|">)(https?:\/\/[^\s<]+)/g, `<a href="$1" target="_blank" style="color:#3b82f6;text-decoration:underline;font-weight:600">Kliknij tutaj</a>`)
                        .replace(/\n/g, '<br>')
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

                    msgEl.innerHTML = formatted;
                } catch (e) {
                    msgEl.textContent = 'Błąd połączenia. Spróbuj ponownie.';
                }

                // Scroll to latest
                const scrollContainer = root.querySelector('.widget-content');
                scrollContainer.scrollTo({ top: scrollContainer.scrollHeight, behavior: 'smooth' });
            };

            // Handle send
            const handleChat = () => {
                const message = input.value.trim();
                if (!message) return;

                initialContent.style.setProperty('display', 'none', 'important');
                chatbox.classList.add('active');
                input.value = '';
                input.style.height = 'auto';

                chatbox.appendChild(createMsg(message, 'outgoing'));

                const scrollContainer = root.querySelector('.widget-content');
                scrollContainer.scrollTo({ top: scrollContainer.scrollHeight, behavior: 'smooth' });

                const loadingLi = createMsg('...', 'incoming');
                chatbox.appendChild(loadingLi);
                scrollContainer.scrollTo({ top: scrollContainer.scrollHeight, behavior: 'smooth' });

                generateResponse(loadingLi, message);
            };

            sendBtn.onclick = handleChat;

            input.onkeydown = (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleChat();
                }
            };

            // Auto-resize textarea
            input.oninput = () => {
                input.style.height = 'auto';
                input.style.height = Math.min(input.scrollHeight, 100) + 'px';
            };

            // Voice recognition
            if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
                const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                const recognition = new SpeechRecognition();
                recognition.lang = 'pl-PL';
                recognition.interimResults = false;

                voiceBtn.onclick = () => {
                    if (voiceBtn.classList.contains('listening')) {
                        recognition.stop();
                        return;
                    }
                    recognition.start();
                    voiceBtn.classList.add('listening');
                    voiceBtn.innerHTML = '<span class="material-symbols-rounded" style="font-size:14px">mic</span> Słucham...';
                };

                recognition.onresult = (event) => {
                    input.value = event.results[0][0].transcript;
                    voiceBtn.classList.remove('listening');
                    voiceBtn.innerHTML = '<span class="material-symbols-rounded" style="font-size:14px">graphic_eq</span> Mów';
                    handleChat();
                };

                recognition.onend = () => {
                    voiceBtn.classList.remove('listening');
                    voiceBtn.innerHTML = '<span class="material-symbols-rounded" style="font-size:14px">graphic_eq</span> Mów';
                };
            } else {
                if (voiceBtn) voiceBtn.style.display = 'none';
            }
        }

        // Close on click outside
        document.addEventListener('click', (e) => {
            const root = document.getElementById('mediafy-root-container');
            if (!root) return;
            if (document.body.classList.contains('show-mediafy-widget')) {
                if (!root.contains(e.target)) {
                    document.body.classList.remove('show-mediafy-widget');
                    // Show badge again after closing
                    const badge = root.querySelector('.mediafy-welcome-badge');
                    if (badge) {
                        badge.innerHTML = '<span class="badge-dot"></span> Masz pytanie? Porozmawiajmy 👋';
                        badge.style.display = 'flex';
                    }
                }
            }
        });

        // Show toggler + badge after delay
        setTimeout(() => {
            const toggler = document.querySelector('#mediafy-root-container .chatbot-toggler');
            if (toggler) {
                toggler.style.display = 'flex';
                setTimeout(() => toggler.classList.add('show'), 10);
            }
        }, 1500);

        // Show welcome badge after 8s
        setTimeout(() => {
            if (!document.body.classList.contains('show-mediafy-widget')) {
                const badge = document.querySelector('#mediafy-root-container .mediafy-welcome-badge');
                if (badge) badge.style.display = 'flex';
            }
        }, 8000);

        // Handle #open-mediafy links from Framer
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && link.href.includes('#open-mediafy')) {
                e.preventDefault();
                e.stopPropagation();
                document.body.classList.add('show-mediafy-widget');
                const badge = document.querySelector('#mediafy-root-container .mediafy-welcome-badge');
                if (badge) badge.style.display = 'none';
            }
        }, true);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
