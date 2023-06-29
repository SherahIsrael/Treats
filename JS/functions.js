
// Open and Close All Modals
function show(nodename) {
	document.getElementById(nodename).style.display='block';
	document.getElementById(nodename).style.zIndex=3;
}

function hide(nodename) {
	document.getElementById(nodename).style.display='none';
	document.getElementById(nodename).style.zIndex=0;
}
