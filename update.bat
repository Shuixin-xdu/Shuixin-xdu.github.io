@echo off
chcp 65001 >nul

REM 静默执行，不显示具体过程
git add . >nul 2>&1
git commit -m "update: %date% %time%" >nul 2>&1
git push origin main >nul 2>&1

if %ERRORLEVEL% EQU 0 (
    echo ✅ 自动提交成功！
    timeout /t 2 /nobreak >nul
) else (
    echo ❌ 提交失败，请手动检查。
    timeout /t 3 /nobreak >nul
)