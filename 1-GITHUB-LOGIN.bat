@echo off
title GitHub Login - ITSEC Presentation
echo ============================================================
echo   Step 1: Log in to GitHub
echo ============================================================
echo.
echo   A code will appear below. Your browser will open to
echo   https://github.com/login/device  -- type/paste the code
echo   and click Authorize.
echo.
echo ------------------------------------------------------------
"%LOCALAPPDATA%\gh-portable\bin\gh.exe" auth login --hostname github.com --git-protocol https --web
echo ------------------------------------------------------------
echo.
echo   If you see "Logged in as ..." above, you're done.
echo   Go back to Claude and say "logged in".
echo.
pause
