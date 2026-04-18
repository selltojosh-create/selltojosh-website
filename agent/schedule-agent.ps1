# Schedule SellToJosh SEO Agent — runs every Monday at 1:00 AM
# Run this script once as Administrator to create the scheduled task.

$taskName = "SellToJosh-SEO-Agent"
$nodePath = (Get-Command node).Source
$scriptPath = "C:\Users\joshi\selltojosh\agent\seo-agent.js"
$logPath = "C:\Users\joshi\selltojosh\reports\agent-log.txt"

$action = New-ScheduledTaskAction `
    -Execute "cmd.exe" `
    -Argument "/c `"`"$nodePath`" `"$scriptPath`" >> `"$logPath`" 2>&1`"" `
    -WorkingDirectory "C:\Users\joshi\selltojosh\agent"

$trigger = New-ScheduledTaskTrigger -Weekly -DaysOfWeek Monday -At 1:00AM

$settings = New-ScheduledTaskSettingsSet `
    -StartWhenAvailable `
    -DontStopIfGoingOnBatteries `
    -AllowStartIfOnBatteries

# Remove existing task if it exists
$existing = Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue
if ($existing) {
    Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
    Write-Host "Removed existing task '$taskName'"
}

Register-ScheduledTask `
    -TaskName $taskName `
    -Action $action `
    -Trigger $trigger `
    -Settings $settings `
    -Description "Weekly SEO performance report from Google Search Console" `
    -RunLevel Highest

Write-Host "Scheduled task '$taskName' created successfully."
Write-Host "  Runs: Every Monday at 1:00 AM"
Write-Host "  Command: $nodePath $scriptPath"
Write-Host "  Log: $logPath"
