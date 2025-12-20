@echo off
echo ===========================
echo    AUTO DEPLOY TO GITHUB
echo ===========================
echo.

:: 提交并推送
git add . > nul 2>&1
git commit -m "Update: %date% %time%" > nul 2>&1
git push origin main > nul 2>&1

:: 检查是否成功
if %errorlevel% equ 0 (
    echo ✓ Successfully deployed!
    echo   Site will update in 1-2 minutes
    timeout /t 3 /nobreak > nul
) else (
    echo ✗ Deployment failed
    echo   Please check git status
    timeout /t 5 /nobreak > nul
)

:: 自动关闭窗口
exit