let color = '#3aa757';
let defaultHighlightSheet = "font-weight: 600;"
let defaultRestSheet = "opacity: 0.8;"

browser.runtime.onInstalled.addListener(()=>{
    browser.storage.sync.set({'highlightSheet' : defaultHighlightSheet, "restSheet": defaultRestSheet});
});
