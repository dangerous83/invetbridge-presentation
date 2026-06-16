/* ICONS */
const IC={
 shield:'<path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/>',
 alert:'<path d="M12 3L2 20h20z"/><line x1="12" y1="10" x2="12" y2="15"/><circle cx="12" cy="17.6" r=".7" fill="currentColor"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
 lock:'<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
 key:'<circle cx="8" cy="8" r="4"/><path d="M11 11l8 8M16 16l2 2M18 14l2 2"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-6 8-6s8 2 8 6"/>',
 eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
 file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>',
 brain:'<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 6 3 3 0 0 0 4 2.8M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 6 3 3 0 0 1-4 2.8M12 4v16"/>',
 wifi:'<path d="M5 12a10 10 0 0 1 14 0M8 15.5a5 5 0 0 1 8 0"/><circle cx="12" cy="19" r="1" fill="currentColor"/>',
 money:'<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 9v6M18 9v6"/>',
 bell:'<path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z"/><path d="M10 20a2 2 0 0 0 4 0"/>',
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/>',
 link:'<path d="M10 6l1-1a4 4 0 0 1 6 6l-1 1M14 18l-1 1a4 4 0 0 1-6-6l1-1M9 15l6-6"/>',
 check:'<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>',
 finger:'<path d="M6 11a6 6 0 0 1 11-3M12 11a3 3 0 0 1 3 3v2M9 11.5a3 3 0 0 1 3-1.5M7.5 16a8 8 0 0 0 .5 4M12 14v6"/>',
 server:'<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><circle cx="7" cy="7.5" r=".7" fill="currentColor"/><circle cx="7" cy="16.5" r=".7" fill="currentColor"/>',
 scale:'<path d="M12 3v18M6 21h12M5 7h14M5 7l-2.5 5h5zM19 7l-2.5 5h5z"/>',
 ban:'<circle cx="12" cy="12" r="9"/><path d="M6 6l12 12"/>'
};
const svg=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${IC[n]||IC.shield}</svg>`;
const A="asset/ITSEC Horizontal White.png";

/* ============ CONTENT ============ */
const SLIDES=[
{type:"cover",section:"Welcome",notes:"Welcome. I'm Amir Kolahzadeh, Founder & CEO of ITSEC. This is a business-risk session for everyone who uses email, handles client data or joins Teams — not IT-only. By the end, every person should know how to spot threats, respond correctly, and avoid becoming the entry point for a breach. Press → to begin."},

{type:"content",layout:"orbit",section:"Context & Regulation",kicker:"01 // Threat Posture",modid:"MOD-01",
 title:"Cybersecurity Is Now a Board-Level Risk",core:"TARGET:<br>YOUR FIRM",
 lead:"Financial firms are high-value targets because they hold trust, money, client data and market-sensitive information. <b>Tap a node</b> to see what attackers are really after.",
 cards:[
  {ic:"user",t:"Identities",items:["Client information & identities","Executive identities"]},
  {ic:"money",t:"Money Movement",items:["Payment instructions","Beneficiary & invoice data"]},
  {ic:"file",t:"Confidential Docs",items:["Investment documents","Confidential deal flow","Regulatory correspondence"]},
  {ic:"key",t:"Access & Brand",items:["Microsoft 365 / email access","Reputation abuse & impersonation"]}],
 notes:"Criminals don't only attack systems — they attack trust. That trust can be weaponised. The DFSA emphasises cyber risk as a supervisory area: boards and senior management must understand vulnerabilities and ensure oversight, resources and controls."},

{type:"content",layout:"pillars",section:"Context & Regulation",kicker:"02 // DFSA Framework",modid:"MOD-02",
 title:"DFSA-Aligned Cyber Awareness",
 lead:"DFSA-regulated firms manage cyber risk across four pillars. Security is <b>not</b> delegated only to IT or compliance — every person is part of the control environment.",
 cards:[
  {ic:"scale",t:"Governance",items:["Senior-management oversight","Risk identification & assessment"]},
  {ic:"shield",t:"Controls",items:["Policies, procedures & controls","Incident detection & escalation"]},
  {ic:"user",t:"People",items:["Employee awareness & training","A verification culture"]},
  {ic:"server",t:"Resilience",items:["Third-party / outsourcing risk","Business continuity","Protection of client data"]}],
 notes:"The DFSA doesn't mandate one framework, but expects firms to understand vulnerabilities and manage cyber risk appropriately. One ignored email, one fake Teams invite, one reused password — and the risk becomes real fast."},

{type:"content",layout:"spotlight",section:"Context & Regulation",kicker:"03 // Direct Threat",modid:"MOD-03",
 title:"Why Investbridge Must Be Extra Vigilant",
 alert:{tag:"DFSA ALERT — ACTIVE",txt:"The DFSA has issued an alert about impersonation of <b>Investbridge Capital Limited</b> — a DFSA-authorised firm. The firm's name and regulated status are actively attractive to fraudsters."},
 cards:[
  {ic:"globe",t:"Brand Abuse",items:["Brand used by fraudsters","Cloned websites & domains"]},
  {ic:"mail",t:"Fake Comms",items:["Clients receive fake messages","Staff receive fraudulent inquiries"]},
  {ic:"check",t:"Your Response",items:["Verify before responding","Escalate immediately"]}],
 notes:"This training is not theoretical. When a regulated firm is impersonated, the damage isn't limited to the victim — the firm faces reputational harm, client confusion and regulatory scrutiny. If something feels off, don't engage. Verify and escalate."},

{type:"content",layout:"console",section:"Threats & Human Factor",kicker:"04 // Human Factor",modid:"MOD-04",
 title:"Most Incidents Start With People",
 lead:"Attackers rarely start by hacking systems — <b>they start by manipulating people.</b> The strongest control is a trained employee who pauses before acting.",
 cards:[
  {ic:"link",t:"links_and_files",items:["Clicking a malicious link","Opening a malicious attachment","Downloading from unknown sources"]},
  {ic:"key",t:"credentials",items:["Entering M365 creds on a fake login","Sharing OTP / MFA codes"]},
  {ic:"user",t:"misplaced_trust",items:["Trusting a spoofed address","Replying to a fake regulator/client","Joining a fake Teams meeting"]}],
 notes:"Technology controls are stronger now, so attackers target people. They manufacture urgency, fear and authority; they use names you recognise, copy signatures, clone sites, and harvest details from LinkedIn."},

{type:"content",layout:"matrix",section:"Threats & Human Factor",kicker:"05 // Threat Landscape",modid:"MOD-05",
 title:"Current Threats Facing Financial Firms",
 lead:"The most dangerous threats are often not the most technical — they are the ones that look <b>completely normal.</b> Click each module to decrypt.",
 cards:[
  {ic:"mail",t:"Email-borne",items:["Phishing emails","Malicious attachments","Fake M365 login pages"]},
  {ic:"money",t:"Fraud",items:["Business Email Compromise","Invoice / payment redirection"]},
  {ic:"user",t:"Impersonation",items:["Executive & client impersonation","Fake regulator communications"]},
  {ic:"brain",t:"Data & AI",items:["Data leakage via email/chat","Credential theft","AI scams & deepfake voice/video"]}],
 notes:"A fake login can look real; a fake client email can sound professional. The landscape is moving toward deception, not just hacking — and AI lets criminals produce better emails, fake documents and voice impersonations."},

{type:"content",layout:"split",section:"Threats & Human Factor",kicker:"06 // Phishing",modid:"MOD-06",
 title:"Phishing: Act Before You Think",
 lead:"Phishing combines <b>urgency with authority</b> to make you click, open, log in, approve, share or transfer before you reason.",
 cards:[
  {ic:"alert",t:"The Pressure",items:["Combines urgency + authority","Designed to bypass judgement"]},
  {ic:"mail",t:"Common Lures",items:['"Urgent action required"','"Account will be disabled"','"Invoice attached"','"Password expired"']},
  {ic:"shield",t:"The Rule",items:["Don't act on appearance","Verify sender, domain & link","Escalate if anything's off"]}],
 notes:"In a financial environment phishing may look like a client document, investment proposal, regulatory notice or internal approval. Don't act on appearance — verify and escalate."},

{type:"content",layout:"compare",section:"Threats & Human Factor",kicker:"07 // Detection",modid:"MOD-07",
 title:"How to Identify a Suspicious Email",
 lead:"If a message asks for something <b>unusual, urgent, confidential or financial</b> — verify through a separate trusted channel.",
 cards:[
  {ic:"alert",t:"🚩 Red Flags",items:["Address doesn't EXACTLY match the domain","Slight spelling changes / hyphens","Unexpected attachments or urgency","Asks for credentials / OTP / MFA","Link points to a strange site"]},
  {ic:"check",t:"✅ Safe Habits",items:["Never trust the display name alone","Hover — don't click — to inspect links","Go direct to the official site","Verify via a separate trusted channel"]}],
 notes:"The key word is EXACTLY — attackers rely on small differences. Don't rely on the display name; it's trivial to fake. Don't click to 'verify' — hover, inspect, and go direct to the official site."},

{type:"content",layout:"steps",section:"Fraud & Impersonation",kicker:"08 // Attack Chain",modid:"MOD-08",
 title:"Business Email Compromise",
 alert:{tag:"NO MALWARE NEEDED",txt:"BEC often contains <b>no malware and no attachment</b> — just a convincing email asking an employee to act. In regulated services, <b>process is protection.</b>"},
 cards:[
  {ic:"user",t:"1 · The Setup",items:["A compromised or spoofed account","Mimics an exec, supplier or client"]},
  {ic:"alert",t:"2 · The Pressure",items:['"Process this urgently"','"I\'m in a meeting, just email"','"New bank details attached"']},
  {ic:"shield",t:"3 · Your Control",items:["Verify payment changes","Exec requests follow approval flows","Never bypass controls for urgency"]}],
 notes:"BEC is dangerous because it can be 'clean' — no malware. The control is process discipline: payment changes verified, client instructions confirmed, executive requests through approval workflows."},

{type:"content",layout:"orbit",section:"Fraud & Impersonation",kicker:"09 // Impersonation",modid:"MOD-09",
 title:"Impersonation Threatens Financial Trust",core:"WHO THEY<br>BECOME",
 lead:"The DFSA has published an alert about impersonation of Investbridge Capital Limited. <b>Identity must be verified before trust is extended.</b> Tap a node.",
 cards:[
  {ic:"shield",t:"The Firm",items:["Investbridge Capital","Regulators (DFSA)"]},
  {ic:"user",t:"People",items:["Senior executives & clients","Lawyers, recruiters, journalists"]},
  {ic:"server",t:"Vendors",items:["Banks & suppliers","Microsoft / IT support"]},
  {ic:"globe",t:"Channels",items:["Email, phone, SMS, WhatsApp, LinkedIn","Fake websites & AI-generated voice"]}],
 notes:"Criminals understand the value of the firm's name. Be alert to suspicious inquiries from anyone claiming to be a client, investor, regulator, media rep or counterparty."},

{type:"content",layout:"compare",section:"Fraud & Impersonation",kicker:"10 // Domain Spoofing",modid:"MOD-10",
 title:"Fake Websites & Lookalike Domains",
 lead:"A cloned site can be visually convincing — logo, language, executive names. <b>A client reporting a suspicious link is a security incident, not a routine inquiry.</b>",
 cards:[
  {ic:"globe",t:"🎭 What Fraudsters Create",items:["Lookalike websites & portals","Fake trading / investment platforms","Fake LinkedIn profiles","Fake onboarding & payment pages"]},
  {ic:"shield",t:"🛡 What You Must Do",items:["Check domain spelling carefully","Never use links from suspicious emails","Report lookalike domains immediately","Never send clients to unverified links"]}],
 notes:"If a client says 'I got this link from someone claiming to represent your firm,' treat it as a security incident. The faster the firm identifies fraudulent domains, the faster it can act."},

{type:"content",layout:"split",section:"Systems & Data",kicker:"11 // M365 & Teams",modid:"MOD-11",
 title:"Teams & Microsoft 365 Security",
 lead:"Apply the <b>same security judgment to Teams</b> you apply to email. Teams feels internal and trusted — but external participants can use it for social engineering.",
 cards:[
  {ic:"alert",t:"Key Risks",items:["Fake meeting invitations","Malicious files in chat","Fake Microsoft login pages","MFA fatigue & guest abuse"]},
  {ic:"eye",t:"Before You Share",items:["Confirm who's present","Confirm the file's source","Confirm YOU initiated any MFA"]}],
 notes:"Because this session is on Teams, address it directly. Before sharing sensitive info confirm who is present; before opening files confirm the source; before approving MFA confirm you initiated the login."},

{type:"content",layout:"matrix",section:"Systems & Data",kicker:"12 // Authentication",modid:"MOD-12",
 title:"Passwords Alone Are Not Enough",
 lead:"MFA is essential but not magic. <b>An MFA prompt you did not initiate — deny it and report.</b> Click each module to decrypt.",
 cards:[
  {ic:"key",t:"Password Rules",items:["Long passphrases","Never reuse work passwords","Use an approved password manager","No saved passwords on shared devices"]},
  {ic:"finger",t:"MFA Rules",items:["Never approve prompts you didn't start","Never share OTP codes","Never send codes via chat/phone"]},
  {ic:"alert",t:"MFA Fatigue",items:["Attackers spam prompts hoping you tap approve","Unexpected prompt = warning sign","Deny & report"]}],
 notes:"Reused passwords turn one breach into many. Attackers use MFA-fatigue attacks — repeatedly triggering prompts hoping you approve one to stop the noise. An unexpected prompt is a warning sign."},

{type:"content",layout:"compare",section:"Systems & Data",kicker:"13 // Data Protection",modid:"MOD-13",
 title:"Handle Client Data With Discipline",
 lead:"Before sending anything, ask three questions: <b>Right recipient? Right file? Right channel?</b>",
 cards:[
  {ic:"file",t:"📁 Sensitive Data",items:["Client identity & source-of-funds","Financial statements & accounts","Board papers & legal documents","Compliance & regulatory correspondence"]},
  {ic:"shield",t:"✅ Required Behaviour",items:["Need-to-know basis only","Approved systems only","No personal email / cloud storage","Verify recipients before sending"]}],
 notes:"Data protection is professional discipline, not just legal compliance. The worst response to a mistake is hiding it — a slip reported in five minutes can usually be contained."},

{type:"content",layout:"split",section:"Systems & Data",kicker:"14 // AI Risk",modid:"MOD-14",
 title:"AI Tools Must Be Used Carefully",
 lead:"Treat AI tools like any other third-party system. <b>If a tool isn't approved, confidential data does not go into it.</b>",
 cards:[
  {ic:"alert",t:"Uncontrolled AI Risk",items:["Uploading confidential client data","Disclosing internal / regulated docs","Inaccurate outputs & retention"]},
  {ic:"brain",t:"Golden Rule",items:["No client docs in unapproved AI tools","Remove identifiers; verify output","Escalate if unsure"]}],
 notes:"In a DFSA-regulated environment, uncontrolled AI use can create confidentiality, governance, recordkeeping and regulatory issues — often invisibly, because no obvious breach happens immediately."},

{type:"content",layout:"compare",section:"Systems & Data",kicker:"15 // Mobility",modid:"MOD-15",
 title:"Security Must Travel With You",
 lead:"Remote work is acceptable <b>only when security discipline follows the employee.</b>",
 cards:[
  {ic:"wifi",t:"⚠ Remote-Work Risks",items:["Public Wi-Fi & home networks","Lost laptops & unlocked screens","Personal email forwarding","Unapproved USB / software"]},
  {ic:"lock",t:"✅ Required Behaviour",items:["Lock your screen when away","Use company-approved devices","Keep systems updated","Report lost/stolen devices immediately"]}],
 notes:"Many breaches happen because a laptop is lost, a screen is left open, or files are accessed from an insecure environment. Don't install unapproved software."},

{type:"content",layout:"spotlight",section:"Systems & Data",kicker:"16 // Payment Fraud",modid:"MOD-16",
 title:"Verify Every Financial Instruction",
 alert:{tag:"HIGHEST FINANCIAL IMPACT",txt:"A bank-account change must <b>never</b> be accepted by email alone. Verify using <b>previously known</b> contact details — never the number or email in the suspicious message."},
 cards:[
  {ic:"money",t:"High-Risk Requests",items:["Change of bank-account details","Urgent payment instruction","New beneficiary setup","Invoice from unknown vendor"]},
  {ic:"shield",t:"Minimum Safe Process",items:["Verify via a known trusted contact","Use a call-back procedure","Dual approval where applicable","Escalate pressure to bypass controls"]}],
 notes:"Fraudsters exploit the time-pressure finance and ops teams work under. This is one of the highest-impact areas because the financial loss can be immediate and irreversible."},

{type:"content",layout:"steps",section:"Response & Reporting",kicker:"17 // First Response",modid:"MOD-17",
 title:"Pause. Verify. Escalate.",
 lead:"Speed matters — but not panic. The correct response is <b>controlled escalation.</b> Don't 'test' the link, don't engage, don't delete before reporting.",
 cards:[
  {ic:"ban",t:"PAUSE",items:["Don't click / reply / forward","Don't download attachments"]},
  {ic:"search",t:"VERIFY",items:["Take a screenshot if safe","Don't 'test' the link or engage"]},
  {ic:"bell",t:"ESCALATE",items:["Report to your designated contact","Inform IT / security / compliance","Preserve evidence — don't delete","Don't investigate alone"]}],
 notes:"Don't delete the message before reporting — the security team may need it as evidence. The objective is to contain risk quickly and professionally."},

{type:"content",layout:"spotlight",section:"Response & Reporting",kicker:"18 // Reporting Culture",modid:"MOD-18",
 title:"Early Reporting Protects the Firm",
 alert:{tag:"5 MINUTES vs 5 DAYS",txt:"A mistake reported in <b>five minutes</b> can be contained. The same mistake reported in <b>five days</b> becomes a crisis. Reporting is <b>not blame — it's risk control.</b>"},
 cards:[
  {ic:"bell",t:"Report Immediately If",items:["You clicked a suspicious link","You entered creds on a fake page","You approved an MFA prompt by mistake","You sent info to the wrong recipient"]},
  {ic:"alert",t:"Also Report",items:["A suspicious client request","A client reports a fake communication","You notice a lookalike domain","You suspect account compromise"]},
  {ic:"check",t:"The Mindset",items:["Reporting is risk control, not blame","A no-delay culture protects everyone"]}],
 notes:"People delay reporting out of embarrassment, and that delay turns small issues into major incidents. The earlier security knows, the more options they have."},

{type:"scenario",section:"Live Scenarios",kicker:"Scenario 01",modid:"SIM-01",title:"Fake Microsoft Login",
 quote:'"Your Microsoft 365 session has expired. Click here to avoid account suspension."',
 situation:"The email appears to come from Microsoft Support. The link opens a page that looks exactly like the Microsoft login screen.",
 prompt:"What should you do?",answerTitle:"Correct response",
 answer:["Do not enter credentials","Check the sender address","Hover over the link without clicking","Go directly to Microsoft via the official login page","Report the email internally","Delete only after instructed"],
 notes:"One of the most common attacks. The page may look completely real — the goal is credential theft. Never use the link in the email; go directly to the official site or app."},

{type:"scenario",section:"Live Scenarios",kicker:"Scenario 02",modid:"SIM-02",title:"Executive Payment Request",
 quote:'"I need you to process this payment urgently. I\'m in a meeting and cannot talk. Please do not delay."',
 situation:"The email appears to come from a senior executive and includes new bank details.",
 prompt:"What are the red flags — and what do you do?",answerTitle:"Red flags + correct response",
 answer:["Red flags: urgency, no phone verification, new bank details, bypass of process, seniority & secrecy pressure","Do not process the payment","Verify using known internal contact details","Follow the finance approval process","Escalate to compliance / security if suspicious"],
 notes:"Authority pressure is one of the most effective social-engineering tools. But process protects everyone, including executives. No legitimate executive expects a control to be bypassed."},

{type:"scenario",section:"Live Scenarios",kicker:"Scenario 03",modid:"SIM-03",title:"Client Reports a Suspicious Website",
 quote:'"I was contacted by someone claiming to represent Investbridge Capital. They sent me a website link and asked me to deposit funds."',
 situation:"A client contacts the firm directly. Highly relevant — the DFSA has issued an impersonation alert about Investbridge Capital Limited.",
 prompt:"How should this be handled?",answerTitle:"Correct response",
 answer:["Treat as a security & fraud escalation — not basic customer service","Ask the client not to engage further","Obtain screenshots, domain, sender details & messages","Escalate internally immediately","Preserve evidence","Consider the regulatory / legal communication pathway"],
 notes:"This may be part of a broader impersonation campaign. The response must be controlled, evidence-based and escalated quickly — never treated as routine."},

{type:"scenario",section:"Live Scenarios",kicker:"Scenario 04",modid:"SIM-04",title:"Fake Teams Meeting",
 quote:'"Urgent investment documentation review."',
 situation:"A Teams invite arrives from an external person claiming to be a client adviser. In the meeting they ask you to open a file from chat and share your screen.",
 prompt:"What should you do before proceeding?",answerTitle:"Correct response",
 answer:["Verify the person's identity","Confirm the meeting was expected","Don't open files from unverified participants","Check whether external participants are present","Do not share confidential screens","End the meeting if suspicious — and report internally"],
 notes:"Teams creates a false sense of trust because it feels internal. Apply the same judgment you use for email — and for WhatsApp, LinkedIn, SMS and calls."},

{type:"scenario",section:"Live Scenarios",kicker:"Scenario 05",modid:"SIM-05",title:"AI Tool Misuse",
 quote:'An employee pastes a client\'s passport copy, financial statement and investment profile into an unapproved AI tool to "summarise it quickly."',
 situation:"It feels efficient — but the data has just left the firm's controlled environment.",
 prompt:"What is the risk — and what's the right move?",answerTitle:"Risks + correct response",
 answer:["Risks: confidentiality breach, loss of control, regulatory exposure, policy breach, third-party retention, inaccurate output","Do not upload confidential data into unapproved AI tools","Use the approved internal process","Remove sensitive identifiers where permitted","Ask compliance / security for guidance"],
 notes:"The risk isn't always visible — no obvious breach happens immediately, but confidential data has left controlled systems. Keep it inside approved workflows."},

{type:"poll",section:"Knowledge Check",tag:"Live Poll 01",modid:"QUIZ-01",q:"You receive a Microsoft login link by email. What should you do?",options:["Click and login quickly","Forward it to colleagues","Go directly to the official Microsoft login page and report the email","Reply and ask if it is real"],correct:2,notes:"Answer: C. Never authenticate through a link in an email. Go directly to the official site and report the message."},
{type:"poll",section:"Knowledge Check",tag:"Live Poll 02",modid:"QUIZ-02",q:"A client emails new bank details for a transaction. What is the safest action?",options:["Update the details immediately","Verify through a trusted independent channel","Ask the client to resend the email","Save the email for later"],correct:1,notes:"Answer: B. Bank-detail changes are verified out-of-band using previously known contact info — never by email alone."},
{type:"poll",section:"Knowledge Check",tag:"Live Poll 03",modid:"QUIZ-03",q:"You receive an MFA approval prompt you did not initiate. What should you do?",options:["Approve it","Ignore it","Deny it and report immediately","Restart your laptop"],correct:2,notes:"Answer: C. An unexpected MFA prompt likely means someone has your password. Deny and report at once."},
{type:"poll",section:"Knowledge Check",tag:"Live Poll 04",modid:"QUIZ-04",q:"A client reports a fake website using Investbridge's name. What do you do?",options:["Tell the client to ignore it","Treat it as a security escalation and collect evidence","Visit the website to investigate yourself","Share the link with colleagues on WhatsApp"],correct:1,notes:"Answer: B. This is a fraud/impersonation escalation — collect evidence and escalate internally, especially given the DFSA alert."},
{type:"poll",section:"Knowledge Check",tag:"Live Poll 05",modid:"QUIZ-05",q:"Can confidential client documents be uploaded to any public AI tool for summarisation?",options:["Yes, if it saves time","Yes, if the client name is removed","No — unless the tool is approved and data handling is authorised","Yes, if the output is not shared externally"],correct:2,notes:"Answer: C. Only approved tools with authorised data handling. Convenience never overrides confidentiality."},

{type:"content",layout:"pillars",section:"Your Platform",kicker:"19 // CyberShield Dashboard",modid:"MOD-19",
 title:"Your CyberShield Training Dashboard",
 lead:"This briefing continues on the <b>CyberShield</b> platform — one place to complete training, acknowledge policies and prove compliance. <b>\"You're all caught up\"</b> is the goal for every employee.",
 cards:[
  {ic:"brain",t:"Training & Modules",items:["Track Completed / In-Progress / Not-Started","Assigned modules per role","Continue training anytime","Earn points toward 100% complete"]},
  {ic:"file",t:"Policies — Review & Sign",items:["Security Governance & Board Oversight (v1.0)","Information Security Policy (v3.0)","Clean Desk Policy (v1.2)","Cloud Services Usage Policy (v1.0)"]},
  {ic:"check",t:"Badges & Certificates",items:["First Module · Quick Learner","Security Champion · Perfect Score","Certificates as proof of completion"]},
  {ic:"globe",t:"Engagement & Insight",items:["Leaderboard — earn points & climb","Live UAE threat-intel feed","Compliance progress: 0 of 4 → 100%","Drives a security-first culture"]}],
 notes:"CyberShield is how awareness becomes a habit, not a one-off session. Every employee should complete assigned modules, review and sign the four required policies (Security Governance, Information Security, Clean Desk, Cloud Services Usage), and keep their compliance bar at 100%. Badges, certificates and the leaderboard make it engaging; the live threat-intel feed keeps it current. Compliance is measurable and auditable — exactly what the DFSA expects."},

{type:"rules",section:"Close",kicker:"20 // The Essentials",modid:"REF-01",title:"10 Rules for Every Employee",lead:"Simple, but they work. Awareness isn't about jargon — it's about better decisions under pressure.",
 rules:["Verify before trusting","Don't click suspicious links","Don't open unexpected attachments","Never share passwords, OTPs or MFA codes","Report suspicious activity immediately","Use approved systems only","Protect client information","Confirm payment & bank changes independently","Be careful on Teams, WhatsApp, LinkedIn & mobile","When in doubt, escalate"],
 notes:"These ten rules are the practical foundation. Read a few aloud and point people to the one-page quick-reference handout."},

{type:"content",layout:"compare",section:"Close",kicker:"21 // Leadership",modid:"MOD-20",title:"Security Leadership Is Not Optional",
 lead:"Managers set the tone. <b>Reward speed over control and people take shortcuts; support verification and reporting and the firm gets stronger.</b>",
 cards:[
  {ic:"shield",t:"Managers Must",items:["Reinforce secure behaviour","Support immediate reporting","Never pressure staff to bypass controls","Encourage a verification culture"]},
  {ic:"scale",t:"Governance",items:["Onboarding includes security awareness","Review access rights periodically","Coordinate with compliance & IT","Treat cyber risk as operational risk"]}],
 notes:"Culture is created from the top and executed by everyone. If managers reward speed over control, employees take shortcuts."},

{type:"final",section:"Close",kicker:"22 // Final Message",modid:"END",title:"A Shared Control Environment",
 lead:"A firm is protected by technology, policies, governance — and people. In real life, <b>the employee is often the last line of defence.</b> The goal isn't fear. It's discipline.",
 mantras:[["Pause","before acting"],["Verify","before trusting"],["Escalate","before risk spreads"]],
 notes:"Every reported email, every challenged request, every verified payment, every quickly-escalated mistake makes the firm stronger. Protect client trust, the firm's reputation and the regulated environment."},

{type:"qa",section:"Close",kicker:"Questions & Discussion",modid:"Q&A",title:"Q&A",
 lead:"The more realistic the question, the more useful this session becomes.",
 prompts:["Have you seen suspicious emails recently?","Have clients ever reported suspicious messages?","Are there workflows where verification is difficult?","Are there systems where staff need clearer guidance?","Should any reporting channels be clarified?"],
 notes:"Open the floor. Encourage practical questions. Close by reminding everyone: if something looks unusual — pause, verify, escalate. Thank the audience."}
];

/* ============ RENDER HELPERS ============ */
const stage=document.getElementById('stage');
const FOOT=`<div class="slide-foot"><img src="${A}" alt="ITSEC"/><span class="ft-txt">DFSA-ALIGNED · CONFIDENTIAL · INVESTBRIDGE CAPITAL × ITSEC</span></div>`;
const li=items=>items.map(t=>`<li><span class="mk"></span><span>${t}</span></li>`).join('');
const head=s=>`<div class="panel-head"><span class="kicker"><span class="dot"></span>${s.kicker}</span><span class="modid">${s.modid||''}</span></div>`;
const alertHTML=a=>`<div class="alert-banner"><span class="ab-ic">${svg('alert')}</span><div><div class="ab-tag">${a.tag}</div><div class="ab-txt">${a.txt}</div></div></div>`;
const titleHTML=s=>`<h2 class="title">${s.title}</h2>`;
const leadHTML=s=>s.lead?`<p class="lead">${s.lead}</p>`:'';

/* ---- MATRIX ---- */
function L_matrix(s){
 const cards=s.cards.map(c=>`<div class="fcard" data-card><div class="fc-redact"></div>
   <div class="fc-head"><span class="fc-ic">${svg(c.ic)}</span><h3 class="fc-title">${c.t}</h3></div>
   <div class="fc-body"><ul>${li(c.items)}</ul></div>
   <div class="fc-lock"><i></i>${svg('lock')}<span>CLICK TO DECRYPT</span></div></div>`).join('');
 const cl=s.cards.length>=4?'c4':s.cards.length===3?'c3':'c2';
 return `<div class="wrap">${head(s)}${titleHTML(s)}${leadHTML(s)}${s.alert?alertHTML(s.alert):''}
  <div style="display:flex;justify-content:flex-end;margin-bottom:12px"><span class="reveal-all" data-revealall>${svg('eye')} DECRYPT ALL</span></div>
  <div class="fgrid ${cl}">${cards}</div></div>${FOOT}`;
}
/* ---- SPLIT ---- */
function L_split(s){
 const items=s.cards.map((c,i)=>`<div class="sl-item" style="animation-delay:${.3+i*.12}s"><span class="sl-ic">${svg(c.ic)}</span><div><div class="sl-t">${c.t}</div><ul>${li(c.items)}</ul></div></div>`).join('');
 return `<div class="wrap">${head(s)}${titleHTML(s)}${leadHTML(s)}${s.alert?alertHTML(s.alert):''}
  <div class="split"><div class="split-l"><div class="split-list">${items}</div></div>
  <div class="split-r"><div class="defense-viz"><svg class="dv-svg" viewBox="0 0 120 120" data-defense preserveAspectRatio="xMidYMid meet"></svg><div class="dv-label">PERIMETER DEFENCE · ACTIVE</div></div></div></div></div>${FOOT}`;
}
/* ---- ORBIT ---- */
function L_orbit(s){
 const n=s.cards.length,R=37;let sats='',lines='';
 const pos=s.cards.map((c,i)=>{const a=(-90+i*360/n)*Math.PI/180;return{x:50+R*Math.cos(a),y:50+R*Math.sin(a)};});
 pos.forEach((p,i)=>{lines+=`<line x1="50" y1="50" x2="${p.x.toFixed(1)}" y2="${p.y.toFixed(1)}"/>`;
  sats+=`<button class="sat" data-sat="${i}" style="left:${p.x}%;top:${p.y}%;animation-delay:${.3+i*.1}s"><span class="sat-ic">${svg(s.cards[i].ic)}</span><span class="sat-t">${s.cards[i].t}</span></button>`;});
 return `<div class="wrap">${head(s)}${titleHTML(s)}${leadHTML(s)}
  <div class="orbit">
   <div class="orbit-stage"><svg class="orbit-lines" viewBox="0 0 100 100" preserveAspectRatio="none">${lines}</svg>
     <div class="orbit-core"><span>${s.core||'CORE'}</span></div>${sats}</div>
   <div class="orbit-detail" data-detail><div class="od-empty">${svg('search')}&nbsp; Select a node to inspect…</div></div>
  </div></div>${FOOT}`;
}
/* ---- STEPS ---- */
function L_steps(s){
 const steps=s.cards.map((c,i)=>`<div class="step" style="--i:${i};animation-delay:${.3+i*.18}s"><div class="step-node">${i+1}</div><div class="step-t">${c.t}</div><ul>${li(c.items)}</ul></div>`).join('');
 return `<div class="wrap">${head(s)}${titleHTML(s)}${leadHTML(s)}${s.alert?alertHTML(s.alert):''}
  <div class="steps" style="--n:${s.cards.length}">${steps}</div></div>${FOOT}`;
}
/* ---- COMPARE ---- */
function L_compare(s){
 const a=s.cards[0],b=s.cards[1];
 return `<div class="wrap">${head(s)}${titleHTML(s)}${leadHTML(s)}${s.alert?alertHTML(s.alert):''}
  <div class="compare">
   <div class="cmp l" style="animation-delay:.25s"><div class="cmp-head"><span class="cmp-ic">${svg(a.ic)}</span><span class="cmp-t">${a.t}</span></div><ul>${li(a.items)}</ul></div>
   <div class="cmp-vs"><span>VS</span></div>
   <div class="cmp r" style="animation-delay:.4s"><div class="cmp-head"><span class="cmp-ic">${svg(b.ic)}</span><span class="cmp-t">${b.t}</span></div><ul>${li(b.items)}</ul></div>
  </div></div>${FOOT}`;
}
/* ---- PILLARS ---- */
function L_pillars(s){
 const p=s.cards.map((c,i)=>`<div class="pillar" style="animation-delay:${.3+i*.12}s"><span class="pillar-ic">${svg(c.ic)}</span><div class="pillar-t">${c.t}</div><ul>${li(c.items)}</ul></div>`).join('');
 return `<div class="wrap">${head(s)}${titleHTML(s)}${leadHTML(s)}<div class="pillars" style="--n:${s.cards.length}">${p}</div></div>${FOOT}`;
}
/* ---- CONSOLE ---- */
function L_console(s){
 let lines='',idx=0;const D=()=>(.15+idx++*0.12).toFixed(2);
 s.cards.forEach(c=>{lines+=`<div class="con-line con-h" style="animation-delay:${D()}s">## ${c.t.toUpperCase()}</div>`;
  c.items.forEach(it=>lines+=`<div class="con-line con-i" style="animation-delay:${D()}s"><span class="p">&gt;</span> ${it}</div>`);});
 lines+=`<div class="con-line con-i" style="animation-delay:${D()}s"><span class="p">&gt;</span> _<span class="con-cursor"></span></div>`;
 return `<div class="wrap">${head(s)}${titleHTML(s)}${leadHTML(s)}
  <div class="console"><div class="con-bar"><i></i><i></i><i></i><span>~/threat-intel/human-attack-surface.log</span></div>
  <div class="con-body">${lines}</div></div></div>${FOOT}`;
}
/* ---- SPOTLIGHT ---- */
function L_spotlight(s){
 const hero=s.alert||{tag:s.kicker,txt:s.lead};
 const tiles=s.cards.map((c,i)=>`<div class="spot-tile" style="animation-delay:${.4+i*.12}s"><div class="st-h"><span class="st-ic">${svg(c.ic)}</span><span class="st-t">${c.t}</span></div><ul>${li(c.items)}</ul></div>`).join('');
 return `<div class="wrap">${head(s)}${titleHTML(s)}
  <div class="spotlight"><div class="spot-hero"><div class="spot-tag">${hero.tag}</div><div class="spot-txt">${hero.txt}</div></div>
  <div class="spot-tiles" style="--n:${s.cards.length}">${tiles}</div></div></div>${FOOT}`;
}
const LAYOUTS={matrix:L_matrix,split:L_split,orbit:L_orbit,steps:L_steps,compare:L_compare,pillars:L_pillars,console:L_console,spotlight:L_spotlight};

