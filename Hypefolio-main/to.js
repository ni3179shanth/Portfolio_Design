document.addEventListener('DOMContentLoaded', function () {
    updateViewerCount();
});

function updateViewerCount() {
    let viewerCount = localStorage.getItem('viewerCount') || 0;

    // Increment the viewer count
    viewerCount++;

    // Update the local storage
    localStorage.setItem('viewerCount', viewerCount);

    // Display the viewer count
    document.getElementById('viewer-count').innerText = `Viewer Count: ${viewerCount}`;

    // Update the count every 10 seconds (adjust as needed)
    setTimeout(updateViewerCount, 10000);
}
