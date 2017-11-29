// JavaScript Document
/*banner图片切换*/
var qtimer=qtimer1=null;
var qdang=0;
var qkey=qon=true;
/*图片切换*/
var hmtimer=hmtimer1=null;
var hmtimer2=null;  
var hmd=0;
var hmbo=hmk=true;

window.onload=function(){
	/*通栏广告*/
	  var oBanxiao=document.getElementById("banxiao");
	  var oClose=document.getElementById("close");
	  var aos=1;
	  oClose.onclick=function(evt){
		  var timr=setInterval(function(){
			  aos-=0.1;
			  if(aos<=0.00){
				  aos=0;
				  clearInterval(timr);
				oBanxiao.remove();
			  }
			   oBanxiao.style.opacity=aos;
		  },30);
		  evt.stopPropagation();
	  }
	/*搜索框*/
	var oSearch=document.getElementById("search");
	var aInput=oSearch.getElementsByTagName("input");
	var aLink=oSearch.getElementsByTagName("a");
	for(var i=0;i<aLink.length;i++){
		aLink[i].onclick=function(){
			aInput[0].value=this.innerHTML;
		}
	}
	var oValue=aInput[0].value;
		aInput[0].onfocus=function(){
			if(this.value==oValue){
				this.value="";
			}
		}
			aInput[0].onblur=function(){
			if(this.value==""){
				this.value=oValue;
			}
		}
		aInput[1].onclick=function(){
			if(aInput[0].value==""){
				alert("请输入关键字");
				aInput[0].focus();
				return;
			}
		}
	/*侧栏菜单*/
	var oMain1_1_lf=document.getElementById("main1_1_lf");
	var oCe_nav=document.getElementById("ce_nav");
	var aLi=oMain1_1_lf.getElementsByTagName("li");
	var aSpan1=oMain1_1_lf.getElementsByTagName("span");
	var aDiv=oCe_nav.getElementsByClassName("ce_nav_no1");
	//alert(aDiv.length);
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			oCe_nav.style.display="block";
			for(var j=0;j<aDiv.length;j++){
				aDiv[j].style.display="none";
				aLi[j].className="";
			}
			aDiv[this.index].style.display="block";
			this.className="acac";
			aSpan1[this.index].className="aac";
		}
		aLi[i].onmouseout=function(){
			oCe_nav.style.display="none";
		}
		oCe_nav.onmouseover=function(){
		this.style.display="block";
	}
		oCe_nav.onmouseout=function(){
			this.style.display="none";
		}
	}

	
	/*banner图片切换*/
	var oM1=document.getElementById("main1_1_m");
	var oQh=document.getElementById("qiehuan1");
	var qaSpan=oM1.getElementsByTagName("span");
	var Ali=oQh.getElementsByTagName("li");
	var qaLin=qaSpan[0].getElementsByTagName("a");
	var wL=730;
	oQh.style.width=Ali.length*wL+"px";
	oM1.onmouseover=function(){
		qaSpan[1].style.display="block";
		qaSpan[2].style.display="block";
		clearInterval(qtimer);
	}
	oM1.onmouseout=function(){
		qaSpan[1].style.display="none";
		qaSpan[2].style.display="none";
			qtimer=setInterval(function(){
				fn(qkey)
				},5000);
	}

	qtimer=setInterval(function(){
		fn(qkey);
	},5000);
	
	qaSpan[1].onclick=function(){
		fn(qkey,qon);
	}
	qaSpan[2].onclick=function(){
		fn(!qkey);
	}
	
	for(var qi=0;qi<qaLin.length;qi++){
		qaLin[qi].index=qi;
		qaLin[qi].onclick=function(){
			qdang=this.index;
			var qiLf=parseInt(oQh.style.left);
			clearInterval(qtimer1)
			if(qiLf>qdang*(-wL)){
				qtimer1=setInterval(function(){
					qGo(oQh,qdang*(-wL),qon);
				},100);
			}
			else{
				qtimer1=setInterval(function(){
						qGo(oQh,qdang*(-wL),!qon);
				},100);
			}
			getSty(qaLin);
		}
	}//for循环
	
	function fn(qkey){
		clearInterval(qtimer1)//避免运动叠加
		if(qkey){
			qdang++;
				if(qdang>Ali.length-1){
					oQh.style.left=0+"px";
					qdang=1;
				}
				qtimer1=setInterval(function(){
					qGo(oQh,qdang*(-wL),qon);
				},100);
			}
			else{
				qdang--;
				if(qdang<0){
					oQh.style.left=(Ali.length-1)*(-wL)+"px";
					qdang=Ali.length-2;
				}
				qtimer1=setInterval(function(){
						qGo(oQh,qdang*(-wL),!qon);
				},100);
			}
			 getSty(qaLin);
	}
	
	
	/*图片切换*/
	var oMain1_2_2=document.getElementById("main1_2_2");
	var oMul=oMain1_2_2.getElementsByTagName("ul")[0];
	var hmaLi=oMul.getElementsByTagName("li");
	var hmaSpan=oMain1_2_2.getElementsByTagName("span");
	var hmz=(hmaLi.length)/4;
	oMain1_2_2.onmouseover=function(){
		hmaSpan[0].style.display="block";
		hmaSpan[1].style.display="block";
	}
	oMain1_2_2.onmouseout=function(){
		hmaSpan[0].style.display="none";
		hmaSpan[1].style.display="none";
	}

	hmaSpan[0].onclick=function(){
		hmqh(oMul,hmz,hmbo,1000);
	}
	hmaSpan[1].onclick=function(){
		hmqh(oMul,hmz,!hmbo,1000);
	}
	
