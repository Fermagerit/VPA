$base = 'c:\xampp\htdocs\VPA'
$files = Get-ChildItem -Path $base -Filter *.html | Where-Object { $_.Name -ne 'vpa_source.html' }
foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    $newContent = [regex]::Replace($content, 'href=("'"'|'''"')https?://voluntariosporafrica\.org[^"'"''']*("'"'|'''"')', 'href="#"')
    if ($content -ne $newContent) {
        [System.IO.File]::WriteAllText($file.FullName, $newContent, [System.Text.UTF8Encoding]::new($false))
        Write-Host "Modified: $($file.Name)"
    }
}
