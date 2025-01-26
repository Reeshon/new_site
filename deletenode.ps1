
# Remove read-only attributes from all files and folders within node_modules
Get-ChildItem -Path "C:\Users\reesh\websitenew\new_site\my-gatsby-site\node_modules" -Recurse | 
    ForEach-Object { $_.IsReadOnly = $false }

# Take ownership of the node_modules folder recursively
takeown /F "C:\Users\reesh\websitenew\new_site\my-gatsby-site\node_modules" /R /D Y

# Grant full control permissions to the current user recursively
icacls "C:\Users\reesh\websitenew\new_site\my-gatsby-site\node_modules" /grant %USERNAME%:F /T

# Remove the node_modules folder forcefully and recursively
Remove-Item -Recurse -Force "C:\Users\reesh\websitenew\new_site\my-gatsby-site\node_modules"