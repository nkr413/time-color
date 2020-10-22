function dateFunc() {
	let time = new Date();
  let h = time.getHours().toString();
  let m = time.getMinutes().toString();
  let s = time.getSeconds().toString();

  if (h.length < 2) h = "0" + h;    
  if (m.length < 2) m = "0" + m;    
  if (s.length < 2) s = "0" + s;    
    
	document.getElementById("time").innerHTML = h + " : " + m + " : " + s;
  document.getElementById("code").innerHTML = "#" + h + m + s;
  document.body.style.background = "#" + h + m + s;
}
dateFunc();
setInterval(dateFunc, 1000);