function render(){
 SLIDES.forEach((s,idx)=>{
  const el=document.createElement('section');el.className='slide '+s.type;el.dataset.i=idx;let h='';
  if(s.type==='cover'){el.classList.add('cover');
   h=`<div class="radar"></div><div class="cover-inner">
    <div class="cover-logos"><img src="${A}" class="ic" alt="ITSEC"/><span class="vline"></span><img src="asset/IC-logo-print-london-dubai.png" alt="Investbridge Capital" style="background:#fff;border-radius:8px;padding:6px 10px;height:54px"/></div>
    <div class="boot mono" id="bootSeq"></div>
    <h1><span class="l1">Cyber Defence Briefing</span><span class="hl">for Financial Services</span></h1>
    <p class="sub">A DFSA-aligned security awareness session for everyone at <b style="color:#fff">Investbridge Capital</b> — protecting clients, data, reputation &amp; regulatory trust.</p>
    <div class="cover-stats">
      <div class="stat"><div class="sv" data-count="90" data-suffix="%">0%</div><div class="sl">of breaches involve a human element</div></div>
      <div class="stat"><div class="sv">DFSA</div><div class="sl">Active impersonation alert for Investbridge Capital</div></div>
      <div class="stat"><div class="sv" data-count="60" data-suffix=" min">0 min</div><div class="sl">to make you the firm's strongest defence</div></div>
    </div>
    <div class="cover-cta"><button class="btn btn-primary" data-act="start">Initialise Briefing <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
      <button class="btn btn-ghost" data-act="remote"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="7" y="2" width="10" height="20" rx="2.5"/><line x1="11" y1="18" x2="13" y2="18"/></svg> Connect Phone Remote</button></div>
   </div><div class="ticker"><span class="tk-tag">⚠ LIVE FEED</span><div class="tk-track" id="tkTrack"></div></div>`;
  }
  else if(s.type==='content'){h=(LAYOUTS[s.layout]||L_matrix)(s);}
  else if(s.type==='scenario'){
   h=`<div class="wrap">${head(s)}${titleHTML(s)}
    <div class="scenario-box"><div class="quote">${s.quote}</div><div class="sit">${s.situation}</div></div>
    <div class="prompt-q"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="9"/><path d="M9.2 9a2.8 2.8 0 0 1 5.4 1c0 1.8-2.6 2.2-2.6 4"/><circle cx="12" cy="17" r=".6" fill="currentColor"/></svg>${s.prompt}</div>
    <button class="btn btn-ghost btn-reveal" data-reveal>Reveal the answer <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></button>
    <div class="reveal-area"><div class="answer-card"><div class="ac-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px"><path d="M20 6L9 17l-5-5"/></svg>${s.answerTitle}</div><ul>${li(s.answer)}</ul></div></div></div>${FOOT}`;
  }
  else if(s.type==='poll'){
   h=`<div class="wrap">${head(s)}<span class="poll-tag">${s.tag} · tap an answer</span><div class="poll-q">${s.q}</div>
    <div class="options">${s.options.map((o,i)=>`<div class="opt" data-opt="${i}"><span class="key">${'ABCD'[i]}</span><span>${o}</span></div>`).join('')}</div>
    <div class="poll-result">Correct answer: <b>${'ABCD'[s.correct]}</b> — ${s.options[s.correct]}</div></div>${FOOT}`;
  }
  else if(s.type==='rules'){
   h=`<div class="wrap">${head(s)}${titleHTML(s)}${leadHTML(s)}
    <div class="rules-grid">${s.rules.map((r,i)=>`<div class="rule"><span class="num">${String(i+1).padStart(2,'0')}</span><span class="rt">${r}</span></div>`).join('')}</div></div>${FOOT}`;
  }
  else if(s.type==='final'){
   h=`<div class="wrap">${head(s)}${titleHTML(s)}${leadHTML(s)}
    <div class="final-mantra">${s.mantras.map(m=>`<div class="mantra"><span class="a">${m[0]}</span> <span class="b">${m[1]}</span></div>`).join('')}</div></div>${FOOT}`;
  }
  else if(s.type==='qa'){el.classList.add('qa');
   h=`<div class="wrap" style="text-align:center"><span class="kicker" style="justify-content:center;margin-bottom:14px">${s.kicker}</span>
    <h2 class="title" style="font-size:clamp(52px,10vw,130px)">${s.title}</h2><p class="lead" style="margin:0 auto 28px">${s.lead}</p>
    <div style="max-width:760px;margin:0 auto;text-align:left"><ul style="list-style:none;display:flex;flex-direction:column;gap:11px">${s.prompts.map(p=>`<li style="display:flex;gap:12px;align-items:flex-start;font-size:17px"><span class="mk" style="margin-top:8px;width:8px;height:8px"></span><span>${p}</span></li>`).join('')}</ul></div>
    <div class="cover-logos" style="justify-content:center;margin-top:44px;animation:none;opacity:.9"><img src="${A}" class="ic" alt="ITSEC"/><span class="vline"></span><img src="asset/IC-logo-print-london-dubai.png" alt="Investbridge" style="background:#fff;border-radius:8px;padding:6px 10px;height:50px"/></div>
    <p class="ft-txt mono" style="margin-top:18px;letter-spacing:.14em;color:var(--txt-dim)">THANK YOU · ITSEC.COM · PAUSE · VERIFY · ESCALATE</p></div>`;
  }
  el.innerHTML=h;stage.appendChild(el);
 });
}
render();

