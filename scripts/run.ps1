# Set-Location to repo root
Set-Location $PSScriptRoot\..

# Check if .dev.local.ps1 exists, if not prompt for BACKEND_DIR
if (-not (Test-Path ".dev.local.ps1")) {
    Write-Host "First time setup - Backend directory not configured" -ForegroundColor Yellow
    $backendDir = Read-Host "Enter full path to orbs-astro-vedic-api (e.g. D:\ai chatbot)"
    
    # Create .dev.local.ps1
    @"
# Auto-generated local development configuration
`$env:BACKEND_DIR = "$backendDir"
"@ | Out-File -FilePath ".dev.local.ps1" -Encoding UTF8
    
    Write-Host "✅ Created .dev.local.ps1 with your backend path" -ForegroundColor Green
}

# Dot-source the local config
. ".dev.local.ps1"

# Set environment variables
$env:BACKEND_PORT = "4000"
$env:SITE_PORT = "3000"

Write-Host "🚀 Starting AI Integration Test Runner..." -ForegroundColor Cyan
Write-Host "🔮 Backend: $env:BACKEND_DIR" -ForegroundColor Gray
Write-Host "🔮 Backend Port: $env:BACKEND_PORT" -ForegroundColor Gray
Write-Host "🌐 Website Port: $env:SITE_PORT" -ForegroundColor Gray
Write-Host ""

# Run the Node.js script
node scripts/start-and-test.js
