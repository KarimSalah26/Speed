var x1 = 0;
var y1 = 0;
var d1 = new Date();
var ts = 0;
			
document.getElementById("playground").onclick= function(){
				
	var x = Math.floor(Math.random()*256);
	var y = Math.floor(Math.random()*256);
	var z = Math.floor(Math.random()*256);
	var HW = Math.floor(Math.random() * (250 - 50)) + 50;
	var ML = Math.floor(Math.random() * (1200 - 20)) + 20;
	var MT = Math.floor(Math.random() * (420 - 20)) + 20;
	var a = Math.random()*10;
	var b = Math.floor(a);

	if ((b/2)-0.5 == Math.floor(b/2)){
	var c = "1"
	} else {			
	var c = "0"
	} ;

	var tsetclassElm = document.getElementsByClassName("testclass");

	for (i=0; i< tsetclassElm.length; i++) {
		tsetclassElm[i].style.backgroundColor = "rgb("+x+","+y+","+z+")";
		tsetclassElm[i].style.width= (HW+"px");
		tsetclassElm[i].style.height= (HW+"px");
		tsetclassElm[i].style.marginLeft= (ML+"px");
		tsetclassElm[i].style.marginTop= (MT+"px");
		tsetclassElm[i].style.borderRadius= (Number(c)*50+"%");
		};
	
	var d = new Date();
	if (x1 == 0) {x1 = d;} else {
		if (y1 > x1) {x1 = d;} else {y1 = d;}
		};
		
	if (y1 > x1) {var fx = y1-x1;} else {
		if (y1 == 0) {var fx = x1 - d1;} else {var fx = x1-y1;}
		};
	
	
	var n1 = 0;
	
	if (ts == 0) { ts = fx;} else { 
		if (fx < ts) {ts = fx;} else {ts = ts;}
		};			
		
	document.getElementById("timeresult").innerHTML = Number(fx) / 1000 + "s";
	document.getElementById("topscore").innerHTML = Number(ts) / 1000 + "s";
			
	};