/* defence / threat-scan visual — a protected core, a rotating radar sweep,
   scan pulses, and incoming threats that are stopped at the inner ring */
function buildDefense(el){
 const cx=60,cy=60,IN=24,OUT=50;
 const angles=[-62,18,128,-150,72];           // fixed positions (deterministic, not random)
 let threats='';
 angles.forEach((deg,i)=>{
  const a=deg*Math.PI/180,c=Math.cos(a),s=Math.sin(a),d=(i*.55).toFixed(2);
  const xi=(cx+IN*c).toFixed(1),yi=(cy+IN*s).toFixed(1),xo=(cx+OUT*c).toFixed(1),yo=(cy+OUT*s).toFixed(1);
  threats+=`<line class="dv-trail" x1="${xi}" y1="${yi}" x2="${xo}" y2="${yo}" style="animation-delay:${d}s"/>`+
           `<circle class="dv-block" cx="${xi}" cy="${yi}" r="1.3" style="animation-delay:${d}s"/>`+
           `<circle class="dv-threat" cx="${xo}" cy="${yo}" r="2.3" style="animation-delay:${d}s"/>`;
 });
 el.innerHTML=`
  <circle class="dv-ring" cx="60" cy="60" r="52"/>
  <circle class="dv-ring r2" cx="60" cy="60" r="38"/>
  <circle class="dv-ring" cx="60" cy="60" r="24"/>
  <line class="dv-axis" x1="60" y1="4" x2="60" y2="116"/>
  <line class="dv-axis" x1="4" y1="60" x2="116" y2="60"/>
  <circle class="dv-ping" cx="60" cy="60" r="24"/>
  <g class="dv-sweep"><path class="dv-wedge" d="M60 60 L60 8 A52 52 0 0 0 27 21 Z"/><line class="dv-beam" x1="60" y1="60" x2="60" y2="8"/></g>
  ${threats}
  <circle class="dv-core-glow" cx="60" cy="60" r="15"/>
  <path class="dv-shield" transform="translate(60 60) scale(.82) translate(-12 -12)" d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/>`;
}
document.querySelectorAll('[data-defense]').forEach(buildDefense);

