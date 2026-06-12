/* Tiny zero-dependency static server so the phone-remote QR works over your Wi-Fi.
   Run:  node serve.js   (or double-click START-PRESENTATION.bat)               */
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 8080;
const ROOT = __dirname;
const MIME = {'.html':'text/html','.js':'text/javascript','.css':'text/css','.png':'image/png',
  '.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.ico':'image/x-icon','.json':'application/json'};

function lanIP(){
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets))
    for (const ni of nets[name])
      if (ni.family === 'IPv4' && !ni.internal) return ni.address;
  return 'localhost';
}

http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/' || p === '') p = '/index.html';
  const file = path.join(ROOT, path.normalize(p).replace(/^(\.\.[\/\\])+/, ''));
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, {'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-cache'});
    res.end(data);
  });
}).listen(PORT, '0.0.0.0', () => {
  const ip = lanIP();
  console.log('\n  ====================================================');
  console.log('   ITSEC Cyber Defence Briefing — local server running');
  console.log('  ====================================================\n');
  console.log('   On THIS laptop, open:   http://localhost:' + PORT);
  console.log('   To present + use the phone remote, open:\n');
  console.log('        http://' + ip + ':' + PORT + '\n');
  console.log('   Then click the phone icon (top-right) and scan the QR');
  console.log('   with a phone on the SAME Wi-Fi.  Press Ctrl+C to stop.\n');
});
