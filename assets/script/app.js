
var domainroot = "https://www.google.com/"
function Gsitesearch(curobj) {
    curobj.q.value = "site:" + domainroot + " " + curobj.qfront.value
}