/* counters / ticker / boot */
function countUp(el){const t=parseFloat(el.dataset.count),suf=el.dataset.suffix||'';let v=0;const step=t/40;clearInterval(el._c);el._c=setInterval(()=>{v+=step;if(v>=t){v=t;clearInterval(el._c);}el.textContent=Math.round(v)+suf;},22);}
(function(){const t=document.getElementById('tkTrack');if(!t)return;const items=['<b>DFSA ALERT</b> — Impersonation of Investbridge Capital Limited reported','Phishing remains the <b>#1</b> entry vector','<b>MFA-fatigue</b> attacks are rising','Verify every payment-detail change <b>out-of-band</b>','<b>AI deepfake</b> voice scams emerging','Report suspicious activity in <b>minutes, not days</b>','Apply email-grade caution to <b>Microsoft Teams</b>'];const row=items.map(i=>`<span>◆ ${i}</span>`).join('');t.innerHTML=row+row;})();
(function(){const b=document.getElementById('bootSeq');if(!b)return;const lines=['<span class="ln">&gt; establishing secure channel<span class="ok"> ...OK</span></span>','<span class="ln">&gt; loading DFSA compliance module<span class="ok"> ...OK</span></span>','<span class="ln">&gt; threat intelligence feed<span class="am"> ...ACTIVE</span></span>','<span class="ln">&gt; presenter: AMIR KOLAHZADEH · CEO, ITSEC<span class="ok"> ...VERIFIED</span></span>'];b.innerHTML=lines.join('');[...b.querySelectorAll('.ln')].forEach((e,i)=>setTimeout(()=>e.style.cssText='opacity:1;transition:.4s',300+i*320));})();

