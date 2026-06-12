@echo off
title ITSEC Cyber Defence Briefing - Server
cd /d "%~dp0"
echo Starting local server for the presentation + phone remote...
start "" node serve.js
timeout /t 2 >nul
for /f "tokens=2 delims=:" %%a in ('node -e "const o=require('os').networkInterfaces();for(const k in o)for(const n of o[k])if(n.family==='IPv4'&&!n.internal){console.log(':'+n.address);break}"') do set IP=%%a
if defined IP (
  start "" "http://%IP%:8080"
) else (
  start "" "http://localhost:8080"
)
echo.
echo The presentation should now open in your browser.
echo Keep THIS window open during the session. Close it to stop the server.
echo.
pause