/*	Tab菜单切换（floor）*/
   var oFloor12_lf_1_1=document.getElementById("Floor12_lf_1_1");
   var aLii1=oFloor12_lf_1_1.getElementsByTagName("li");
   var aSSpan=oFloor12_lf_1_1.getElementsByTagName("span");
   var oFloor12_tab0=document.getElementById("Floor12_tab0");
   var aDIv=oFloor12_tab0.getElementsByClassName("Floor12_tab");
   
	Tabb(aLii1,aDIv,aSSpan)  
   var oFloor12_lf_2_1=document.getElementById("Floor12_lf_2_1");
   var aLii2=oFloor12_lf_2_1.getElementsByTagName("li");
   var aSSpan1=oFloor12_lf_2_1.getElementsByTagName("span");
   var oFloor12_tab01=document.getElementById("Floor12_tab01");
   var aDIv1=oFloor12_tab01.getElementsByClassName("Floor12_tab");
	Tabb(aLii2,aDIv1,aSSpan1)  
	
	/*Tab切换--幻灯片(-)*/
	var oQiehuan=document.getElementById("qiehuan2");
	var oUlq=oQiehuan.getElementsByTagName("ul")[0];
	var aLiq=oQiehuan.getElementsByTagName("li");
	var aSpanl=oQiehuan.getElementsByTagName("span");
	var aLinkqh=aSpanl[0].getElementsByTagName("a");
	
	var timer2=null,timer3=null;
	var aindex=0/*,mu=-439*/;
	var bo=on=true;
	oQiehuan.onmouseover=function(){
		aSpanl[1].style.display="block";
		aSpanl[2].style.display="block";
		clearInterval(timer3);
	}
	oQiehuan.onmouseout=function(){
		aSpanl[1].style.display="none";
		aSpanl[2].style.display="none";
		timer3=setInterval(function(){
			GoLeft(bo,aLiq,oUlq,aLinkqh,oUlq,(-439))
		},2000);
	}
		timer3=setInterval(function(){
			GoLeft(bo,aLiq,oUlq,aLinkqh,oUlq,(-439))
		},2000);
		
		aSpanl[1].onclick=function(){
			GoLeft(bo,aLiq,oUlq,aLinkqh,oUlq,(-439))
		}
		aSpanl[2].onclick=function(){
			GoLeft(!bo,aLiq,oUlq,aLinkqh,oUlq,(-439))
	}
	for(var j=0;j<aLinkqh.length;j++){
		aLinkqh[j].index=j;
		aLinkqh[j].onclick=function(){
			aindex=this.index;
			var j_lf=parseInt(getStyle(oUlq,"left"));
			if(j_lf>aindex*(-439)){
				timer2=setInterval(function(){
					Qie(oUlq,aindex*(-439),on);
				},30);
			}
			else{
					timer2=setInterval(function(){
					Qie(oUlq,aindex*(-439),!on);
				},30);
			}
			geS()
		}
	}
	
	function GoLeft(bo,obj1,obj2,obj3,obj2,num){
		clearInterval(timer2);
		if(bo){
			aindex++;
			if(aindex>obj1.length-1){
				obj2.style.left=0+"px";
				aindex=1;
			}
			timer2=setInterval(function(){
				Qie(obj2,aindex*num,on,obj2);
			},30);
		}
		else{
			aindex--;
			if(aindex<0){
				obj2.style.left=(obj1.length-1)*num+"px";
				aindex=obj1.length-2;
			}
			timer2=setInterval(function(){
				Qie(obj2,aindex*num,!on,obj2);
			},30);
		}
		geS(obj3)
	}

	function geS(obj){
			for(var i=0;i<obj.length;i++){
				obj[i].className="";
			}
			obj[aindex%4].className="on";
	}
	
	function Qie(obj,obj2,on,obj1){
		var iLF=parseInt(getStyle(obj1,"left"));
		var speed=Math.ceil(Math.abs(obj2-iLF)/4);
		if(on){
			iLF-=speed;
			if(iLF<=obj2){
				iLF=obj2;
				clearInterval(timer2);
			}
		}
		else{
			iLF+=speed;
			if(iLF>=obj2){
				iLF=obj2;
				clearInterval(timer2);
			}
		}
		obj.style.left=iLF+"px";
	}
	
	/*Tab切换--幻灯片（二）*/
	var oQiehuan1=document.getElementById("Beauty_tab1_lf");
	var oUlq1=oQiehuan1.getElementsByTagName("ul")[0];
	var aLiq1=oQiehuan1.getElementsByTagName("li");
	var aSpanl1=oQiehuan1.getElementsByTagName("span");
	var aLinkqh1=aSpanl1[0].getElementsByTagName("a");

	var timer21=null,timer31=null;
	var aindex1=0/*,mu=-439*/;
	var bo1=on1=true;
	oQiehuan1.onmouseover=function(){
		aSpanl1[1].style.display="block";
		aSpanl1[2].style.display="block";
		clearInterval(timer31);
	}
	oQiehuan1.onmouseout=function(){
		aSpanl1[1].style.display="none";
		aSpanl1[2].style.display="none";
		timer31=setInterval(function(){
			GoLeft1(bo1,aLiq1,oUlq1,aLinkqh1,oUlq1,(-339))
		},2000);
	}
		timer31=setInterval(function(){
			GoLeft1(bo1,aLiq1,oUlq1,aLinkqh1,oUlq1,(-339))
		},2000);
		
		aSpanl1[1].onclick=function(){
			GoLeft1(bo1,aLiq1,oUlq1,aLinkqh1,oUlq1,(-339))
		}
		aSpanl1[2].onclick=function(){
			GoLeft1(!bo1,aLiq1,oUlq1,aLinkqh1,oUlq1,(-339))
	}
	for(var j=0;j<aLinkqh1.length;j++){
		aLinkqh1[j].index=j;
		aLinkqh1[j].onclick=function(){
			aindex1=this.index;
			var j_lf=parseInt(getStyle(oUlq1,"left"));
			if(j_lf>aindex1*(-339)){
				timer21=setInterval(function(){
					Qie1(oUlq1,aindex1*(-339),on1);
				},30);
			}
			else{
					timer21=setInterval(function(){
					Qie1(oUlq1,aindex1*(-339),!on1);
				},30);
			}
			geS1()
		}
	}
	
	function GoLeft1(bo1,obj1,obj2,obj3,obj2,num){
		clearInterval(timer21);
		if(bo1){
			aindex1++;
			if(aindex1>obj1.length-1){
				obj2.style.left=0+"px";
				aindex1=1;
			}
			timer21=setInterval(function(){
				Qie1(obj2,aindex1*num,on1,obj2);
			},30);
		}
		else{
			aindex1--;
			if(aindex1<0){
				obj2.style.left=(obj1.length-1)*num+"px";
				aindex1=obj1.length-2;
			}
			timer21=setInterval(function(){
				Qie1(obj2,aindex1*num,!on1,obj2);
			},30);
		}
		geS1(obj3)
	}

	function geS1(obj){
			for(var i=0;i<obj.length;i++){
				obj[i].className="";
			}
			obj[aindex1%4].className="on";
	}
	
	function Qie1(obj,obj2,on1,obj1){
		var iLF=parseInt(getStyle(obj1,"left"));
		var speed=Math.ceil(Math.abs(obj2-iLF)/4);
		if(on1){
			iLF-=speed;
			if(iLF<=obj2){
				iLF=obj2;
				clearInterval(timer21);
			}
		}
		else{
			iLF+=speed;
			if(iLF>=obj2){
				iLF=obj2;
				clearInterval(timer21);
			}
		}
		obj.style.left=iLF+"px";
	}
	/*光束*/
	var oLigh=document.getElementById("light1");
	var oFloor12_lf_1=document.getElementById("Floor12_lf_1");

	Light(oFloor12_lf_1,oLigh);
	var oLigh1=document.getElementById("light2");
	var oBeauty_lf_1=document.getElementById("Beauty_lf_1");
	Light(oBeauty_lf_1,oLigh1);
	
	/*回到顶部*/
	var oGoTop=document.getElementById("goTop");
	var oGoi=oGoTop.getElementsByTagName("i")[0];
	var oGem=oGoTop.getElementsByTagName("em")[0];
	//var oGa=oGoTop.getElementsByTagName("a")[0];
	oGoTop.onmouseover=function(){
		oGoi.style.background="#c81623";
		oGem.style.opacity="1";
		oGem.style.background="#c81623";
	}
	oGoTop.onmouseout=function(){
		oGoi.style.background="#7a6e6e";
		oGem.style.opacity="0";
	}
	oGoTop.onclick=function(){
		document.documentElement.scrollTop=document.body.scrollTop=0;
	}

}//window.onload