/* ============ NAV ENGINE ============ */
const slideEls=[...document.querySelectorAll('.slide')];const total=slideEls.length;let cur=0,isRemote=false;
const counter=document.getElementById('counter'),progress=document.getElementById('progress');
const prevBtn=document.getElementById('prevBtn'),nextBtn=document.getElementById('nextBtn');
const pad=n=>String(n+1).padStart(2,'0');
function go(i,opt){opt=opt||{};i=Math.max(0,Math.min(total-1,i));
 slideEls.forEach((el,idx)=>{el.classList.toggle('active',idx===i);el.classList.toggle('exit',idx<i);});
 cur=i;counter.innerHTML=`<b>${pad(i)}</b>/${pad(total-1)}`;progress.style.width=(i/(total-1)*100)+'%';
 prevBtn.classList.toggle('disabled',i===0);nextBtn.classList.toggle('disabled',i===total-1);
 updateMenuCurrent();onEnter(slideEls[i]);if(opt.broadcast!==false)sendState();}
function onEnter(el){el.querySelectorAll('.sv[data-count]').forEach(countUp);}
/* on the phone, navigation drives the desktop (which mirrors back); on the desktop it moves locally */
const next=()=>{if(isRemote){send({t:'nav',action:'next'});return;}go(cur+1);};
const prev=()=>{if(isRemote){send({t:'nav',action:'prev'});return;}go(cur-1);};
prevBtn.onclick=prev;nextBtn.onclick=next;
document.getElementById('zoneL').onclick=prev;document.getElementById('zoneR').onclick=next;

