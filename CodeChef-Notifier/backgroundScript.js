// backgroundScript.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'verdictAvailable') {
        const submissionId = message.submissionId
        const verdict = message.verdict
        showNotification(submissionId, verdict)
    }
})

function showNotification(submissionId, verdict) {
    chrome.notifications.create({
        type: 'basic',
        title: 'CodeChef Submission Verdict',
        message: `Submission ID: ${submissionId}\nVerdict: ${verdict}`,
        iconUrl: 'icon.png',
    })
}
