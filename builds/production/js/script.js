!function e(t,r,n){function i(s,l){if(!r[s]){if(!t[s]){var c="function"==typeof require&&require;if(!l&&c)return c(s,!0);if(a)return a(s,!0);throw new Error("Cannot find module '"+s+"'")}var o=r[s]={exports:{}};t[s][0].call(o.exports,function(e){var r=t[s][1][e];return i(r||e)},o,o.exports,e,t,r,n)}return r[s].exports}for(var a="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s]);return i}({1:[function(e,t,r){d3.json("./data/r2016Summary.json",function(e,t){d3.json("./data/demographics.json",function(e,r){d3.json("./data/d2016Summary.json",function(e,n){d3.json("./data/r2008Summary.json",function(e,i){d3.json("./data/d2008Summary.json",function(e,a){function s(e,t,r,n,i){d3.select(e).selectAll(".card").sort(function(e,t){if("rubio"==n){if("descend"==i)return d3.descending(e.RubioPct,t.RubioPct);if("ascend"==i)return d3.ascending(e.RubioPct,t.RubioPct)}if("cruz"==n){if("descend"==i)return d3.descending(e.CruzPct,t.CruzPct);if("ascend"==i)return d3.ascending(e.CruzPct,t.CruzPct)}if("trump"==n){if("descend"==i)return d3.descending(e.TrumpPct,t.TrumpPct);if("ascend"==i)return d3.ascending(e.TrumpPct,t.TrumpPct)}if("carson"==n){if("descend"==i)return d3.descending(e.CarsonPct,t.CarsonPct);if("ascend"==i)return d3.ascending(e.CarsonPct,t.CarsonPct)}if("kasich"==n){if("descend"==i)return d3.descending(e.KasichPct,t.KasichPct);if("ascend"==i)return d3.ascending(e.KasichPct,t.KasichPct)}if("city"==n){if("descend"==i)return d3.descending(e.DistrictNumber,t.DistrictNumber);if("ascend"==i)return d3.ascending(e.DistrictNumber,t.DistrictNumber)}if("sanders"==n){if("descend"==i)return d3.descending(e.SandersPct,t.SandersPct);if("ascend"==i)return d3.ascending(e.SandersPct,t.SandersPct)}if("clinton"==n){if("descend"==i)return d3.descending(e.ClintonPct,t.ClintonPct);if("ascend"==i)return d3.ascending(e.ClintonPct,t.ClintonPct)}if("other"==n){if("descend"==i)return d3.descending(e.OtherPct,t.OtherPct);if("ascend"==i)return d3.ascending(e.OtherPct,t.OtherPct)}if("uncommitted"==n){if("descend"==i)return d3.descending(e.UncommittedPct,t.UncommittedPct);if("ascend"==i)return d3.ascending(e.UncommittedPct,t.UncommittedPct)}if("delafuente"==n){if("descend"==i)return d3.descending(e.DeLafuentePct,t.DeLafuentePct);if("ascend"==i)return d3.ascending(e.DeLafuentePct,t.DeLafuentePct)}}).transition().duration(500)}function l(e,t,r,n,i,a){if("republican"==t)var s="precinctR",l="resultR";else if("democrat"==t)var s="precinctD",l="resultD";var c=t;d3.select(e).selectAll(".card").data(r).enter().append("div").attr("class","card").html(function(e){if("republican"==c){if("RUBIO"==e.Winner)if(e.WinnerPct>=.7);else if(e.WinnerPct>=.5);else if(e.WinnerPct>=.3);else if(e.WinnerPct>0);if("CRUZ"==e.Winner)if(e.WinnerPct>=.7);else if(e.WinnerPct>=.5);else if(e.WinnerPct>=.3);else if(e.WinnerPct>0);if("TRUMP"==e.Winner)if(e.WinnerPct>=.7);else if(e.WinnerPct>=.5);else if(e.WinnerPct>=.3);else if(e.WinnerPct>0);var t=e.RubioPct,r=e.CruzPct,n=e.TrumpPct,i=e.KasichPct,a=e.CarsonPct,o="rubio",d="cruz",u="trump",f="kasich",m="carson"}else if("democrat"==c){if(e.WinnerPct>=.7);else if(e.WinnerPct>=.5);else if(e.WinnerPct>=.3);else if(e.WinnerPct>0);var t=e.SandersPct,r=e.ClintonPct,n=e.DeLafuentePct,i=e.OtherPct+e.OMalleyPct,a=e.UncommittedPct,o="sanders",d="clinton",u="delafuente",f="other",m="uncommitted"}return"<div class='tableCell "+s+"'>"+e.DistrictNumber+"</div><div data='"+o+"' class='tableCell "+l+"'>"+t+"</div><div data='"+d+"' class='tableCell "+l+"'>"+r+"</div><div data='"+u+"' class='tableCell "+l+"'>"+n+"</div><div data='"+f+"' class='tableCell "+l+"'>"+i+"</div><div data='"+m+"' class='tableCell "+l+"'>"+a+"</div>"}),$("."+l).each(function(){if("republican"==c){var e=$(this).text(),t=$(this).attr("data");"rubio"==t?e>=.7?($(this).addClass("purple5"),$(this).html(d3.format("%")(e))):e>=.5?($(this).addClass("purple4"),$(this).html(d3.format("%")(e))):e>.3?($(this).addClass("purple3"),$(this).html(d3.format("%")(e))):e>0?($(this).addClass("purple2"),$(this).html(d3.format("%")(e))):0==e&&($(this).addClass("mid"),$(this).html(d3.format("%")(e))):"cruz"==t?e>=.7?($(this).addClass("grayblue5"),$(this).html(d3.format("%")(e))):e>=.5?($(this).addClass("grayblue4"),$(this).html(d3.format("%")(e))):e>.3?($(this).addClass("grayblue3"),$(this).html(d3.format("%")(e))):e>0?($(this).addClass("grayblue2"),$(this).html(d3.format("%")(e))):0==e&&($(this).addClass("mid"),$(this).html(d3.format("%")(e))):"trump"==t?e>=.7?($(this).addClass("orange5"),$(this).html(d3.format("%")(e))):e>=.5?($(this).addClass("orange3"),$(this).html(d3.format("%")(e))):e>.3?($(this).addClass("orange4"),$(this).html(d3.format("%")(e))):e>0?($(this).addClass("orange2"),$(this).html(d3.format("%")(e))):0==e&&($(this).addClass("mid"),$(this).html(d3.format("%")(e))):"kasich"==t?e>=.7?($(this).addClass("kasich"),$(this).html(d3.format("%")(e))):e>=.5?($(this).addClass("kasich"),$(this).html(d3.format("%")(e))):e>.3?($(this).addClass("kasich"),$(this).html(d3.format("%")(e))):e>0?($(this).addClass("kasich"),$(this).html(d3.format("%")(e))):0==e&&($(this).addClass("mid"),$(this).html(d3.format("%")(e))):"carson"==t&&(e>=.7?($(this).addClass("carson"),$(this).html(d3.format("%")(e))):e>=.5?($(this).addClass("carson"),$(this).html(d3.format("%")(e))):e>.3?($(this).addClass("carson"),$(this).html(d3.format("%")(e))):e>0?($(this).addClass("carson"),$(this).html(d3.format("%")(e))):0==e&&($(this).addClass("mid"),$(this).html(d3.format("%")(e))))}if("democrat"==c){var e=$(this).text(),t=$(this).attr("data");"sanders"==t?e>=.7?($(this).addClass("green5"),$(this).html(d3.format("%")(e))):e>=.5?($(this).addClass("green4"),$(this).html(d3.format("%")(e))):e>.3?($(this).addClass("green3"),$(this).html(d3.format("%")(e))):e>0?($(this).addClass("green2"),$(this).html(d3.format("%")(e))):0==e&&($(this).addClass("mid"),$(this).html(d3.format("%")(e))):"clinton"==t?e>=.7?($(this).addClass("blue5"),$(this).html(d3.format("%")(e))):e>=.5?($(this).addClass("blue4"),$(this).html(d3.format("%")(e))):e>.3?($(this).addClass("blue3"),$(this).html(d3.format("%")(e))):e>0?($(this).addClass("blue2"),$(this).html(d3.format("%")(e))):0==e&&($(this).addClass("mid"),$(this).html(d3.format("%")(e))):"delafuente"==t?e>=.7?($(this).addClass("mid"),$(this).html(d3.format("%")(e))):e>=.5?($(this).addClass("mid"),$(this).html(d3.format("%")(e))):e>.3?($(this).addClass("mid"),$(this).html(d3.format("%")(e))):e>0?($(this).addClass("mid"),$(this).html(d3.format("%")(e))):0==e&&($(this).addClass("mid"),$(this).html(d3.format("%")(e))):"other"==t?e>=.7?($(this).addClass("gray3"),$(this).html(d3.format("%")(e))):e>=.5?($(this).addClass("gray3"),$(this).html(d3.format("%")(e))):e>.3?($(this).addClass("gray3"),$(this).html(d3.format("%")(e))):e>0?($(this).addClass("gray3"),$(this).html(d3.format("%")(e))):0==e&&($(this).addClass("mid"),$(this).html(d3.format("%")(e))):"uncommitted"==t&&(e>=.7?($(this).addClass("gray3"),$(this).html(d3.format("%")(e))):e>=.5?($(this).addClass("gray3"),$(this).html(d3.format("%")(e))):e>.3?($(this).addClass("gray3"),$(this).html(d3.format("%")(e))):e>0?($(this).addClass("gray3"),$(this).html(d3.format("%")(e))):0==e&&($(this).addClass("mid"),$(this).html(d3.format("%")(e))))}}),$("."+s).click(function(){jQuery.fn.d3Click=function(){this.each(function(e,t){var r=document.createEvent("MouseEvents");r.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),t.dispatchEvent(r)})},jQuery.fn.d3Down=function(){this.each(function(e,t){var r=document.createEvent("MouseEvents");r.initMouseEvent("mousedown",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),t.dispatchEvent(r)})},jQuery.fn.d3Up=function(){this.each(function(e,t){var r=document.createEvent("MouseEvents");r.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),t.dispatchEvent(r)})},$("#tableR").hide(),$("#tableD").hide(),$("#analysis").show(),$("."+s).removeClass("selected"),$(this).addClass("selected"),$("#precinctName").html($(this).text()+", "+$(this).parent().find(".county").text()+" County"),p(W,"#chart",$(this).parent().parent().attr("data"),r,$(this).text(),0);var e="mn_"+$(this).text(),t="metro_"+$(this).text();$("[id='"+e.replace(new RegExp(" ","g"),"-")+"']").d3Down(),$("[id='"+e.replace(new RegExp(" ","g"),"-")+"']").d3Up(),$("[id='"+e.replace(new RegExp(" ","g"),"-")+"']").d3Click(),$("[id='"+t.replace(new RegExp(" ","g"),"-")+"']").d3Down(),$("[id='"+t.replace(new RegExp(" ","g"),"-")+"']").d3Up(),$("[id='"+t.replace(new RegExp(" ","g"),"-")+"']").d3Click()})}function c(e,t,r){if("republican"==t)for(var n=0;n<r.length;n++)if(r[n].DistrictNumber==e.properties.COUNTYNAME||r[n].DistrictNumber==e.properties.DISTRICT){if("RUBIO"==r[n].Winner){if(r[n].WinnerPct>=.7)return"purple5";if(r[n].WinnerPct>=.5)return"purple4";if(r[n].WinnerPct>=.3)return"purple3";if(r[n].WinnerPct>0)return"purple2"}if("CRUZ"==r[n].Winner){if(r[n].WinnerPct>=.7)return"grayblue5";if(r[n].WinnerPct>=.5)return"grayblue3";if(r[n].WinnerPct>=.3)return"grayblue4";if(r[n].WinnerPct>0)return"grayblue2"}if("TRUMP"==r[n].Winner){if(r[n].WinnerPct>=.7)return"orange5";if(r[n].WinnerPct>=.5)return"orange4";if(r[n].WinnerPct>=.3)return"orange3";if(r[n].WinnerPct>0)return"orange2"}if("ROMNEY"==r[n].Winner){if(r[n].WinnerPct>=.7)return"purple5";if(r[n].WinnerPct>=.5)return"purple4";if(r[n].WinnerPct>=.3)return"purple3";if(r[n].WinnerPct>0)return"purple2"}if("HUCKABEE"==r[n].Winner){if(r[n].WinnerPct>=.7)return"grayblue5";if(r[n].WinnerPct>=.5)return"grayblue3";if(r[n].WinnerPct>=.3)return"grayblue4";if(r[n].WinnerPct>0)return"grayblue2"}if("MCCAIN"==r[n].Winner){if(r[n].WinnerPct>=.7)return"orange5";if(r[n].WinnerPct>=.5)return"orange4";if(r[n].WinnerPct>=.3)return"orange3";if(r[n].WinnerPct>0)return"orange2"}if("PAUL"==r[n].Winner){if(r[n].WinnerPct>=.7)return"kasich";if(r[n].WinnerPct>=.5)return"kasich";if(r[n].WinnerPct>=.3)return"kasich";if(r[n].WinnerPct>0)return"kasich"}if("TIE"==r[n].Winner)return"gray3"}if("democrat"==t)for(var n=0;n<r.length;n++)if(r[n].DistrictNumber==e.properties.COUNTYNAME||r[n].DistrictNumber==e.properties.DISTRICT){if("SANDERS"==r[n].Winner){if(r[n].WinnerPct>=.7)return"green5";if(r[n].WinnerPct>=.5)return"green4";if(r[n].WinnerPct>=.3)return"green3";if(r[n].WinnerPct>0)return"green2"}if("CLINTON"==r[n].Winner){if(r[n].WinnerPct>=.7)return"blue5";if(r[n].WinnerPct>=.5)return"blue4";if(r[n].WinnerPct>=.3)return"blue3";if(r[n].WinnerPct>0)return"blue2"}if("OBAMA"==r[n].Winner){if(r[n].WinnerPct>=.7)return"green5";if(r[n].WinnerPct>=.5)return"green4";if(r[n].WinnerPct>=.3)return"green3";if(r[n].WinnerPct>0)return"green2"}if("No results"==r[n].Winner)return"gray3"}}function o(e,t,r){for(var n=0;n<r.length;n++){if(r[n].DistrictNumber==e.properties.COUNTYNAME)return"<strong>"+r[n].DistrictNumber+" County</strong><div class='"+c(e,t,r)+"'>"+d3.format("%")(r[n].WinnerPct)+" "+r[n].Winner+"</div>";if(r[n].DistrictNumber==e.properties.DISTRICT)return"<strong>District "+r[n].DistrictNumber+"</strong><div class='"+c(e,t,r)+"'>"+d3.format("%")(r[n].WinnerPct)+" "+r[n].Winner+"</div>"}return"<strong>"+e.properties.COUNTYNAME+"</strong>"}function d(e,t,r,n,i,a,s,l){function d(e){var t,r,n;if(e&&f!==e){var i=b.centroid(e);t=i[0],r=i[1],n=4,f=e}else t=m/2,r=h/2,n=10,f=null;C.selectAll("path").classed("faded",!0).classed("active",f&&function(e){return e===f}),C.transition().duration(750).attr("transform","translate("+m/2+","+h/2+")scale("+n+")translate("+-t+","+-r+")").style("stroke-width",1.5/n+"px")}function u(e){var t,r,n;if(e&&f!==e){var i=b.centroid(e);t=i[0],r=i[1],n=1,f=e}else t=m/2,r=h/2,n=1,f=null;C.selectAll("path").classed("faded",!1).classed("active",f&&function(e){return e===f}),C.transition().duration(750).attr("transform","translate("+m/2+","+h/2+")scale("+n+")translate("+-t+","+-r+")").style("stroke-width",1.5/n+"px")}var f,m=350,h=400;if("us"==a)var g=d3.geo.albersUsa().scale(700).translate([330,200]);else if("mn"==a)var g=d3.geo.albersUsa().scale(5037).translate([50,970]);else if("metro"==a)var g=d3.geo.mercator().scale([16800]).center([-92.403259,44.988113]);var b=d3.geo.path().projection(g),v=d3.select(e+" svg").attr("width",m).attr("height",h);v.append("rect").attr("class","background").attr("width",m).attr("height",h);var C=v.append("g");d3.json("shapefiles/"+n,function(e,t){C.append("g").attr("class","states").selectAll("path").data(t.features).enter().append("path").attr("d",b).on("click",d).attr("id",function(e){if(String(e.properties.COUNTYNAME).indexOf("#")===-1&&null!=e.properties.COUNTYNAME)var t=a+"_"+e.properties.COUNTYNAME;else var t=a+"_"+e.properties.DISTRICT;return t.replace(new RegExp(" ","g"),"-")}).attr("precinctName",function(e){return e.properties.COUNTYNAME}).attr("class",function(e){return c(e,i,s)}).on("mousedown",function(e,t){String(e.properties.COUNTYNAME).indexOf("#")===-1&&null!=e.properties.COUNTYNAME?($("#precinctName").html(e.properties.COUNTYNAME+" County"),p(W,"#chart",i,s,e.properties.COUNTYNAME,0)):($("#precinctName").html("District "+e.properties.DISTRICT),p(W,"#chart",i,s,e.properties.DISTRICT,0))}).style("stroke-width","1px").style("stroke","#fff").call(d3.helper.tooltip(function(e,t){return o(e,i,s)})),C.append("path").attr("id","state-borders").attr("d",b)});d3.behavior.zoom().on("zoom",function(){C.attr("transform","translate("+d3.event.translate.join(",")+")scale("+d3.event.scale+")"),C.selectAll("circle").attr("d",b.projection(g)),C.selectAll("path").attr("d",b.projection(g))});$(".zoom, .switch, .metroSwitch").click(function(){$(".precinctD, .precinctR").removeClass("selected"),$("#precinctName").html("Minnesota"),$(".card").show(),u(),p(W,"#chart",i,s,"Minnesota",0),$("#cMark, #tMark").html(""),$("#mMark").html("&#x2713;"),$("#mNum").html("36%"),$("#cNum").html("29%"),$("#tNum").html("21%"),$("#hNum").html("38%"),$("#sNum").html("61%"),$("#voteTotalR").html("114,088"),$("#voteTotalD").html("208,078"),$("#mNum,#cNum,#tNum").removeClass("orange5 orange4 orange3 orange2 grayblue5 grayblue4 grayblue3 grayblue2 purple2 purple3 purple4 purple5"),$("#mNum").addClass("purple3"),$("#cNum").addClass("grayblue2"),$("#tNum").addClass("orange2"),$("#sNum, #hNum").removeClass("green5 green4 green3 green2 blue5 blue4 blue3 blue2"),$("#sNum").addClass("green3"),$("#hNum").addClass("blue3")}),d3.helper={},d3.helper.tooltip=function(e){return function(t){var r,n=d3.select("body").node();t.on("mouseover",function(t,i){d3.select("body").selectAll("div.tooltip").remove(),r=d3.select("body").append("div").attr("class","tooltip");var a=d3.mouse(n);r.style("left",a[0]+10+"px").style("top",a[1]-15+"px").style("position","absolute").style("z-index",1001);e(t,i)}).on("mousemove",function(t,i){var a=d3.mouse(n);r.style("left",a[0]+10+"px").style("top",a[1]-15+"px");var s=e(t,i)||"";r.html(s)}).on("mouseout",function(e,t){r.remove()})}}}function u(e,t,r,n){for(var i=0;i<n.length;i++)if(n[i].DistrictNumber==e.properties.COUNTYNAME){if("religion"==t)var a=n[i].adherent_pct+"% religious adherence";if("age"==t)var a=n[i].median_age+" median age";if("income"==t)var a=d3.format("$,")(n[i].income)+" median income";if("education"==t)var a=d3.format("%")(n[i].bachelors_pct+n[i].grad_degree_pct)+" with bachelor's or higher";if("minority"==t)var a=d3.format("%")(n[i].minority_pct)+" minority population";return"<strong>"+n[i].DistrictNumber+" County</strong><div class='"+f(e,t,r,n)+"'>"+a+"</div>"}}function f(e,t,r,n){if("republican"==r)for(var i=0;i<n.length;i++)if(n[i].DistrictNumber==e.properties.COUNTYNAME||n[i].DistrictNumber==e.properties.DISTRICT){if("RUBIO"==n[i].Winner){if(n[i].WinnerPct>=.7)return"purple5";if(n[i].WinnerPct>=.5)return"purple4";if(n[i].WinnerPct>=.3)return"purple3";if(n[i].WinnerPct>0)return"purple2"}if("CRUZ"==n[i].Winner){if(n[i].WinnerPct>=.7)return"grayblue5";if(n[i].WinnerPct>=.5)return"grayblue3";if(n[i].WinnerPct>=.3)return"grayblue4";if(n[i].WinnerPct>0)return"grayblue2"}if("TRUMP"==n[i].Winner){if(n[i].WinnerPct>=.7)return"orange5";if(n[i].WinnerPct>=.5)return"orange4";if(n[i].WinnerPct>=.3)return"orange3";if(n[i].WinnerPct>0)return"orange2"}if("ROMNEY"==n[i].Winner){if(n[i].WinnerPct>=.7)return"purple5";if(n[i].WinnerPct>=.5)return"purple4";if(n[i].WinnerPct>=.3)return"purple3";if(n[i].WinnerPct>0)return"purple2"}if("HUCKABEE"==n[i].Winner){if(n[i].WinnerPct>=.7)return"grayblue5";if(n[i].WinnerPct>=.5)return"grayblue3";if(n[i].WinnerPct>=.3)return"grayblue4";if(n[i].WinnerPct>0)return"grayblue2"}if("MCCAIN"==n[i].Winner){if(n[i].WinnerPct>=.7)return"orange5";if(n[i].WinnerPct>=.5)return"orange4";if(n[i].WinnerPct>=.3)return"orange3";if(n[i].WinnerPct>0)return"orange2"}if("PAUL"==n[i].Winner){if(n[i].WinnerPct>=.7)return"kasich";if(n[i].WinnerPct>=.5)return"kasich";if(n[i].WinnerPct>=.3)return"kasich";if(n[i].WinnerPct>0)return"kasich"}}if("democrat"==r)for(var i=0;i<n.length;i++)if(n[i].DistrictNumber==e.properties.COUNTYNAME||n[i].DistrictNumber==e.properties.DISTRICT){if("SANDERS"==n[i].Winner){if(n[i].WinnerPct>=.7)return"green5";if(n[i].WinnerPct>=.5)return"green4";if(n[i].WinnerPct>=.3)return"green3";if(n[i].WinnerPct>0)return"green2"}if("CLINTON"==n[i].Winner){if(n[i].WinnerPct>=.7)return"blue5";if(n[i].WinnerPct>=.5)return"blue4";if(n[i].WinnerPct>=.3)return"blue3";if(n[i].WinnerPct>0)return"blue2"}if("OBAMA"==n[i].Winner){if(n[i].WinnerPct>=.7)return"green5";if(n[i].WinnerPct>=.5)return"green4";if(n[i].WinnerPct>=.3)return"green3";if(n[i].WinnerPct>0)return"green2"}if("No results"==n[i].Winner)return"gray3"}if("demographics"==r)for(var i=0;i<n.length;i++)if(n[i].DistrictNumber==e.properties.COUNTYNAME){if("religion"==t){if(n[i].adherent_pct>=70)return"gray5";if(n[i].adherent_pct>=50)return"gray4";if(n[i].adherent_pct>=30)return"gray3";if(n[i].adherent_pct>0)return"gray2"}if("age"==t){if(n[i].median_age>=45)return"gray5";if(n[i].median_age>=40)return"gray4";if(n[i].median_age>=35)return"gray3";if(n[i].median_age>0)return"gray2"}if("income"==t){if(n[i].income>=7e4)return"gray5";if(n[i].income>=55e3)return"gray4";if(n[i].income>=45e3)return"gray3";if(n[i].income>0)return"gray2"}if("education"==t){if(n[i].bachelors_pct+n[i].grad_degree_pct>=.3)return"gray5";if(n[i].bachelors_pct+n[i].grad_degree_pct>=.25)return"gray4";if(n[i].bachelors_pct+n[i].grad_degree_pct>=.15)return"gray3";if(n[i].bachelors_pct+n[i].grad_degree_pct>0)return"gray2"}if("minority"==t){if(n[i].minority_pct>=.3)return"gray5";if(n[i].minority_pct>=.2)return"gray4";if(n[i].minority_pct>=.1)return"gray3";if(n[i].minority_pct>0)return"gray2"}}}function m(e,t,r,n,i,a,s,l){if("us"==a)var c=d3.geo.albersUsa().scale(700).translate([330,200]);else if("mn"==a)var c=d3.geo.albersUsa().scale(5037).translate([50,970]);else if("metro"==a)var c=d3.geo.mercator().scale([16800]).center([-92.403259,44.988113]);var d=d3.geo.path().projection(c),m=d3.select(e+" svg").attr("width",350).attr("height",400);m.append("rect").attr("class","background").attr("width",350).attr("height",400);var h=m.append("g");d3.json("shapefiles/"+n,function(e,r){h.append("g").attr("class","states").selectAll("path").data(r.features).enter().append("path").attr("d",d).attr("precinctName",function(e){return e.properties.COUNTYNAME}).attr("class",function(e){return f(e,t,i,s)}).on("mousedown",function(e,t){}).style("stroke-width","1px").style("stroke","#fff").call(d3.helper.tooltip(function(e,r){return"demographics"==i?u(e,t,i,s):o(e,i,s)})),h.append("path").attr("id","state-borders").attr("d",d)});d3.behavior.zoom().on("zoom",function(){h.attr("transform","translate("+d3.event.translate.join(",")+")scale("+d3.event.scale+")"),h.selectAll("circle").attr("d",d.projection(c)),h.selectAll("path").attr("d",d.projection(c))});d3.helper={},d3.helper.tooltip=function(e){return function(t){var r,n=d3.select("body").node();t.on("mouseover",function(t,i){d3.select("body").selectAll("div.tooltip").remove(),r=d3.select("body").append("div").attr("class","tooltip");var a=d3.mouse(n);r.style("left",a[0]+10+"px").style("top",a[1]-15+"px").style("position","absolute").style("z-index",1001);e(t,i)}).on("mousemove",function(t,i){var a=d3.mouse(n);r.style("left",a[0]+10+"px").style("top",a[1]-15+"px");var s=e(t,i)||"";r.html(s)}).on("mouseout",function(e,t){r.remove()})}}}function h(e,t,r,n){d3.json("shapefiles/"+t,function(t,i){d3.selectAll(e+" svg g path").data(i.features).attr("class",function(e){return c(e.properties.NAME,r,n)}).call(d3.helper.tooltip(function(e,t){return o(e,r,n)}))})}function p(e,t,r,n,i,a){var s=["#fff"];d3.format("%");d3.select(t+" svg").datum(g(r,n,i)).transition().duration(300).call(e[a].color(s)),nv.utils.windowResize(e[a].update);d3.selectAll("#chart rect").filter(function(e,t){return 0==t}).style("fill","#8672a8"),d3.selectAll("#chart rect").filter(function(e,t){return 1==t}).style("fill","#5a82ad"),d3.selectAll("#chart rect").filter(function(e,t){return 2==t}).style("fill","#E07242"),d3.selectAll("#chart rect").filter(function(e,t){return 3==t}).style("fill","#b57f73"),d3.selectAll("#chart rect").filter(function(e,t){return 4==t}).style("fill","#9C0004"),d3.selectAll("#chart rect").filter(function(e,t){return 5==t}).style("fill","#DF95AF"),d3.selectAll("#chart rect").filter(function(e,t){return 6==t}).style("fill","#D97171")}function p(e,t,r,n,i,a){var s=["#fff"];d3.format("%");d3.select(t+" svg").datum(g(r,n,i)).transition().duration(300).call(e[a].color(s)),nv.utils.windowResize(e[a].update);d3.selectAll("#chart rect").filter(function(e,t){return 0==t}).style("fill","#8672a8"),d3.selectAll("#chart rect").filter(function(e,t){return 1==t}).style("fill","#5a82ad"),d3.selectAll("#chart rect").filter(function(e,t){return 2==t}).style("fill","#E07242"),d3.selectAll("#chart rect").filter(function(e,t){return 3==t}).style("fill","#b57f73"),d3.selectAll("#chart rect").filter(function(e,t){return 4==t}).style("fill","#9C0004"),d3.selectAll("#chart rect").filter(function(e,t){return 5==t}).style("fill","#DF95AF"),d3.selectAll("#chart rect").filter(function(e,t){return 6==t}).style("fill","#D97171")}function g(e,t,r){for(var n,i,a,s,l,c,o,d=0;d<b.length;d++)if(b[d].DistrictNumber==r){if(n=b[d].RubioPct,i=b[d].CruzPct,a=b[d].TrumpPct,s=b[d].KasichPct,l=b[d].CarsonPct,$("#voteTotalR").html(d3.format(",")(b[d].TotalVotes)),n>=.7)var u="purple5";else if(n>=.5)var u="purple4";else if(n>=.3)var u="purple3";else if(n>0)var u="purple2";if(i>=.7)var f="grayblue5";else if(i>=.5)var f="grayblue4";else if(i>=.3)var f="grayblue3";else if(i>0)var f="grayblue2";if(a>=.7)var m="orange5";else if(a>=.5)var m="orange4";else if(a>=.3)var m="orange3";else if(a>0)var m="orange2";$("#mNum,#cNum","#tNum").removeClass("bogus orange5 orange4 orange3 orange2 grayblue5 grayblue4 grayblue3 grayblue2 purple2 purple3 purple4 purple5"),$("#mNum").addClass(u),$("#cNum").addClass(f),$("#tNum").addClass(m),$("#mNum").html(d3.format("%")(n)),$("#cNum").html(d3.format("%")(i)),$("#tNum").html(d3.format("%")(a)),n>i&&n>a?($("#cMark, #tMark").html(""),$("#mMark").html("&#x2713;")):i>n&&i>a?($("#mMark, #tMark").html(""),$("#cMark").html("&#x2713;")):a>i&&a>n&&($("#mMark, #cMark").html(""),$("#tMark").html("&#x2713;"));break}for(var d=0;d<v.length;d++)if(v[d].DistrictNumber==r){if(o=v[d].SandersPct,c=v[d].ClintonPct,0,$("#voteTotalD").html(d3.format(",")(v[d].TotalVotes)),o>=.7)var h="green5";else if(o>=.5)var h="green4";else if(o>=.3)var h="green3";else if(o>0)var h="green2";if(c>=.7)var p="blue5";else if(c>=.5)var p="blue4";else if(c>=.3)var p="blue3";else if(c>0)var p="blue2";$("#sNum, #hNum").removeClass("bogus green5 green4 green3 green2 blue5 blue4 blue3 blue2"),$("#sNum").addClass(h),$("#hNum").addClass(p),$("#sNum").html(d3.format("%")(o)),$("#hNum").html(d3.format("%")(c)),o<c?($("#sMark").html(""),$("#hMark").html("&#x2713;")):c<o&&($("#hMark").html(""),$("#sMark").html("&#x2713;"));break}return"Minnesota"==r?[{key:"Vote %",values:[{label:"Sanders",value:.61},{label:"Clinton",value:.38},{label:"Rubio",value:.36},{label:"Cruz",value:.29},{label:"Trump",value:.21},{label:"Kasich",value:.06},{label:"Carson",value:.07}]}]:[{key:"Vote %",values:[{label:"Sanders",value:o},{label:"Clinton",value:c},{label:"Rubio",value:n},{label:"Cruz",value:i},{label:"Trump",value:a},{label:"Kasich",value:s},{label:"Carson",value:l}]}]}var b=t.r2016Summary,v=n.d2016Summary,C=i.r2008Summary,y=a.d2008Summary,P=r.demographics;$("[data='gop'], #tableR, #tableD, #rTables, #gopLegend").hide(),$(".switch").click(function(){$(".switch").removeClass("selected"),$(this).addClass("selected"),$("[data='dfl'], [data='gop']").hide(),$("[data='"+$(this).attr("party")+"']").show()}),$(".metroSwitch").click(function(){$(".metroSwitch").removeClass("selected"),$(this).addClass("selected"),$(".mn, .metro").hide(),$("."+$(this).attr("data")).show()}),$(".rSort").click(function(){if($(".rSort").removeClass("selected"),$(this).addClass("selected"),$(this).hasClass("toggled")){$(this).removeClass("toggled");var e="ascend"}else if($(this).hasClass("selected")){$(this).addClass("toggled");var e="descend"}s("#rtablehere","republican",b,$(this).attr("candidate"),e)}),$(".dSort").click(function(){if($(".dSort").removeClass("selected"),$(this).addClass("selected"),$(this).hasClass("toggled")){$(this).removeClass("toggled");var e="ascend"}else if($(this).hasClass("selected")){$(this).addClass("toggled");var e="descend"}s("#dtablehere","democrat",v,$(this).attr("candidate"),e)}),$("#dSwitch").click(function(){h("#mn_map","mn_caucus.json","democrat",v),$("#gopLegend").hide(),$("#demLegend").show(),$("#gopMaps").hide(),$("#demMaps").show(),$(".gopSmallLegend").hide(),$(".demSmallLegend").show(),$(".demSmallMaps").show(),$(".gopSmallMaps").hide()}),$("#rSwitch").click(function(){h("#mn_map","mn_caucus.json","republican",b),$("#gopLegend").show(),$("#demLegend").hide(),$("#gopMaps").show(),$("#demMaps").hide(),$(".gopSmallLegend").show(),$(".demSmallLegend").hide(),$(".demSmallMaps").hide(),$(".gopSmallMaps").show()}),$("#toggleR").click(function(){$(this).hasClass("toggled")?($("#tableR").hide(),$("#tableD").hide(),$("#analysis").show(),$(this).removeClass("toggled")):($("#tableR").show(),$("#tableD").show(),$("#analysis").hide(),$(this).addClass("toggled"))}),$("#toggleD").click(function(){$(this).hasClass("toggled")?($("#tableR").hide(),$("#tableD").hide(),$("#analysis").show(),$(this).removeClass("toggled")):($("#tableR").show(),$("#tableD").show(),$("#analysis").hide(),$(this).addClass("toggled"))});var W=[],N=["#fff"],M=d3.format("%");nv.addGraph(function(){W[0]=nv.models.multiBarHorizontalChart().x(function(e){return e.label}).y(function(e){return e.value}).margin({top:30,right:30,bottom:20,left:55}).showValues(!1).tooltips(!0).stacked(!1).showLegend(!1).color(N).showControls(!1),W[0].forceY([0,1]),W[0].yAxis.tickFormat(M),d3.select("#chart svg").datum(g("president",v,"Minnesota")).transition().duration(500).call(W[0]),nv.utils.windowResize(W[0].update);d3.selectAll("#chart rect").filter(function(e,t){return 0==t}).style("fill","#8672a8"),d3.selectAll("#chart rect").filter(function(e,t){return 1==t}).style("fill","#5a82ad"),d3.selectAll("#chart rect").filter(function(e,t){return 2==t}).style("fill","#E07242"),d3.selectAll("#chart rect").filter(function(e,t){return 3==t}).style("fill","#b57f73"),d3.selectAll("#chart rect").filter(function(e,t){return 4==t}).style("fill","#9C0004"),d3.selectAll("#chart rect").filter(function(e,t){return 5==t}).style("fill","#DF95AF"),d3.selectAll("#chart rect").filter(function(e,t){return 6==t}).style("fill","#D97171");return W[0]}),$(document).ready(function(){$("#filterR input, #filterD input").keyup(function(e){$(".card").hide();var t=$(this).val();$(".card").each(function(){$(this).text().toUpperCase().indexOf(t.toUpperCase())!=-1&&$(this).show()})})}),l("#rtablehere","republican",b,"mn",null,0),l("#dtablehere","democrat",v,"mn",null,0),d("#mn_mapR","#infobox","#chart","rCaucus.json","republican","mn",b,0),d("#mn_mapRMetro","#infobox","#chart","rCaucus_metro.json","republican","metro",b,0),d("#mn_mapD","#infobox","#chart","dCaucus.json","democrat","mn",v,0),d("#mn_mapDMetro","#infobox","#chart","dCaucus_metro.json","democrat","metro",v,0),m("#countyMapR","#infobox","#chart","rCaucus.json","republican","mn",b,0),m("#countyMapD","#infobox","#chart","dCaucus.json","democrat","mn",v,0),m("#countyMapR2008","#infobox","#chart","mnsenate.json","republican","mn",C,0),m("#countyMapD2008","#infobox","#chart","mnsenate.json","democrat","mn",y,0),m("#religionMapR","religion","#chart","counties.json","demographics","mn",P,0),m("#ageMapR","age","#chart","counties.json","demographics","mn",P,0),m("#incomeMapR","income","#chart","counties.json","demographics","mn",P,0),m("#educationMapR","education","#chart","counties.json","demographics","mn",P,0),m("#minorityMapR","minority","#chart","counties.json","demographics","mn",P,0),m("#countyMapRMetro","#infobox","#chart","rCaucus_metro.json","republican","metro",b,0),m("#countyMapDMetro","#infobox","#chart","dCaucus_metro.json","democrat","metro",v,0),m("#countyMapRMetro2008","#infobox","#chart","mnsenate_metro.json","republican","metro",C,0),m("#countyMapDMetro2008","#infobox","#chart","mnsenate_metro.json","democrat","metro",y,0),m("#religionMapRMetro","religion","#chart","counties_metro.json","demographics","metro",P,0),m("#ageMapRMetro","age","#chart","counties_metro.json","demographics","metro",P,0),m("#incomeMapRMetro","income","#chart","counties_metro.json","demographics","metro",P,0),m("#educationMapRMetro","education","#chart","counties_metro.json","demographics","metro",P,0),m("#minorityMapRMetro","minority","#chart","counties_metro.json","demographics","metro",P,0)})})})})})},{}]},{},[1]);