stage.addEventListener('click',e=>{
 if(isRemote)return; /* phone mirrors the desktop — it doesn't drive content locally */
 const card=e.target.closest('[data-card]');if(card){revealCard(card);return;}
 const ra=e.target.closest('[data-revealall]');if(ra){slideEls[cur].querySelectorAll('.fcard:not(.revealed)').forEach((c,k)=>setTimeout(()=>revealCard(c),k*120));return;}
 const sat=e.target.closest('[data-sat]');if(sat){activateSat(slideEls[cur],parseInt(sat.dataset.sat,10));return;}
 const rev=e.target.closest('[data-reveal]');if(rev){doReveal(slideEls[cur]);return;}
 const opt=e.target.closest('.opt');if(opt&&!opt.closest('.options').classList.contains('locked')){pollAnswer(slideEls[cur],parseInt(opt.dataset.opt,10),true);return;}
 const act=e.target.closest('[data-act]');if(act){act.dataset.act==='start'?next():openQR();}
});
function slideIdx(el){return parseInt((el.closest?el.closest('.slide'):el).dataset.i,10);}
function revealCard(c){if(c.classList.contains('revealed'))return;c.classList.add('revealed');
 if(!isRemote){const cs=c.closest('.fgrid')?[...c.closest('.fgrid').querySelectorAll('[data-card]')]:[];const idx=cs.indexOf(c);if(idx>=0)send({t:'sync',kind:'card',i:slideIdx(c),idx});}}
