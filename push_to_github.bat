@echo off
echo ===================================================
echo Pushing Shashi Singh Portfolio to GitHub...
echo Repository: https://github.com/shashicgifx/shashi-portfolio
echo ===================================================
cd /d "C:\Users\mrsar\.gemini\antigravity\scratch\shashi-portfolio"
git push -u origin main
echo.
echo ===================================================
if %ERRORLEVEL% EQU 0 (
    echo SUCCESS! Your code is now live on GitHub.
    echo Now open https://vercel.com/new and click Deploy!
) else (
    echo If this failed, make sure you created the repo 'shashi-portfolio' at:
    echo https://github.com/new
)
echo ===================================================
pause
