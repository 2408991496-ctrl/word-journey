@echo off
chcp 65001 >nul
cd /d "%~dp0"
set "WJ_NODE="
for /f "delims=" %%i in ('where node 2^>nul') do if not defined WJ_NODE set "WJ_NODE=%%i"
if not defined WJ_NODE if exist "%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" set "WJ_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if not defined WJ_NODE (
 echo 请先安装 Node.js 20.19 或更新版本，再双击此文件。
 pause
 exit /b 1
)
echo 请在浏览器打开 http://127.0.0.1:4173
echo 使用期间请保留这个窗口；关闭窗口会停止本地网页服务。
start "" "http://127.0.0.1:4173"
"%WJ_NODE%" start-server.cjs
pause
