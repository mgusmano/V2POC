window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
    alert('error:')
    if (errorMsg != null && typeof errorMsg === 'object') {
        alert(Ext.encode(errorMsg));
    }
    else {
        alert(errorMsg);
    }
    alert(url);
    alert(lineNumber);
    return false;
}