function doReveal(el){const a=el.querySelector('.reveal-area');if(a){a.classList.add('open');const b=el.querySelector('[data-reveal]');if(b)b.style.display='none';if(!isRemote)send({t:'sync',kind:'area',i:parseInt(el.dataset.i,10)});}}
function activateSat(el,i){const s=SLIDES[parseInt(el.dataset.i,10)],c=s.cards[i];const det=el.querySelector('[data-detail]');if(det)det.innerHTML=`<div class="od-t">${svg(c.ic)} ${c.t}</div><ul>${li(c.items)}</ul>`;el.querySelectorAll('.sat').forEach(x=>x.classList.remove('active'));const sat=el.querySelector(`[data-sat="${i}"]`);if(sat){sat.classList.add('active');sat.dataset.seen="1";}
 if(!isRemote)send({t:'sync',kind:'sat',i:parseInt(el.dataset.i,10),idx:i});}
function revealNext(el){
 const c=el.querySelector('.fcard:not(.revealed)');if(c){revealCard(c);return;}
 const ra=el.querySelector('.reveal-area');if(ra&&!ra.classList.contains('open')){doReveal(el);return;}
 const sats=[...el.querySelectorAll('.sat')];if(sats.length){const nx=sats.find(s=>!s.dataset.seen);if(nx)activateSat(el,parseInt(nx.dataset.sat,10));}
}
function pollAnswer(el,choice,bc){const wrap=el.querySelector('.options');if(!wrap||wrap.classList.contains('locked'))return;const idx=parseInt(el.dataset.i,10),correct=SLIDES[idx].correct;wrap.classList.add('locked');wrap.querySelectorAll('.opt').forEach((o,i)=>{if(i===correct)o.classList.add('correct');else if(i===choice)o.classList.add('wrong');});el.querySelector('.poll-result').classList.add('show');if(bc)send({t:'poll',i:idx,choice});}

window.addEventListener('keydown',e=>{if(isRemote)return;
 if(['ArrowRight','PageDown'].includes(e.key)||e.key===' '){e.preventDefault();next();}
 else if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();prev();}
 else if(e.key==='Home')go(0);else if(e.key==='End')go(total-1);
 else if(e.key.toLowerCase()==='r')revealNext(slideEls[cur]);
 else if(e.key.toLowerCase()==='f')toggleFS();
 else if(e.key.toLowerCase()==='z')cycleZoom();
 else if(e.key.toLowerCase()==='m')toggleDrawer();
 else if(e.key==='Escape'){closeDrawer();closeQR();}});
let tx=0;stage.addEventListener('touchstart',e=>tx=e.touches[0].clientX,{passive:true});
stage.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-tx;if(Math.abs(dx)>60)dx<0?next():prev();},{passive:true});
function toggleFS(){if(!document.fullscreenElement)document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen();else document.exitFullscreen&&document.exitFullscreen();}
document.getElementById('fsBtn').onclick=toggleFS;

/* zoom / read mode — click to enlarge text for clear preview */
const ZOOM_STEPS=[1,1.25,1.5];let zoomIx=0;const zoomBtn=document.getElementById('zoomBtn');
function applyZoom(){const z=ZOOM_STEPS[zoomIx];stage.style.setProperty('--zoom',z);const on=z>1;document.body.classList.toggle('zoomed',on);zoomBtn.classList.toggle('on',on);zoomBtn.querySelector('.zlvl').textContent=Math.round(z*100)+'%';
 const w=slideEls[cur]&&slideEls[cur].querySelector('.wrap');if(w)w.scrollTop=0;}
function cycleZoom(){zoomIx=(zoomIx+1)%ZOOM_STEPS.length;applyZoom();}
zoomBtn.onclick=cycleZoom;

/* card tilt */
stage.addEventListener('mousemove',e=>{const c=e.target.closest('.fcard');if(!c)return;const r=c.getBoundingClientRect();const px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;c.style.transform=`translateY(-5px) perspective(800px) rotateX(${-py*5}deg) rotateY(${px*6}deg)`;});
stage.addEventListener('mouseout',e=>{const c=e.target.closest('.fcard');if(c)c.style.transform='';});

/* drawer */
const drawer=document.getElementById('drawer'),scrim=document.getElementById('scrim'),menuList=document.getElementById('menuList');
(function(){let h='',last=null;SLIDES.forEach((s,i)=>{if(s.section!==last){h+=`<div class="sec-label">${s.section}</div>`;last=s.section;}const lbl=s.title||(s.type==='cover'?'Cover / Title':s.tag||'Slide');h+=`<div class="menu-item" data-jump="${i}"><span class="mi-num">${pad(i)}</span><span class="mi-txt">${lbl}</span></div>`;});menuList.innerHTML=h;menuList.querySelectorAll('[data-jump]').forEach(it=>it.onclick=()=>{go(parseInt(it.dataset.jump,10));closeDrawer();});})();
function updateMenuCurrent(){menuList.querySelectorAll('.menu-item').forEach(it=>it.classList.toggle('current',parseInt(it.dataset.jump,10)===cur));}
function openDrawer(){drawer.classList.add('open');scrim.classList.add('open');updateMenuCurrent();}
function closeDrawer(){drawer.classList.remove('open');scrim.classList.remove('open');}
function toggleDrawer(){drawer.classList.contains('open')?closeDrawer():openDrawer();}
document.getElementById('burgerBtn').onclick=toggleDrawer;document.getElementById('drawerClose').onclick=closeDrawer;scrim.onclick=closeDrawer;

/* particle bg */
(function(){const c=document.getElementById('net'),x=c.getContext('2d');let w,h,pts;
 function size(){w=c.width=innerWidth;h=c.height=innerHeight;const n=Math.min(70,Math.floor(w*h/24000));pts=Array.from({length:n},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.34,vy:(Math.random()-.5)*.34}));}
 size();addEventListener('resize',size);
 (function loop(){x.clearRect(0,0,w,h);for(const p of pts){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;}
  for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const a=pts[i],b=pts[j],dx=a.x-b.x,dy=a.y-b.y,d=Math.hypot(dx,dy);if(d<150){x.strokeStyle=`rgba(50,150,235,${(1-d/150)*.16})`;x.lineWidth=1;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke();}}
  for(const p of pts){x.fillStyle='rgba(118,220,255,.55)';x.beginPath();x.arc(p.x,p.y,1.5,0,7);x.fill();}requestAnimationFrame(loop);})();})();

