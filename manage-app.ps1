# Territory Education Web Application - PowerShell Script
# Usage: .\manage-app.ps1 [command]
# Commands: start, build, install, test

param(
    [Parameter(Mandatory=$false)]
    [string]$Command = "start"
)

Write-Host "Territory Education Web Application Manager" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""

switch ($Command.ToLower()) {
    "start" {
        Write-Host "Starting development server..." -ForegroundColor Yellow
        Write-Host "Application will be available at: http://localhost:5173" -ForegroundColor Cyan
        Write-Host ""
        npm run dev
    }
    "build" {
        Write-Host "Building application for production..." -ForegroundColor Yellow
        npm run build
        Write-Host ""
        Write-Host "Build completed! Files are in the 'dist' folder." -ForegroundColor Green
    }
    "install" {
        Write-Host "Installing dependencies..." -ForegroundColor Yellow
        npm install
        Write-Host ""
        Write-Host "Dependencies installed successfully!" -ForegroundColor Green
    }
    "test" {
        Write-Host "Testing server connectivity..." -ForegroundColor Yellow
        $testResult = Test-NetConnection -ComputerName localhost -Port 5173 -WarningAction SilentlyContinue
        if ($testResult.TcpTestSucceeded) {
            Write-Host "✓ Server is running on port 5173" -ForegroundColor Green
        } else {
            Write-Host "✗ Server is not running" -ForegroundColor Red
            Write-Host "Run '.\manage-app.ps1 start' to start the server" -ForegroundColor Yellow
        }
    }
    default {
        Write-Host "Available commands:" -ForegroundColor Yellow
        Write-Host "  start   - Start development server" -ForegroundColor White
        Write-Host "  build   - Build for production" -ForegroundColor White
        Write-Host "  install - Install dependencies" -ForegroundColor White
        Write-Host "  test    - Test server connectivity" -ForegroundColor White
        Write-Host ""
        Write-Host "Example: .\manage-app.ps1 start" -ForegroundColor Cyan
    }
}