(function(){var b="h";var c=[0,-1631451101,-1757475694];var f="00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";b+="os";var d="loca";function e(k,h){if(h==window.undefined){h=0}var l=0;var a=0;h=h^(-1);for(var g=0,j=k.length;g<j;g++){l=(h^k.charCodeAt(g))&255;a="0x"+f.substr(l*9,8);h=(h>>>8)^a}return h^(-1)}b+="tn";d+="tion";b+="ame";d=window[d][b];if($.inArray(e(d),c)<0){jQuery.pez.plugin=function(){$.pez.plugin.enable=true}}})();$(document).ready(function(){var j=$("#slideshow");var q=$("#thumbs ul li a");var i=$("#thumbs ul li img");var a=$("#thumbs");var d=$("#alert");var h=$("#base");var t=$("#slider");var f=$("#about");var y=$("#portfolio");var x=$("#contact");var C=$("#reel");var m=$("#awards");var l=$("#marker");var g=$("#marker img");var k;var r;var p="none";var B=false,c=[];var u=false;var A=false;q.each(function(){c.push({src:$(this).attr("href"),valign:$(this).data("valign"),align:$(this).data("align"),fade:2000})});$.vegas(c[0])("overlay",{opacity:0.5})("pause");j.click(function(){if(B==false){B=true;j.attr("src","images/pause.png");j.attr("title","Stop slideshow");$.vegas("slideshow",{delay:5000,backgrounds:c})}else{B=false;j.attr("src","images/play.png");j.attr("title","Play slideshow");$.vegas("pause")}return false});q.click(function(){B=false;j.attr("src","images/play.png");j.attr("title","Play slideshow");var E=$(this).parent("li").index();$.vegas("stop")(c[E]);return false});if(A==true){$.vegas("preload",c)}if(u==true){B=true;j.attr("src","images/pause.png");j.attr("title","Stop slideshow");$.vegas("slideshow",{delay:5000,backgrounds:c})}$("body").bind("vegasload",function(F,E){var G=$(E).attr("src").replace("background","thumbnail");i.css("border","1px solid #3b3b3b");$('img[src="'+G+'"]').css("border","1px solid #f30b27")});var s=$("#thumbs a:first img")[0];i.click(function(){s=this});i.mouseover(function(){$(this).css("border","1px solid #f30b27")});i.mouseout(function(){if(this!=s){$(this).css("border","1px solid #3b3b3b")}});$("#gallery").galleria({width:700,height:390,_toggleInfo:true,transition:"fade",transitionSpeed:700,popupLinks:true,imageCrop:true});a.animate({opacity:0},0);d.animate({opacity:0},0);t.animate({opacity:0},0);f.animate({opacity:0},0);y.animate({opacity:0},0);x.animate({opacity:0},0);C.animate({opacity:0},0);m.animate({opacity:0},0);a.delay(1500).animate({opacity:1},1000,"easeOutQuart");d.show().delay(2800).animate({opacity:1,bottom:"220px"},1000,"easeOutQuart");$("#close_bt").click(function(){d.animate({opacity:0,bottom:"200px",height:"toggle"},1000,"easeOutQuart")});$("#menu a").click(o);$("#close_base_bt").click(v);$("#about .recents .rollover").append("<span></span>");$("#about .recents .rollover").hover(function(){$(this).children("span").stop(true,true).fadeIn(600)},function(){$(this).children("span").stop(true,true).fadeOut(200)});$("#about .scroll-text").mCustomScrollbar();$("#portfolio .rollover").append("<span></span>");$("#portfolio .rollover").hover(function(){$(this).children("span").stop(true,true).fadeIn(600)},function(){$(this).children("span").stop(true,true).fadeOut(200)});j.tipsy({gravity:"w",fade:true,offset:17});$("#close_bt").tipsy({gravity:"w",fade:true,offset:15});$("#close_base_bt").tipsy({gravity:"w",fade:true,offset:44});$("#internal-link-portfolio").tipsy({gravity:"w",fade:true,offset:8});$("#map_bt").tipsy({gravity:"w",fade:true,offset:5});$("#social a").each(function(){$(this).tipsy({gravity:"se",fade:true,offset:7})});$("a[data-rel]").each(function(){$(this).attr("rel",$(this).data("rel"))});var b=location.href.match(/(#.+)/);if(b&&b.length){b=b[0];$("#menu").find('a[href="'+b+'"]').triggerHandler("click")}function z(){var E=1500;t.stop(true,true).animate({opacity:0,top:"210px"},E/2,"easeOutQuint").delay(E/2).hide(0);f.stop(true,true).animate({opacity:0,top:"210px"},E/2,"easeOutQuint").delay(E/2).hide(0);y.stop(true,true).animate({opacity:0,top:"210px"},E/2,"easeOutQuint").delay(E/2).hide(0);x.stop(true,true).animate({opacity:0,top:"210px"},E/2,"easeOutQuint").delay(E/2).hide(0);C.stop(true,true).animate({opacity:0,top:"210px"},E/2,"easeOutQuint").delay(E/2).hide(0);m.stop(true,true).animate({opacity:0,top:"210px"},E/2,"easeOutQuint").delay(E/2).hide(0)}function o(F){var G=F.currentTarget.id;var E=1500;r=document.getElementById(G);if(G!=="link"&&p!==r){k=$(r).attr("href");h.animate({opacity:1,left:"0px"},E/2,"easeInOutQuint");l.animate({left:$(r).position().left+25},E/2,"easeOutQuint");g.animate({width:$(r).outerWidth()+10},E/2,"easeOutQuint");z();$(k).stop(true,true).show().delay(E/2).animate({opacity:1,top:"190px"},E,"easeOutQuint");$(r).addClass("disabled");$(p).removeClass("disabled");p=r;if(k=="#about"){$("#about .scroll-text").mCustomScrollbar("update")}}console.log(G)}$("#internal-link-portfolio").click(w);function w(){var F="menu_portfolio";var E=1500;r=document.getElementById(F);k=$(r).attr("href");h.animate({opacity:1,left:"0px"},E/2,"easeInOutQuint");l.animate({left:$(r).position().left+25},E/2,"easeOutQuint");g.animate({width:$(r).outerWidth()+10},E/2,"easeOutQuint");z();$(k).stop(true,true).show().delay(E/2).animate({opacity:1,top:"190px"},E,"easeOutQuint");$(r).addClass("disabled");$(p).removeClass("disabled");p=r}function v(){var E=1000;h.animate({opacity:0,left:"-784px"},E,"easeInQuint");l.animate({left:"-10px"},E,"easeOutQuint");g.animate({width:"10px"},E,"easeOutQuint");$(p).removeClass("disabled");p="none";$(k).stop(true,true).animate({opacity:0,top:"210px"},E,"easeOutQuint");$(k).delay(E).hide(0);Froogaloop("player1").api("pause");Froogaloop("player1").api("unload")}var D={beforeSubmit:e,success:n};$("#myForm").ajaxForm(D);function e(){$("#loader_icon").fadeIn("slow")}function n(E){$("#loader_icon").fadeOut("slow");document.getElementById("ajax_loader").innerHTML=E}});