function getStyle(obj,attr){
	return window.getComputedStyle?window.getComputedStyle(obj,null)[attr]:obj.currentStyle[attr];
}
	/*banner图片切换*/
function qGo(obj,mu,qon){
	var qLf=parseInt(obj.style.left);
	var qspeed=Math.ceil(Math.abs(mu-qLf)/4);
	if(qon){
			qLf-=qspeed;
			if(qLf<=mu){
				qLf=mu;
				clearInterval(qtimer1);
			}
	}
	else{
		qLf+=qspeed;
		if(qLf>=mu){
			qLf=mu;
			clearInterval(qtimer1);
		}
	}

	obj.style.left=qLf+"px";
}
function getSty(obj){
		for(var i=0;i<obj.length;i++){
			obj[i].className="";
		}
		obj[qdang%6].className="active";
}

	/*图片切换*/
function hmqh(obj,num1,hmbo,hmjnum){
	clearInterval(hmtimer1);
		if(hmbo){
			hmd++;
			if(hmd>(num1-1)){
				obj.style.left=0+"px";
				hmd=1;
			}
			hmtimer1=setInterval(function(){
				hmgo(obj,0-hmd*hmjnum,hmk);
			},50);
		}
		else{
			hmd--;
			if(hmd<0){
				obj.style.left=0-(num1-1)*hmjnum+"px";
				hmd=num1-2;
			}
			hmtimer1=setInterval(function(){
				hmgo(obj,0-hmd*hmjnum,!hmk);
			},50);
		}		
}
function hmgo(obj,num,hmk){
	var hmLef=parseInt(obj.style.left);
	var speed=Math.ceil(Math.abs(num-hmLef)/4);
	if(hmk){
		hmLef-=speed;
		if(hmLef<=num){
			hmLef=num;
			clearInterval(hmtimer1);
		}
	}
	else{
		hmLef+=speed;
		if(hmLef>=num){
			hmLef=num;
			clearInterval(hmtimer1);
		}
	}	
	obj.style.left=hmLef+"px";
}


/*	Tab菜单切换（floor）*/
function Tabb(obj1,obj2,obj3){
	for(var i=0;i<obj1.length;i++){
		obj1[i].index=i;
		obj1[i].onmouseover=function(){
			for(var j=0;j<obj2.length;j++){
				obj2[j].className="Floor12_tab";
				obj1[j].className="";
			}
			if(this.index==0){
				obj2[this.index].className="Floor12_tab muqian";
			}
			else{
			obj2[this.index].className="Floor12_tab Floor12_tab2 muqian";
			}
			this.className="active";
			obj3[this.index].className="activ";
		}//onmouseover
	}//for循环
}


/*光束*/
function Light(obj1,obj2){
	var tem=null;
	obj1.onmouseenter=function(){
		obj2.style.left=-150+"px";
		tem=setInterval(function(){
			var oLIlf=parseInt(obj2.style.left);
			oLIlf+=20;
			if(oLIlf>=450){
			oLIlf=450;
			clearInterval(tem);
			}
			obj2.style.left=oLIlf+"px";
		},20);
	}
}