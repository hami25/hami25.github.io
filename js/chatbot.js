/*-- ========================= FLOATING CHATBOT =========================
  Zweck:
  - Permanenter, schwebender Chatbot unten rechts („klassischer Website-Chat“)
  - Unabhängig von Tabs/Modals
  - Kommunikation über externen n8n-Webhook

  Architektur:
  - chat-launcher: runder Button unten rechts (öffnet/schließt Chat)
  - chat-window: Chat-Fenster im Glass-Look
  - Nachrichten + Input werden rein clientseitig gerendert

  JS/HTML-Vertrag:
  - toggleChat(): öffnet/schließt das Chatfenster
  - sendMessage(): sendet User-Input an den Webhook
  - handleKeyPress(): Enter-Taste zum Absenden
  - IDs (#chat-window, #chat-messages, #chat-input) dürfen NICHT geändert werden
======================================================================= */


const WEBHOOK_URL = 'https://c464hnhdaqxo3g1vc5acdvc8.hooks.n8n.cloud/webhook/https://c464hnhdaqxo3g1vc5acdvc8.hooks.n8n.cloud/webhook/chat';

// Generiert eine zufällige ID, damit sich der Bot an das Gespräch erinnert
let sessionId = localStorage.getItem('chatSessionId');
if (!sessionId) {
  sessionId = Math.random().toString(36).substring(7);
  localStorage.setItem('chatSessionId', sessionId);
}

function toggleChat() {
  console.log('toggleChat called');
  const window = document.getElementById('chat-window');
  window.classList.toggle('hidden');
}

window.toggleChat = toggleChat;

function handleKeyPress(e) {
  if (e.key === 'Enter') sendMessage();
}

async function sendMessage() {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  if (!message) return;

  // 1. User Nachricht anzeigen
  addMessage(message, 'user');
  input.value = '';

  // 2. An n8n senden
  try {
    // Lade-Indikator (optional)
    const loadingMsg = addMessage('...', 'bot');

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: message,
        sessionId: sessionId
      })
    });

    if (!response.ok) throw new Error('Netzwerk Fehler');

    const data = await response.json();

    // Lade-Nachricht entfernen
    loadingMsg.remove();

    // 3. Bot Antwort anzeigen
    // (n8n muss ein JSON zurückgeben wie { "output": "Der Text..." })
    const botText = data.output || data.text || JSON.stringify(data);
    addMessage(botText, 'bot');

  } catch (error) {
    console.error(error);
    addMessage("Entschuldigung, ich konnte den Server nicht erreichen.", 'bot');
  }
}

function addMessage(text, sender) {
  const container = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = `message ${sender}-message`;
  div.innerText = text;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight; // Nach unten scrollen
  return div;
}
