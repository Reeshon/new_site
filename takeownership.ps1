# Remove read-only attributes from all files and folders within node_modules
attrib -R /S /D "C:\Users\reesh\websitenew\new_site\my-gatsby-site\node_modules\*"

# Take ownership of the node_modules directory
try {
    takeown /F "C:\Users\reesh\websitenew\new_site\my-gatsby-site\node_modules" /R /D Y
    # Enclose the username in quotes to handle special characters
    icacls "C:\Users\reesh\websitenew\new_site\my-gatsby-site\node_modules" /grant "`"$env:USERNAME`":F" /T
    Write-Output "Successfully took ownership and granted permissions for node_modules."
} catch {
    Write-Output "Failed to take ownership or grant permissions: $_"
    exit 1
}
# ...existing code...
