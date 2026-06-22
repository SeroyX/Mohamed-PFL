# Portfolio Setup Script
# Run this script to prepare your images for the portfolio

Write-Host "Setting up your portfolio..." -ForegroundColor Cyan

# Create public directories if they don't exist
Write-Host "`nCreating directories..." -ForegroundColor Yellow
$publicDirs = @(
    "public\Projects Pics",
    "public\Workshops"
)

foreach ($dir in $publicDirs) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
        Write-Host "  Created $dir" -ForegroundColor Green
    }
    else {
        Write-Host "  $dir exists" -ForegroundColor Green
    }
}

# Copy Me.jpg if it exists in root
if (Test-Path "Me.jpg") {
    Copy-Item "Me.jpg" -Destination "public\Me.jpg" -Force
    Write-Host "  Copied Me.jpg to public folder" -ForegroundColor Green
}

# Copy project pics if they exist
if (Test-Path "Projects Pics") {
    Copy-Item "Projects Pics\*" -Destination "public\Projects Pics\" -Force -ErrorAction SilentlyContinue
    $picCount = (Get-ChildItem "public\Projects Pics" -File -ErrorAction SilentlyContinue).Count
    Write-Host "  Copied $picCount project images" -ForegroundColor Green
}

# Copy workshop photos if they exist
if (Test-Path "Workshops") {
    Copy-Item "Workshops\*" -Destination "public\Workshops\" -Force -ErrorAction SilentlyContinue
    $workshopCount = (Get-ChildItem "public\Workshops" -File -ErrorAction SilentlyContinue).Count
    Write-Host "  Copied $workshopCount workshop photos" -ForegroundColor Green
}

Write-Host "`nSetup complete!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "  1. Run: npm install" -ForegroundColor White
Write-Host "  2. Run: npm run dev" -ForegroundColor White
Write-Host "  3. Open: http://localhost:5173" -ForegroundColor White
Write-Host "`nSee QUICKSTART.md for detailed instructions." -ForegroundColor Gray