/* ============ REMOTE ============ */
const params=new URLSearchParams(location.search);const remoteId=params.get('remote');
let peer=null,conn=null;
const qrModal=document.getElementById('qrModal'),statDot=document.getElementById('statDot'),statTxt=document.getElementById('statTxt'),linkBox=document.getElementById('linkBox'),qrHint=document.getElementById('qrHint');
const buildRemoteURL=id=>location.href.split('?')[0].split('#')[0]+'?remote='+id;
function setQR(url){const box=document.getElementById('qrbox');try{const q=qrcode(0,'M');q.addData(url);q.make();box.innerHTML=q.createSvgTag({scalable:true,margin:0});}catch(e){box.innerHTML='<span style="color:#333;font-size:12px">QR error</span>';}}
function initDisplayPeer(){if(peer)return;statTxt.textContent='Initialising secure link…';statDot.className='status-dot waiting';
 if(typeof Peer==='undefined'){statDot.className='status-dot err';statTxt.textContent='Remote library blocked (no internet?).';return;}
 peer=new Peer();let opened=false;
 peer.on('open',id=>{opened=true;const url=buildRemoteURL(id);setQR(url);linkBox.textContent=url;statTxt.textContent='Waiting for your phone to connect…';
  qrHint.innerHTML=location.protocol==='file:'?'<b>⚠ This is the reason scanning fails:</b> the page is opened from a local file (file://), which a phone cannot load. Host the folder (GitHub Pages / any web server) or run the included local server, then open it by its <b>http</b> address — the QR will then connect.':'Scan with your phone camera (same Wi-Fi or mobile data both work). Peer-to-peer &amp; encrypted.';});
 peer.on('connection',c=>{conn=c;c.on('open',()=>{statDot.className='status-dot live';statTxt.textContent='Phone connected ✓ Remote is live.';toast('Phone remote connected');sendState();setTimeout(closeQR,900);/* dismiss the QR so it doesn't linger on the presentation screen */});c.on('data',handleRemoteCmd);c.on('close',()=>{statDot.className='status-dot waiting';statTxt.textContent='Phone disconnected — waiting…';});});
 peer.on('error',err=>{statDot.className='status-dot err';statTxt.textContent='Link error: '+(err.type||err.message||'unknown');});
 setTimeout(()=>{if(!opened){statDot.className='status-dot err';statTxt.textContent='Signaling timeout — check your internet connection, then reopen this dialog.';}},12000);
}
function handleRemoteCmd(d){if(d.t==='nav'){if(d.action==='next')next();else if(d.action==='prev')prev();else if(d.action==='goto')go(d.i);else if(d.action==='reveal')revealNext(slideEls[cur]);}else if(d.t==='req')sendState();}
function send(o){if(conn&&conn.open){try{conn.send(o);}catch(e){}}}
function sendState(){const s=SLIDES[cur];if(!s)return;send({t:'state',i:cur,total,title:s.title||(s.type==='cover'?'Cover / Title':(s.tag||'Slide')),kicker:s.kicker||s.tag||(s.type==='cover'?'OPENING':'NOW SHOWING'),next:cur<total-1?(SLIDES[cur+1].title||SLIDES[cur+1].tag||'—'):'End of deck',notes:s.notes||'',canReveal:(s.type==='scenario'||!!s.cards)});}
function openQR(){qrModal.classList.add('open');initDisplayPeer();}
function closeQR(){qrModal.classList.remove('open');}
document.getElementById('remoteBtn').onclick=openQR;document.getElementById('qrClose').onclick=closeQR;
qrModal.addEventListener('click',e=>{if(e.target===qrModal)closeQR();});
document.getElementById('copyLink').onclick=()=>{navigator.clipboard&&navigator.clipboard.writeText(linkBox.textContent);toast('Link copied');};
function toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),2200);}

if(remoteId){
 isRemote=true;document.body.classList.add('remote-mode');
 const rmDot=document.getElementById('rmDot'),rmStat=document.getElementById('rmStat'),rmConnect=document.getElementById('rmConnect'),rmLive=document.getElementById('rmLive');
 const rmCounter=document.getElementById('rmCounter'),rmTitle=document.getElementById('rmTitle'),rmKicker=document.getElementById('rmKicker'),rmNext=document.getElementById('rmNext'),rmNotes=document.getElementById('rmNotes');
 let rState=null;
 function connectRemote(){rmDot.className='status-dot waiting';rmStat.textContent='connecting';
  if(typeof Peer==='undefined'){rmDot.className='status-dot err';rmStat.textContent='no internet';return;}
  peer=new Peer();
  peer.on('open',()=>{conn=peer.connect(remoteId,{reliable:true});
   conn.on('open',()=>{rmDot.className='status-dot live';rmStat.textContent='live';rmConnect.style.display='none';rmLive.style.display='flex';document.getElementById('rmRow2').style.display='flex';document.getElementById('rmControls').style.display='grid';conn.send({t:'req'});});
   conn.on('data',d=>{
     if(d.t==='state'){rState=d;paint(d);go(d.i,{broadcast:false});} /* mirror the live slide */
     else if(d.t==='sync'){const el=slideEls[d.i];if(!el)return;if(d.kind==='card'){const cs=el.querySelectorAll('[data-card]');if(cs[d.idx])revealCard(cs[d.idx]);}else if(d.kind==='area')doReveal(el);else if(d.kind==='sat')activateSat(el,d.idx);}
     else if(d.t==='poll'){const el=slideEls[d.i];if(el)pollAnswer(el,d.choice,false);}
   });
   conn.on('close',()=>{rmDot.className='status-dot err';rmStat.textContent='disconnected';setTimeout(connectRemote,1500);});});
  peer.on('error',err=>{rmDot.className='status-dot err';rmStat.textContent=(err.type||'error');rmConnect.querySelector('h2').textContent='Could not connect';rmConnect.querySelector('p').textContent='Make sure the presentation screen still has the QR dialog open, then reload this page.';});}
 function paint(d){rmCounter.textContent='Slide '+String(d.i+1).padStart(2,'0')+' / '+String(d.total).padStart(2,'0');rmKicker.textContent=d.kicker||'NOW SHOWING';rmTitle.textContent=d.title;rmNext.textContent=d.next;rmNotes.textContent=d.notes||'No speaker notes for this slide.';document.getElementById('rmReveal').style.opacity=d.canReveal?'1':'.4';}
 const rsend=o=>{if(conn&&conn.open)conn.send(o);};
 document.getElementById('rmPrev').onclick=()=>rsend({t:'nav',action:'prev'});
 document.getElementById('rmNext2').onclick=()=>rsend({t:'nav',action:'next'});
 document.getElementById('rmReveal').onclick=()=>rsend({t:'nav',action:'reveal'});
 const rmGrid=document.getElementById('rmGrid'),rmGridList=document.getElementById('rmGridList');let last=null,gh='';
 SLIDES.forEach((s,i)=>{if(s.section!==last){gh+=`<div class="sec-label">${s.section}</div>`;last=s.section;}gh+=`<div class="rm-gitem" data-g="${i}"><span class="gnum">${String(i+1).padStart(2,'0')}</span><span>${s.title||s.tag||'Cover'}</span></div>`;});
 rmGridList.innerHTML=gh;rmGridList.querySelectorAll('[data-g]').forEach(it=>it.onclick=()=>{rsend({t:'nav',action:'goto',i:parseInt(it.dataset.g,10)});rmGrid.classList.remove('open');});
 document.getElementById('rmGridBtn').onclick=()=>{rmGrid.classList.add('open');rmGridList.querySelectorAll('.rm-gitem').forEach(it=>it.classList.toggle('cur',rState&&parseInt(it.dataset.g,10)===rState.i));};
 document.getElementById('rmGridClose').onclick=()=>rmGrid.classList.remove('open');
 let secs=0,running=false,tInt=null;const rmTimer=document.getElementById('rmTimer');const fmt=s=>String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');
 document.getElementById('rmTimerBtn').onclick=()=>{running=!running;if(running)tInt=setInterval(()=>{secs++;rmTimer.textContent=fmt(secs);},1000);else clearInterval(tInt);};
 document.getElementById('rmTimerBtn').ondblclick=()=>{secs=0;rmTimer.textContent='00:00';};
 /* landscape => mirror the live desktop slide; portrait => presenter console */
 const mqLand=window.matchMedia('(orientation:landscape)');
 function applyMirror(){const on=mqLand.matches;document.body.classList.toggle('rm-mirror',on);if(on&&rState)go(rState.i,{broadcast:false});}
 mqLand.addEventListener?mqLand.addEventListener('change',applyMirror):mqLand.addListener(applyMirror);
 applyMirror();
 connectRemote();
}
go(0,{broadcast:false});
