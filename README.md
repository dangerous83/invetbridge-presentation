# ITSEC Cyber Defence Briefing — Investbridge Capital

A DFSA-aligned, interactive cybersecurity awareness presentation. Single-page web app, no build step.

## Files
- `index.html` — the deck (styles + markup)
- `app.js` — slide content, layouts, navigation engine, phone-remote logic
- `asset/` — ITSEC + Investbridge Capital logos
- `serve.js` + `START-PRESENTATION.bat` — local Wi-Fi server (needed for the phone remote)

## Run it
**Just to present (no remote):** double-click `index.html`. Everything works except the phone remote.

**To present WITH the phone remote:** double-click **`START-PRESENTATION.bat`**.
It opens the deck at your Wi-Fi address (e.g. `http://192.168.x.x:8080`). Click the
phone icon (top-right), scan the QR with a phone on the **same Wi-Fi**, and the phone
becomes a presenter console that controls this screen.

## Controls
- **← / → / Space** — previous / next   ·   **Home / End** — first / last
- **R** — reveal next card / answer   ·   **M** — menu   ·   **F** — fullscreen
- Click the cards (Matrix slides) to "decrypt"; tap nodes on Orbit slides; tap poll answers.

## Hosting for the live event (recommended)
For the remote to work on **any** network (not just same Wi-Fi), host the folder:
- **GitHub Pages**, **Netlify Drop**, **Cloudflare Pages**, or **Vercel** — upload all files
  keeping the structure, then open the public URL. The QR auto-points to wherever it's served.

## Note
The phone remote uses WebRTC via the public PeerJS broker, so both the laptop and the
phone need internet access during the session (corporate / Teams networks are fine).
