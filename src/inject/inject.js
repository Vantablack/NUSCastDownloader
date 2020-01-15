var readyStateCheckInterval = setInterval(function() {
  console.log('test');
  if (document.readyState === "complete" && document.getElementById('podcastDownload').getAttribute("style")) {
    clearInterval(readyStateCheckInterval);

    function isDownloadLinkHidden(element) {
      return element.getAttribute("style").includes("hidden");
    }

    console.log("[+] hello there :-) ");
    console.log("[+] thank you for using NUSCast Downloader!!!");
    console.log("[+] you can log issues @ https://github.com/jiachen247/NUSCastDownloader");

    const e = document.getElementById('podcastDownload');

    if (isDownloadLinkHidden(e)) {
      e.removeAttribute('style');
      const mp4Link = document.querySelector("meta[name='twitter:player:stream']").getAttribute("content");
      e.onclick = () => window.open(mp4Link, '_blank');
    }
  }
}, 500);