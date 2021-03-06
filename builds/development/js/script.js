(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./data/r2016Summary.json", function(error, dataLoadRS) {
d3.json("./data/demographics.json", function(error, dataLoadDemo) {
d3.json("./data/d2016Summary.json", function(error, dataLoadDS) {
d3.json("./data/r2008Summary.json", function(error, dataLoadR2008) {
d3.json("./data/d2008Summary.json", function(error, dataLoadD2008) {

var dataRSum = dataLoadRS.r2016Summary;
var dataDSum = dataLoadDS.d2016Summary;
var dataR2008 = dataLoadR2008.r2008Summary;
var dataD2008 = dataLoadD2008.d2008Summary;
var dataDemo = dataLoadDemo.demographics;

$("[data='gop'], #tableR, #tableD, #rTables, #gopLegend").hide();

$(".switch").click(function() {
  $(".switch").removeClass("selected");
  $(this).addClass("selected");
  $("[data='dfl'], [data='gop']").hide();
  $("[data='" + $(this).attr("party") + "']").show();
});

$(".metroSwitch").click(function() {
  $(".metroSwitch").removeClass("selected");
  $(this).addClass("selected");
  $(".mn, .metro").hide();
  $("." + $(this).attr("data")).show();
});

$(".rSort").click(function() {
  $(".rSort").removeClass("selected");
  $(this).addClass("selected");
  if ($(this).hasClass("toggled")) { $(this).removeClass("toggled"); var sorted = "ascend"; }
  else if ($(this).hasClass("selected")) { $(this).addClass("toggled"); var sorted ="descend"; } 
  tableSort("#rtablehere","republican",dataRSum,$(this).attr("candidate"),sorted);
});

$(".dSort").click(function() {
  $(".dSort").removeClass("selected");
  $(this).addClass("selected");
  if ($(this).hasClass("toggled")) { $(this).removeClass("toggled"); var sorted = "ascend"; }
  else if ($(this).hasClass("selected")) { $(this).addClass("toggled"); var sorted ="descend"; } 
  tableSort("#dtablehere","democrat",dataDSum,$(this).attr("candidate"),sorted);
});

$("#dSwitch").click(function() {
  mapReshade("#mn_map", "mn_caucus.json", "democrat", dataDSum);
  $("#gopLegend").hide();
  $("#demLegend").show();
  $("#gopMaps").hide();
  $("#demMaps").show();  
  $(".gopSmallLegend").hide();
  $(".demSmallLegend").show(); 
  $(".demSmallMaps").show();
  $(".gopSmallMaps").hide();
});
$("#rSwitch").click(function() {
  mapReshade("#mn_map", "mn_caucus.json", "republican", dataRSum);
  $("#gopLegend").show();
  $("#demLegend").hide();
  $("#gopMaps").show();
  $("#demMaps").hide();
  $(".gopSmallLegend").show();
  $(".demSmallLegend").hide(); 
  $(".demSmallMaps").hide();
  $(".gopSmallMaps").show();
});

$("#toggleR").click(function() {
  if ($(this).hasClass("toggled")) { 
    $("#tableR").hide();
    $("#tableD").hide();
    $("#analysis").show();
    $(this).removeClass("toggled");
  } else {
    $("#tableR").show();
    $("#tableD").show();
    $("#analysis").hide();
    $(this).addClass("toggled");
  }
});
$("#toggleD").click(function() {
    if ($(this).hasClass("toggled")) { 
    $("#tableR").hide();
    $("#tableD").hide();
    $("#analysis").show();
    $(this).removeClass("toggled");
  } else {
    $("#tableR").show();
    $("#tableD").show();
    $("#analysis").hide();
    $(this).addClass("toggled");
  }
});

function tableSort(container,party,data,candidate,sorted){
   
  d3.select(container).selectAll(".card").sort(function(a, b) {
      if (candidate == "rubio") { 
        if (sorted == "descend") { return d3.descending(a.RubioPct, b.RubioPct); }
        if (sorted == "ascend") { return d3.ascending(a.RubioPct, b.RubioPct); }
     }
      if (candidate == "cruz") { 
        if (sorted == "descend") { return d3.descending(a.CruzPct, b.CruzPct); }
        if (sorted == "ascend") { return d3.ascending(a.CruzPct, b.CruzPct); }
     }
      if (candidate == "trump") {
        if (sorted == "descend") { return d3.descending(a.TrumpPct, b.TrumpPct); }
        if (sorted == "ascend") { return d3.ascending(a.TrumpPct, b.TrumpPct); }
     }
      if (candidate == "carson") {
        if (sorted == "descend") { return d3.descending(a.CarsonPct, b.CarsonPct); }
        if (sorted == "ascend") { return d3.ascending(a.CarsonPct, b.CarsonPct); }

     }
      if (candidate == "kasich") {
        if (sorted == "descend") { return d3.descending(a.KasichPct, b.KasichPct); }
        if (sorted == "ascend") { return d3.ascending(a.KasichPct, b.KasichPct); }
     }
      if (candidate == "city") {
        if (sorted == "descend") { return d3.descending(a.DistrictNumber, b.DistrictNumber); }
        if (sorted == "ascend") { return d3.ascending(a.DistrictNumber, b.DistrictNumber); }
     }
      if (candidate == "sanders") {
        if (sorted == "descend") { return d3.descending(a.SandersPct, b.SandersPct); }
        if (sorted == "ascend") { return d3.ascending(a.SandersPct, b.SandersPct); }
     }
      if (candidate == "clinton") {
        if (sorted == "descend") { return d3.descending(a.ClintonPct, b.ClintonPct); }
        if (sorted == "ascend") { return d3.ascending(a.ClintonPct, b.ClintonPct); }
     }
      if (candidate == "other") {
        if (sorted == "descend") { return d3.descending(a.OtherPct, b.OtherPct); }
        if (sorted == "ascend") { return d3.ascending(a.OtherPct, b.OtherPct); }
     }
      if (candidate == "uncommitted") {
        if (sorted == "descend") { return d3.descending(a.UncommittedPct, b.UncommittedPct); }
        if (sorted == "ascend") { return d3.ascending(a.UncommittedPct, b.UncommittedPct); }
     }
      if (candidate == "delafuente") {
        if (sorted == "descend") { return d3.descending(a.DeLafuentePct, b.DeLafuentePct); }
        if (sorted == "ascend") { return d3.ascending(a.DeLafuentePct, b.DeLafuentePct); }
     }
    })
    .transition().duration(500);
}

function tableBuild(container,party,data,state,county,index){
if (party == "republican") { var precinct = "precinctR"; var result = "resultR"; }
else if (party == "democrat") { var precinct = "precinctD"; var result = "resultD"; }
var compareParty = party;

d3.select(container).selectAll(".card")
.data(data).enter().append("div")
.attr("class","card")
.html(function (d){ 
      if (compareParty == "republican") { 
        var party = "Republican";
        var shade = "republican";  
      if (d.Winner == "RUBIO"){
        if  (d.WinnerPct >= .70) { var swatch = "purple5"; }
        else if  (d.WinnerPct >= .50) { var swatch = "purple4"; }
        else if  (d.WinnerPct >= .30) { var swatch = "purple3"; }
        else if  (d.WinnerPct > 0) { var swatch = "purple2"; }
      }
      if (d.Winner == "CRUZ"){
        if  (d.WinnerPct >= .70) { var swatch = "grayblue5"; }
        else if  (d.WinnerPct >= .50) { var swatch = "grayblue4"; }
        else if  (d.WinnerPct >= .30) { var swatch = "grayblue3"; }
        else if  (d.WinnerPct > 0) { var swatch = "grayblue2"; }
      }
      if (d.Winner == "TRUMP"){
        if  (d.WinnerPct >= .70) { var swatch = "orange5"; }
        else if  (d.WinnerPct >= .50) { var swatch = "orange4"; }
        else if  (d.WinnerPct >= .30) { var swatch = "orange3"; }
        else if  (d.WinnerPct > 0) { var swatch = "orange2"; }
      }

        var candidate1 = d.RubioPct;
        var candidate2 = d.CruzPct;
        var candidate3 = d.TrumpPct;
        var candidate4 = d.KasichPct;
        var candidate5 = d.CarsonPct;
        var canClass1 = "rubio";
        var canClass2 = "cruz";
        var canClass3 = "trump";
        var canClass4 = "kasich";
        var canClass5 = "carson";
    }
    else if (compareParty == "democrat") { 
        var shade="democrat";
        var party = "Democrat"; 
        if  (d.WinnerPct >= .70) { var swatch = "d4"; }
        else if  (d.WinnerPct >= .50) { var swatch = "d3"; }
        else if  (d.WinnerPct >= .30) { var swatch = "d2"; }
        else if  (d.WinnerPct > 0) { var swatch = "d1"; }

        var candidate1 = d.SandersPct;
        var candidate2 = d.ClintonPct;
        var candidate3 = d.DeLafuentePct;
        var candidate4 = d.OtherPct + d.OMalleyPct;
        var candidate5 = d.UncommittedPct;
        var canClass1 = "sanders";
        var canClass2 = "clinton";
        var canClass3 = "delafuente";
        var canClass4 = "other";
        var canClass5 = "uncommitted";
     }

  return "<div class='tableCell " + precinct + "'>" + d.DistrictNumber + "</div><div data='" + canClass1 + "' class='tableCell " + result + "'>" + candidate1 + "</div><div data='" + canClass2 + "' class='tableCell " + result + "'>" + candidate2 + "</div><div data='" + canClass3 + "' class='tableCell " + result + "'>" + candidate3 + "</div><div data='" + canClass4 + "' class='tableCell " + result + "'>" + candidate4 + "</div><div data='" + canClass5 + "' class='tableCell " + result + "'>" + candidate5 + "</div>";
});

  $("." + result).each(function() {
    if (compareParty == "republican"){
      var num = $(this).text();
      var canColor = $(this).attr("data");

    if (canColor == "rubio"){
      if (num >= .70) { $(this).addClass("purple5"); $(this).html(d3.format("%")(num)); }
      else if (num >= .50) { $(this).addClass("purple4"); $(this).html(d3.format("%")(num)); } 
      else if (num > .30) { $(this).addClass("purple3"); $(this).html(d3.format("%")(num)); }
      else if (num > 0) { $(this).addClass("purple2"); $(this).html(d3.format("%")(num)); }
      else if (num == 0) { $(this).addClass("mid"); $(this).html(d3.format("%")(num)); }
    }
    else if (canColor == "cruz"){
      if (num >= .70) { $(this).addClass("grayblue5"); $(this).html(d3.format("%")(num)); }
      else if (num >= .50) { $(this).addClass("grayblue4"); $(this).html(d3.format("%")(num)); } 
      else if (num > .30) { $(this).addClass("grayblue3"); $(this).html(d3.format("%")(num)); }
      else if (num > 0) { $(this).addClass("grayblue2"); $(this).html(d3.format("%")(num)); }
      else if (num == 0) { $(this).addClass("mid"); $(this).html(d3.format("%")(num)); }
    }
    else if (canColor == "trump"){
      if (num >= .70) { $(this).addClass("orange5"); $(this).html(d3.format("%")(num)); }
      else if (num >= .50) { $(this).addClass("orange3"); $(this).html(d3.format("%")(num)); } 
      else if (num > .30) { $(this).addClass("orange4"); $(this).html(d3.format("%")(num)); }
      else if (num > 0) { $(this).addClass("orange2"); $(this).html(d3.format("%")(num)); }
      else if (num == 0) { $(this).addClass("mid"); $(this).html(d3.format("%")(num)); }
    }
    else if (canColor == "kasich"){
      if (num >= .70) { $(this).addClass("kasich"); $(this).html(d3.format("%")(num)); }
      else if (num >= .50) { $(this).addClass("kasich"); $(this).html(d3.format("%")(num)); } 
      else if (num > .30) { $(this).addClass("kasich"); $(this).html(d3.format("%")(num)); }
      else if (num > 0) { $(this).addClass("kasich"); $(this).html(d3.format("%")(num)); }
      else if (num == 0) { $(this).addClass("mid"); $(this).html(d3.format("%")(num)); }
    }
    else if (canColor == "carson"){
      if (num >= .70) { $(this).addClass("carson"); $(this).html(d3.format("%")(num)); }
      else if (num >= .50) { $(this).addClass("carson"); $(this).html(d3.format("%")(num)); } 
      else if (num > .30) { $(this).addClass("carson"); $(this).html(d3.format("%")(num)); }
      else if (num > 0) { $(this).addClass("carson"); $(this).html(d3.format("%")(num)); }
      else if (num == 0) { $(this).addClass("mid"); $(this).html(d3.format("%")(num)); }
    }
    }    
  if (compareParty == "democrat"){
      var num = $(this).text();
      var canColor = $(this).attr("data");

    if (canColor == "sanders"){
      if (num >= .70) { $(this).addClass("green5"); $(this).html(d3.format("%")(num)); }
      else if (num >= .50) { $(this).addClass("green4"); $(this).html(d3.format("%")(num)); } 
      else if (num > .30) { $(this).addClass("green3"); $(this).html(d3.format("%")(num)); }
      else if (num > 0) { $(this).addClass("green2"); $(this).html(d3.format("%")(num)); }
      else if (num == 0) { $(this).addClass("mid"); $(this).html(d3.format("%")(num)); }
    }
    else if (canColor == "clinton"){
      if (num >= .70) { $(this).addClass("blue5"); $(this).html(d3.format("%")(num)); }
      else if (num >= .50) { $(this).addClass("blue4"); $(this).html(d3.format("%")(num)); } 
      else if (num > .30) { $(this).addClass("blue3"); $(this).html(d3.format("%")(num)); }
      else if (num > 0) { $(this).addClass("blue2"); $(this).html(d3.format("%")(num)); }
      else if (num == 0) { $(this).addClass("mid"); $(this).html(d3.format("%")(num)); }
    }
    else if (canColor == "delafuente"){
      if (num >= .70) { $(this).addClass("mid"); $(this).html(d3.format("%")(num)); }
      else if (num >= .50) { $(this).addClass("mid"); $(this).html(d3.format("%")(num)); } 
      else if (num > .30) { $(this).addClass("mid"); $(this).html(d3.format("%")(num)); }
      else if (num > 0) { $(this).addClass("mid"); $(this).html(d3.format("%")(num)); }
      else if (num == 0) { $(this).addClass("mid"); $(this).html(d3.format("%")(num)); }
    }
    else if (canColor == "other"){
      if (num >= .70) { $(this).addClass("gray3"); $(this).html(d3.format("%")(num)); }
      else if (num >= .50) { $(this).addClass("gray3"); $(this).html(d3.format("%")(num)); } 
      else if (num > .30) { $(this).addClass("gray3"); $(this).html(d3.format("%")(num)); }
      else if (num > 0) { $(this).addClass("gray3"); $(this).html(d3.format("%")(num)); }
      else if (num == 0) { $(this).addClass("mid"); $(this).html(d3.format("%")(num)); }
    }
    else if (canColor == "uncommitted"){
      if (num >= .70) { $(this).addClass("gray3"); $(this).html(d3.format("%")(num)); }
      else if (num >= .50) { $(this).addClass("gray3"); $(this).html(d3.format("%")(num)); } 
      else if (num > .30) { $(this).addClass("gray3"); $(this).html(d3.format("%")(num)); }
      else if (num > 0) { $(this).addClass("gray3"); $(this).html(d3.format("%")(num)); }
      else if (num == 0) { $(this).addClass("mid"); $(this).html(d3.format("%")(num)); }
    }
    }
      });

  $("." + precinct).click(function() {

jQuery.fn.d3Click = function () {
  this.each(function (i, e) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    e.dispatchEvent(evt);
  });
};

jQuery.fn.d3Down = function () {
  this.each(function (i, e) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    e.dispatchEvent(evt);
  });
};

jQuery.fn.d3Up = function () {
  this.each(function (i, e) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    e.dispatchEvent(evt);
  });
};
    
    $("#tableR").hide();
    $("#tableD").hide();
    $("#analysis").show();

    $("." + precinct).removeClass("selected");
    $(this).addClass("selected");
    $("#precinctName").html($(this).text() + ", " + $(this).parent().find('.county').text() + " County");

    redrawChart(chart,"#chart",$(this).parent().parent().attr("data"),data,$(this).text(),0);

    var mnDistrct = "mn_" + $(this).text();
    var metroDistrict = "metro_" + $(this).text();

    $("[id='" + mnDistrct.replace(new RegExp(" ", "g"),"-") + "']").d3Down();
    $("[id='" + mnDistrct.replace(new RegExp(" ", "g"),"-") + "']").d3Up();
    $("[id='" + mnDistrct.replace(new RegExp(" ", "g"),"-") + "']").d3Click();
    $("[id='" + metroDistrict.replace(new RegExp(" ", "g"),"-") + "']").d3Down();
    $("[id='" + metroDistrict.replace(new RegExp(" ", "g"),"-") + "']").d3Up();
    $("[id='" + metroDistrict.replace(new RegExp(" ", "g"),"-") + "']").d3Click();

    // $("[id='" + $(this).text().replace(new RegExp(" ", "g"),"-") + "']").d3Down();
    // $("[id='" + $(this).text().replace(new RegExp(" ", "g"),"-") + "']").d3Up();
    // $("[id='" + $(this).text().replace(new RegExp(" ", "g"),"-") + "']").d3Click();
  });

}

//MAPAGGEDON
function mapColor(d, race, dataCompare){
  if (race == "republican"){
  for (var i=0; i < dataCompare.length; i++){
    if (dataCompare[i].DistrictNumber == d.properties.COUNTYNAME || dataCompare[i].DistrictNumber == d.properties.DISTRICT){
  
     if (dataCompare[i].Winner == "RUBIO") {
      if (dataCompare[i].WinnerPct >= .70){ return "purple5"; }
      else if (dataCompare[i].WinnerPct >= .50){ return "purple4"; }
      else if (dataCompare[i].WinnerPct >= .30){ return "purple3"; }
      else if (dataCompare[i].WinnerPct > 0){ return "purple2"; } 
     }
     if (dataCompare[i].Winner == "CRUZ") {
      if (dataCompare[i].WinnerPct >= .70){ return "grayblue5"; }
      else if (dataCompare[i].WinnerPct >= .50){ return "grayblue3"; }
      else if (dataCompare[i].WinnerPct >= .30){ return "grayblue4"; }
      else if (dataCompare[i].WinnerPct > 0){ return "grayblue2"; } 
     }
     if (dataCompare[i].Winner == "TRUMP") {
      if (dataCompare[i].WinnerPct >= .70){ return "orange5"; }
      else if (dataCompare[i].WinnerPct >= .50){ return "orange4"; }
      else if (dataCompare[i].WinnerPct >= .30){ return "orange3"; }
      else if (dataCompare[i].WinnerPct > 0){ return "orange2"; }
     }
     if (dataCompare[i].Winner == "ROMNEY") {
      if (dataCompare[i].WinnerPct >= .70){ return "purple5"; }
      else if (dataCompare[i].WinnerPct >= .50){ return "purple4"; }
      else if (dataCompare[i].WinnerPct >= .30){ return "purple3"; }
      else if (dataCompare[i].WinnerPct > 0){ return "purple2"; } 
     }
     if (dataCompare[i].Winner == "HUCKABEE") {
      if (dataCompare[i].WinnerPct >= .70){ return "grayblue5"; }
      else if (dataCompare[i].WinnerPct >= .50){ return "grayblue3"; }
      else if (dataCompare[i].WinnerPct >= .30){ return "grayblue4"; }
      else if (dataCompare[i].WinnerPct > 0){ return "grayblue2"; } 
     }
     if (dataCompare[i].Winner == "MCCAIN") {
      if (dataCompare[i].WinnerPct >= .70){ return "orange5"; }
      else if (dataCompare[i].WinnerPct >= .50){ return "orange4"; }
      else if (dataCompare[i].WinnerPct >= .30){ return "orange3"; }
      else if (dataCompare[i].WinnerPct > 0){ return "orange2"; }
     }
     if (dataCompare[i].Winner == "PAUL") {
      if (dataCompare[i].WinnerPct >= .70){ return "kasich"; }
      else if (dataCompare[i].WinnerPct >= .50){ return "kasich"; }
      else if (dataCompare[i].WinnerPct >= .30){ return "kasich"; }
      else if (dataCompare[i].WinnerPct > 0){ return "kasich"; }
     }
     if (dataCompare[i].Winner == "TIE") { return "gray3"; }

    }
  }
}
  if (race == "democrat"){
  for (var i=0; i < dataCompare.length; i++){
    if (dataCompare[i].DistrictNumber == d.properties.COUNTYNAME || dataCompare[i].DistrictNumber == d.properties.DISTRICT){
     if (dataCompare[i].Winner == "SANDERS") {
      if (dataCompare[i].WinnerPct >= .70){ return "green5"; }
      else if (dataCompare[i].WinnerPct >= .50){ return "green4"; }
      else if (dataCompare[i].WinnerPct >= .30){ return "green3"; }
      else if (dataCompare[i].WinnerPct > 0){ return "green2"; } 
     }
     if (dataCompare[i].Winner == "CLINTON") {
      if (dataCompare[i].WinnerPct >= .70){ return "blue5"; }
      else if (dataCompare[i].WinnerPct >= .50){ return "blue4"; }
      else if (dataCompare[i].WinnerPct >= .30){ return "blue3"; }
      else if (dataCompare[i].WinnerPct > 0){ return "blue2"; } 
     }
     if (dataCompare[i].Winner == "OBAMA") {
      if (dataCompare[i].WinnerPct >= .70){ return "green5"; }
      else if (dataCompare[i].WinnerPct >= .50){ return "green4"; }
      else if (dataCompare[i].WinnerPct >= .30){ return "green3"; }
      else if (dataCompare[i].WinnerPct > 0){ return "green2"; } 
     }
     if (dataCompare[i].Winner == "No results") { return "gray3"; }
    }
  }
}
  
}

function mapTips(d, subject, dataCompare){
    for (var i=0; i < dataCompare.length; i++){
    if (dataCompare[i].DistrictNumber == d.properties.COUNTYNAME){
      return  "<strong>" + dataCompare[i].DistrictNumber + " County</strong><div class='" + mapColor(d, subject, dataCompare) + "'>" + d3.format("%")(dataCompare[i].WinnerPct) + " " + dataCompare[i].Winner  + "</div>";
    }
    if (dataCompare[i].DistrictNumber == d.properties.DISTRICT){
      return  "<strong>District " + dataCompare[i].DistrictNumber + "</strong><div class='" + mapColor(d, subject, dataCompare) + "'>" + d3.format("%")(dataCompare[i].WinnerPct) + " " + dataCompare[i].Winner  + "</div>";
    }
  }
      return  "<strong>" + d.properties.COUNTYNAME + "</strong>"; 
}

function mapBuild(container, subject, chartContainer, shape, race, geo, dataCompare, index) {

var width = 350,
    height = 400,
    centered;

if (geo=="us") { var projection = d3.geo.albersUsa().scale(700).translate([330, 200]); }
else if (geo=="mn") { var projection = d3.geo.albersUsa().scale(5037).translate([50, 970]); }
else if (geo=="metro") { var projection = d3.geo.mercator().scale([16800]).center([-92.403259,44.988113]); }

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select(container + " svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height);

var g = svg.append("g");

d3.json("shapefiles/" + shape, function(error, us) {

  g.append("g")
      .attr("class", "states")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path)
      .on("click", clicked)
      .attr("id", function(d) { 
        if (String(d.properties.COUNTYNAME).indexOf('#') === -1 && d.properties.COUNTYNAME != null) { var str = geo + "_" + d.properties.COUNTYNAME; }
        else { var str = geo + "_" + d.properties.DISTRICT; }
        return str.replace(new RegExp(" ", "g"),"-"); 
      })
      .attr("precinctName", function(d){ return d.properties.COUNTYNAME })
      .attr("class", function(d){
         return mapColor(d, race, dataCompare);
        })
       .on("mousedown", function(d, i){   
         if (String(d.properties.COUNTYNAME).indexOf('#') === -1 && d.properties.COUNTYNAME != null){
          $("#precinctName").html(d.properties.COUNTYNAME + " County");
          redrawChart(chart,"#chart",race,dataCompare,d.properties.COUNTYNAME,0);
        } else { 
          $("#precinctName").html("District " + d.properties.DISTRICT); 
          redrawChart(chart,"#chart",race,dataCompare,d.properties.DISTRICT,0);
        }
       })
      .style("stroke-width", "1px")
      .style("stroke", "#fff")
      .call(d3.helper.tooltip(function(d, i){
        return mapTips(d, race, dataCompare);
      }));

  g.append("path")
      //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
      .attr("id", "state-borders")
      .attr("d", path);
});

var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        g.attr("transform","translate("+ 
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        g.selectAll("circle")
            .attr("d", path.projection(projection));
        g.selectAll("path")  
            .attr("d", path.projection(projection)); 

  });

$(".zoom, .switch, .metroSwitch").click(function() {
  $('.precinctD, .precinctR').removeClass("selected");
  $("#precinctName").html("Minnesota");
  $(".card").show();
  clicked2();
  redrawChart(chart,"#chart",race,dataCompare,"Minnesota",0);
  $("#cMark, #tMark").html(""); 
  $("#mMark").html("&#x2713;"); 
  $("#mNum").html("36%");
  $("#cNum").html("29%");
  $("#tNum").html("21%");
  $("#hNum").html("38%");
  $("#sNum").html("61%");
  $("#voteTotalR").html("114,088");
  $("#voteTotalD").html("208,078");
  $("#mNum,#cNum,#tNum").removeClass("orange5 orange4 orange3 orange2 grayblue5 grayblue4 grayblue3 grayblue2 purple2 purple3 purple4 purple5");    
  $("#mNum").addClass("purple3"); 
  $("#cNum").addClass("grayblue2");
  $("#tNum").addClass("orange2");
  $("#sNum, #hNum").removeClass("green5 green4 green3 green2 blue5 blue4 blue3 blue2");
  $("#sNum").addClass("green3"); 
  $("#hNum").addClass("blue3");
});

function clicked(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 4;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 10;
    centered = null;
  }

  g.selectAll("path")
      .classed("faded", true)
      .classed("active", centered && function(d) { return d === centered; });

  g.transition()
      .duration(750)
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
}

function clicked2(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 1;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }

  g.selectAll("path")
      .classed("faded", false)
      .classed("active", centered && function(d) { return d === centered; });

  g.transition()
      .duration(750)
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
}

d3.helper = {};

d3.helper.tooltip = function(accessor){
    return function(selection){
        var tooltipDiv;
        var bodyNode = d3.select('body').node();
        selection.on("mouseover", function(d, i){
            // Clean up lost tooltips
            d3.select('body').selectAll('div.tooltip').remove();
            // Append tooltip
            tooltipDiv = d3.select('body').append('div').attr('class', 'tooltip');
            var absoluteMousePos = d3.mouse(bodyNode);
            tooltipDiv.style('left', (absoluteMousePos[0] + 10)+'px')
                .style('top', (absoluteMousePos[1] - 15)+'px')
                .style('position', 'absolute') 
                .style('z-index', 1001);
            // Add text using the accessor function
            var tooltipText = accessor(d, i) || '';
            // Crop text arbitrarily
            //tooltipDiv.style('width', function(d, i){return (tooltipText.length > 80) ? '300px' : null;})
            //    .html(tooltipText);
        })
        .on('mousemove', function(d, i) {
            // Move tooltip
            var absoluteMousePos = d3.mouse(bodyNode);
            tooltipDiv.style('left', (absoluteMousePos[0] + 10)+'px')
                .style('top', (absoluteMousePos[1] - 15)+'px');
            var tooltipText = accessor(d, i) || '';
            tooltipDiv.html(tooltipText);
        })
        .on("mouseout", function(d, i){
            // Remove tooltip
            tooltipDiv.remove();
        });

    };
};

}

function mapTipsDemo(d, subject, race, dataCompare){
    

    for (var i=0; i < dataCompare.length; i++){
    if (dataCompare[i].DistrictNumber == d.properties.COUNTYNAME){
       if (subject == "religion") { var dataPoint = dataCompare[i].adherent_pct + "% religious adherence"; }
       if (subject == "age") { var dataPoint = dataCompare[i].median_age + " median age"; }
       if (subject == "income") { var dataPoint = d3.format("$,")(dataCompare[i].income) + " median income"; }
       if (subject == "education") { var dataPoint = d3.format("%")(dataCompare[i].bachelors_pct + dataCompare[i].grad_degree_pct) + " with bachelor's or higher"; }
       if (subject == "minority") { var dataPoint = d3.format("%")(dataCompare[i].minority_pct) + " minority population"; }

      return  "<strong>" + dataCompare[i].DistrictNumber + " County</strong><div class='" + mapColorDemo(d, subject, race, dataCompare) + "'>" + dataPoint + "</div>";
    }
  }
      // return  "<strong>" + d.properties.COUNTYNAME + "</strong>"; 
}

function mapColorDemo(d, subject, race, dataCompare){
    if (race == "republican"){
  for (var i=0; i < dataCompare.length; i++){
    if (dataCompare[i].DistrictNumber == d.properties.COUNTYNAME || dataCompare[i].DistrictNumber == d.properties.DISTRICT){
  
     if (dataCompare[i].Winner == "RUBIO") {
      if (dataCompare[i].WinnerPct >= .70){ return "purple5"; }
      else if (dataCompare[i].WinnerPct >= .50){ return "purple4"; }
      else if (dataCompare[i].WinnerPct >= .30){ return "purple3"; }
      else if (dataCompare[i].WinnerPct > 0){ return "purple2"; } 
     }
     if (dataCompare[i].Winner == "CRUZ") {
      if (dataCompare[i].WinnerPct >= .70){ return "grayblue5"; }
      else if (dataCompare[i].WinnerPct >= .50){ return "grayblue3"; }
      else if (dataCompare[i].WinnerPct >= .30){ return "grayblue4"; }
      else if (dataCompare[i].WinnerPct > 0){ return "grayblue2"; } 
     }
     if (dataCompare[i].Winner == "TRUMP") {
      if (dataCompare[i].WinnerPct >= .70){ return "orange5"; }
      else if (dataCompare[i].WinnerPct >= .50){ return "orange4"; }
      else if (dataCompare[i].WinnerPct >= .30){ return "orange3"; }
      else if (dataCompare[i].WinnerPct > 0){ return "orange2"; }
     }
     if (dataCompare[i].Winner == "ROMNEY") {
      if (dataCompare[i].WinnerPct >= .70){ return "purple5"; }
      else if (dataCompare[i].WinnerPct >= .50){ return "purple4"; }
      else if (dataCompare[i].WinnerPct >= .30){ return "purple3"; }
      else if (dataCompare[i].WinnerPct > 0){ return "purple2"; } 
     }
     if (dataCompare[i].Winner == "HUCKABEE") {
      if (dataCompare[i].WinnerPct >= .70){ return "grayblue5"; }
      else if (dataCompare[i].WinnerPct >= .50){ return "grayblue3"; }
      else if (dataCompare[i].WinnerPct >= .30){ return "grayblue4"; }
      else if (dataCompare[i].WinnerPct > 0){ return "grayblue2"; } 
     }
     if (dataCompare[i].Winner == "MCCAIN") {
      if (dataCompare[i].WinnerPct >= .70){ return "orange5"; }
      else if (dataCompare[i].WinnerPct >= .50){ return "orange4"; }
      else if (dataCompare[i].WinnerPct >= .30){ return "orange3"; }
      else if (dataCompare[i].WinnerPct > 0){ return "orange2"; }
     }
     if (dataCompare[i].Winner == "PAUL") {
      if (dataCompare[i].WinnerPct >= .70){ return "kasich"; }
      else if (dataCompare[i].WinnerPct >= .50){ return "kasich"; }
      else if (dataCompare[i].WinnerPct >= .30){ return "kasich"; }
      else if (dataCompare[i].WinnerPct > 0){ return "kasich"; }
     }
    }
  }
}
  if (race == "democrat"){
  for (var i=0; i < dataCompare.length; i++){
    if (dataCompare[i].DistrictNumber == d.properties.COUNTYNAME || dataCompare[i].DistrictNumber == d.properties.DISTRICT){
     if (dataCompare[i].Winner == "SANDERS") {
      if (dataCompare[i].WinnerPct >= .70){ return "green5"; }
      else if (dataCompare[i].WinnerPct >= .50){ return "green4"; }
      else if (dataCompare[i].WinnerPct >= .30){ return "green3"; }
      else if (dataCompare[i].WinnerPct > 0){ return "green2"; } 
     }
     if (dataCompare[i].Winner == "CLINTON") {
      if (dataCompare[i].WinnerPct >= .70){ return "blue5"; }
      else if (dataCompare[i].WinnerPct >= .50){ return "blue4"; }
      else if (dataCompare[i].WinnerPct >= .30){ return "blue3"; }
      else if (dataCompare[i].WinnerPct > 0){ return "blue2"; } 
     }
     if (dataCompare[i].Winner == "OBAMA") {
      if (dataCompare[i].WinnerPct >= .70){ return "green5"; }
      else if (dataCompare[i].WinnerPct >= .50){ return "green4"; }
      else if (dataCompare[i].WinnerPct >= .30){ return "green3"; }
      else if (dataCompare[i].WinnerPct > 0){ return "green2"; } 
     }
     if (dataCompare[i].Winner == "No results") { return "gray3"; }
    }
  }
}

  if (race == "demographics"){
  for (var i=0; i < dataCompare.length; i++){
    if (dataCompare[i].DistrictNumber == d.properties.COUNTYNAME){
     if (subject == "religion") {
      if (dataCompare[i].adherent_pct >= 70){ return "gray5"; }
      else if (dataCompare[i].adherent_pct >= 50){ return "gray4"; }
      else if (dataCompare[i].adherent_pct >= 30){ return "gray3"; }
      else if (dataCompare[i].adherent_pct > 0){ return "gray2"; } 
     }
      if (subject == "age") {
      if (dataCompare[i].median_age >= 45){ return "gray5"; }
      else if (dataCompare[i].median_age >= 40){ return "gray4"; }
      else if (dataCompare[i].median_age >= 35){ return "gray3"; }
      else if (dataCompare[i].median_age > 0){ return "gray2"; } 
     }
      if (subject == "income") {
      if (dataCompare[i].income >= 70000){ return "gray5"; }
      else if (dataCompare[i].income >= 55000){ return "gray4"; }
      else if (dataCompare[i].income >= 45000){ return "gray3"; }
      else if (dataCompare[i].income > 0){ return "gray2"; } 
     }
      if (subject == "education") {
      if ((dataCompare[i].bachelors_pct + dataCompare[i].grad_degree_pct) >= .30){ return "gray5"; }
      else if ((dataCompare[i].bachelors_pct + dataCompare[i].grad_degree_pct) >= .25){ return "gray4"; }
      else if ((dataCompare[i].bachelors_pct + dataCompare[i].grad_degree_pct) >= .15){ return "gray3"; }
      else if ((dataCompare[i].bachelors_pct + dataCompare[i].grad_degree_pct) > 0){ return "gray2"; } 
     }
      if (subject == "minority") {
      if (dataCompare[i].minority_pct >= .30){ return "gray5"; }
      else if (dataCompare[i].minority_pct >= .20){ return "gray4"; }
      else if (dataCompare[i].minority_pct >= .10){ return "gray3"; }
      else if (dataCompare[i].minority_pct > 0){ return "gray2"; } 
     }
    }
   }
  }
}

function mapBuildDemo(container, subject, chartContainer, shape, race, geo, dataCompare, index) {

var width = 350,
    height = 400,
    centered;

if (geo=="us") { var projection = d3.geo.albersUsa().scale(700).translate([330, 200]); }
else if (geo=="mn") { var projection = d3.geo.albersUsa().scale(5037).translate([50, 970]); }
else if (geo=="metro") { var projection = d3.geo.mercator().scale([16800]).center([-92.403259,44.988113]); }

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select(container + " svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height);

var g = svg.append("g");

d3.json("shapefiles/" + shape, function(error, us) {

  g.append("g")
      .attr("class", "states")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path)
      // .on("click", clicked)
      // .attr("id", function(d) { var str = d.properties.COUNTYNAME; return str.replace(new RegExp(" ", "g"),"-"); })
      .attr("precinctName", function(d){ return d.properties.COUNTYNAME })
      .attr("class", function(d){
         return mapColorDemo(d, subject, race, dataCompare);
        })
       .on("mousedown", function(d, i){   
        //  if (String(d.properties.COUNTYNAME).length > 4){
        //   $("#precinctName").html(d.properties.COUNTYNAME);
        //   redrawChart(chart,"#chart",race,dataCompare,d.properties.COUNTYNAME,0);
        // } else { 
        //   $("#precinctName").html(d.properties.DISTRICT); 
        //   redrawChart(chart,"#chart",race,dataCompare,d.properties.DISTRICT,0);
        // }
       })
      .style("stroke-width", "1px")
      .style("stroke", "#fff")
      .call(d3.helper.tooltip(function(d, i){
        if (race == "demographics") { return mapTipsDemo(d, subject, race, dataCompare); } 
        else { return mapTips(d, race, dataCompare); }
      }));

  g.append("path")
      //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
      .attr("id", "state-borders")
      .attr("d", path);
});

var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        g.attr("transform","translate("+ 
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        g.selectAll("circle")
            .attr("d", path.projection(projection));
        g.selectAll("path")  
            .attr("d", path.projection(projection)); 

  });

d3.helper = {};

d3.helper.tooltip = function(accessor){
    return function(selection){
        var tooltipDiv;
        var bodyNode = d3.select('body').node();
        selection.on("mouseover", function(d, i){
            // Clean up lost tooltips
            d3.select('body').selectAll('div.tooltip').remove();
            // Append tooltip
            tooltipDiv = d3.select('body').append('div').attr('class', 'tooltip');
            var absoluteMousePos = d3.mouse(bodyNode);
            tooltipDiv.style('left', (absoluteMousePos[0] + 10)+'px')
                .style('top', (absoluteMousePos[1] - 15)+'px')
                .style('position', 'absolute') 
                .style('z-index', 1001);
            // Add text using the accessor function
            var tooltipText = accessor(d, i) || '';
            // Crop text arbitrarily
            //tooltipDiv.style('width', function(d, i){return (tooltipText.length > 80) ? '300px' : null;})
            //    .html(tooltipText);
        })
        .on('mousemove', function(d, i) {
            // Move tooltip
            var absoluteMousePos = d3.mouse(bodyNode);
            tooltipDiv.style('left', (absoluteMousePos[0] + 10)+'px')
                .style('top', (absoluteMousePos[1] - 15)+'px');
            var tooltipText = accessor(d, i) || '';
            tooltipDiv.html(tooltipText);
        })
        .on("mouseout", function(d, i){
            // Remove tooltip
            tooltipDiv.remove();
        });

    };
};

}

function mapReshade(container, shape, race, dataCompare) {

d3.json("shapefiles/" + shape, function(error, us) {

d3.selectAll(container + " svg g path")
      .data(us.features)
      .attr("class", function(d){
          return mapColor(d.properties.NAME, race, dataCompare);
        })
      .call(d3.helper.tooltip(function(d, i){
        return mapTips(d, race, dataCompare);
      }));
  });
}

//CHARTAGGEDON
var chart = [];
var index = 0;
// function chartBuild(container,subject,data,county,index){
  var colorArray = ['#fff']; 
  var formatter = d3.format('%');

nv.addGraph(function() {
  chart[index] = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .margin({top: 30, right: 30, bottom: 20, left: 55})
      .showValues(false)
      .tooltips(true)
      .stacked(false)
      .showLegend(false)
      .color(colorArray)
      // .width($(container).width()).height($(container).height())
      .showControls(false);

  chart[index].forceY([0,1]);

   chart[index].yAxis
      .tickFormat(formatter);

  d3.select('#chart svg')
      .datum(chartData("president",dataDSum,"Minnesota"))
      .transition().duration(500)
      .call(chart[index]);

  nv.utils.windowResize(chart[index].update);


var rects1 = d3.selectAll("#chart rect")
              .filter(function(d, i) { return i == 0; })
              .style("fill","#8672a8");

var rects2 = d3.selectAll("#chart rect")
              .filter(function(d, i) { return i == 1; })
              .style("fill","#5a82ad");

var rects3 = d3.selectAll("#chart rect")
              .filter(function(d, i) { return i == 2; })
              .style("fill","#E07242");

var rects4 = d3.selectAll("#chart rect")
              .filter(function(d, i) { return i == 3; })
              .style("fill","#b57f73");

var rects5 = d3.selectAll("#chart rect")
              .filter(function(d, i) { return i == 4; })
              .style("fill","#9C0004");

var rects6 = d3.selectAll("#chart rect")
              .filter(function(d, i) { return i == 5; })
              .style("fill","#DF95AF");

var rects7 = d3.selectAll("#chart rect")
              .filter(function(d, i) { return i == 6; })
              .style("fill","#D97171");

  return chart[index];
});

// }

function redrawChart(chart,container,subject,data,county,index){
  var colorArray = ['#fff']; 
  var formatter = d3.format('%');

    d3.select(container + ' svg').datum(chartData(subject,data,county)).transition().duration(300).call(chart[index].color(colorArray));
    // chart[index].yAxistickFormat(formatter);
    nv.utils.windowResize(chart[index].update);

var rects1 = d3.selectAll("#chart rect")
              .filter(function(d, i) { return i == 0; })
              .style("fill","#8672a8");

var rects2 = d3.selectAll("#chart rect")
              .filter(function(d, i) { return i == 1; })
              .style("fill","#5a82ad");

var rects3 = d3.selectAll("#chart rect")
              .filter(function(d, i) { return i == 2; })
              .style("fill","#E07242");

var rects4 = d3.selectAll("#chart rect")
              .filter(function(d, i) { return i == 3; })
              .style("fill","#b57f73");

var rects5 = d3.selectAll("#chart rect")
              .filter(function(d, i) { return i == 4; })
              .style("fill","#9C0004");

var rects6 = d3.selectAll("#chart rect")
              .filter(function(d, i) { return i == 5; })
              .style("fill","#DF95AF");

var rects7 = d3.selectAll("#chart rect")
              .filter(function(d, i) { return i == 6; })
              .style("fill","#D97171");
}

// }

function redrawChart(chart,container,subject,data,county,index){
  var colorArray = ['#fff']; 
  var formatter = d3.format('%');

    d3.select(container + ' svg').datum(chartData(subject,data,county)).transition().duration(300).call(chart[index].color(colorArray));
    // chart[index].yAxistickFormat(formatter);
    nv.utils.windowResize(chart[index].update);

var rects1 = d3.selectAll("#chart rect")
              .filter(function(d, i) { return i == 0; })
              .style("fill","#8672a8");

var rects2 = d3.selectAll("#chart rect")
              .filter(function(d, i) { return i == 1; })
              .style("fill","#5a82ad");

var rects3 = d3.selectAll("#chart rect")
              .filter(function(d, i) { return i == 2; })
              .style("fill","#E07242");

var rects4 = d3.selectAll("#chart rect")
              .filter(function(d, i) { return i == 3; })
              .style("fill","#b57f73");

var rects5 = d3.selectAll("#chart rect")
              .filter(function(d, i) { return i == 4; })
              .style("fill","#9C0004");

var rects6 = d3.selectAll("#chart rect")
              .filter(function(d, i) { return i == 5; })
              .style("fill","#DF95AF");

var rects7 = d3.selectAll("#chart rect")
              .filter(function(d, i) { return i == 6; })
              .style("fill","#D97171");
}

function chartData(subject,data,county) {

var rubio, cruz, trump, kasich, carson, clinton, sanders, other = 0;

for (var i=0; i < dataRSum.length; i++){
  if (dataRSum[i].DistrictNumber == county){
    rubio = dataRSum[i].RubioPct;
    cruz = dataRSum[i].CruzPct;
    trump = dataRSum[i].TrumpPct;
    kasich = dataRSum[i].KasichPct;
    carson = dataRSum[i].CarsonPct;
    $("#voteTotalR").html(d3.format(",")(dataRSum[i].TotalVotes));
      if (rubio >= .70){ var shade1 = "purple5"; }
      else if (rubio >= .50){ var shade1 = "purple4"; }
      else if (rubio >= .30){ var shade1 = "purple3"; }
      else if (rubio > 0){ var shade1 = "purple2"; }
      if (cruz >= .70){ var shade2 = "grayblue5"; }
      else if (cruz >= .50){ var shade2 = "grayblue4"; }
      else if (cruz >= .30){ var shade2 = "grayblue3"; }
      else if (cruz > 0){ var shade2 = "grayblue2"; }
      if (trump >= .70){ var shade3 = "orange5"; }
      else if (trump >= .50){ var shade3 = "orange4"; }
      else if (trump >= .30){ var shade3 = "orange3"; }
      else if (trump > 0){ var shade3 = "orange2"; }
    $("#mNum,#cNum","#tNum").removeClass("bogus orange5 orange4 orange3 orange2 grayblue5 grayblue4 grayblue3 grayblue2 purple2 purple3 purple4 purple5");
    $("#mNum").addClass(shade1);
    $("#cNum").addClass(shade2);
    $("#tNum").addClass(shade3);
    $("#mNum").html(d3.format("%")(rubio));
    $("#cNum").html(d3.format("%")(cruz));
    $("#tNum").html(d3.format("%")(trump));
    if (rubio > cruz && rubio > trump) { $("#cMark, #tMark").html(""); $("#mMark").html("&#x2713;"); }
    else if (cruz > rubio && cruz > trump) { $("#mMark, #tMark").html(""); $("#cMark").html("&#x2713;"); }
    else if (trump > cruz && trump > rubio) { $("#mMark, #cMark").html(""); $("#tMark").html("&#x2713;"); }
    break;
  }
}

for (var i=0; i < dataDSum.length; i++){
    if (dataDSum[i].DistrictNumber == county){
    sanders = dataDSum[i].SandersPct;
    clinton = dataDSum[i].ClintonPct;
    other = 0;
    $("#voteTotalD").html(d3.format(",")(dataDSum[i].TotalVotes));
      if (sanders >= .70){ var shade4 = "green5"; }
      else if (sanders >= .50){ var shade4 = "green4"; }
      else if (sanders >= .30){ var shade4 = "green3"; }
      else if (sanders > 0){ var shade4 = "green2"; }
      if (clinton >= .70){ var shade5 = "blue5"; }
      else if (clinton >= .50){ var shade5 = "blue4"; }
      else if (clinton >= .30){ var shade5 = "blue3"; }
      else if (clinton > 0){ var shade5 = "blue2"; }
    $("#sNum, #hNum").removeClass("bogus green5 green4 green3 green2 blue5 blue4 blue3 blue2");
    $("#sNum").addClass(shade4);
    $("#hNum").addClass(shade5);
    $("#sNum").html(d3.format("%")(sanders));
    $("#hNum").html(d3.format("%")(clinton));
    if (sanders < clinton) { $("#sMark").html(""); $("#hMark").html("&#x2713;"); }
    else if (clinton < sanders) { $("#hMark").html(""); $("#sMark").html("&#x2713;"); }
    break;
  }
}

if (county == "Minnesota"){
      return [{
        "key": "Vote %",
        "values": [
          { 
            "label" : "Sanders" ,
            "value" : .61
          },
          { 
            "label" : "Clinton" ,
            "value" : .38
          },
          { 
            "label" : "Rubio" ,
            "value" : .36
          },
          { 
            "label" : "Cruz" ,
            "value" : .29
          },
          { 
            "label" : "Trump" ,
            "value" : .21
          },
          { 
            "label" : "Kasich" ,
            "value" : .06
          },
          { 
            "label" : "Carson" ,
            "value" : .07
          }
        ]
      }]
    }
  else {
    return [{
        "key": "Vote %",
        "values": [
                   { 
            "label" : "Sanders" ,
            "value" : sanders
          },
          { 
            "label" : "Clinton" ,
            "value" : clinton
          },
          { 
            "label" : "Rubio" ,
            "value" : rubio
          },
          { 
            "label" : "Cruz" ,
            "value" : cruz
          },
          { 
            "label" : "Trump" ,
            "value" : trump
          },
          { 
            "label" : "Kasich" ,
            "value" : kasich
          },
          { 
            "label" : "Carson" ,
            "value" : carson
          }
        ]
      }]
  }
}

$( document ).ready(function() {
     $('#filterR input, #filterD input').keyup(function(i){
        $('.card').hide();
        var txt = $(this).val();
        $('.card').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).show();
           }
        });
    });

});

  tableBuild("#rtablehere","republican",dataRSum,"mn",null,0);
  tableBuild("#dtablehere","democrat",dataDSum,"mn",null,0);

  mapBuild("#mn_mapR", "#infobox", "#chart", "rCaucus.json", "republican", "mn", dataRSum, 0);
  mapBuild("#mn_mapRMetro", "#infobox", "#chart", "rCaucus_metro.json", "republican", "metro", dataRSum, 0);

  mapBuild("#mn_mapD", "#infobox", "#chart", "dCaucus.json", "democrat", "mn", dataDSum, 0);
  mapBuild("#mn_mapDMetro", "#infobox", "#chart", "dCaucus_metro.json", "democrat", "metro", dataDSum, 0);

  mapBuildDemo("#countyMapR", "#infobox", "#chart", "rCaucus.json", "republican", "mn", dataRSum, 0);
  mapBuildDemo("#countyMapD", "#infobox", "#chart", "dCaucus.json", "democrat", "mn", dataDSum, 0);
  mapBuildDemo("#countyMapR2008", "#infobox", "#chart", "mnsenate.json", "republican", "mn", dataR2008, 0);
  mapBuildDemo("#countyMapD2008", "#infobox", "#chart", "mnsenate.json", "democrat", "mn", dataD2008, 0);
  mapBuildDemo("#religionMapR", "religion", "#chart", "counties.json", "demographics", "mn", dataDemo, 0);
  mapBuildDemo("#ageMapR", "age", "#chart", "counties.json", "demographics", "mn", dataDemo, 0);
  mapBuildDemo("#incomeMapR", "income", "#chart", "counties.json", "demographics", "mn", dataDemo, 0);
  mapBuildDemo("#educationMapR", "education", "#chart", "counties.json", "demographics", "mn", dataDemo, 0);
  mapBuildDemo("#minorityMapR", "minority", "#chart", "counties.json", "demographics", "mn", dataDemo, 0);

  mapBuildDemo("#countyMapRMetro", "#infobox", "#chart", "rCaucus_metro.json", "republican", "metro", dataRSum, 0);
  mapBuildDemo("#countyMapDMetro", "#infobox", "#chart", "dCaucus_metro.json", "democrat", "metro", dataDSum, 0);
  mapBuildDemo("#countyMapRMetro2008", "#infobox", "#chart", "mnsenate_metro.json", "republican", "metro", dataR2008, 0);
  mapBuildDemo("#countyMapDMetro2008", "#infobox", "#chart", "mnsenate_metro.json", "democrat", "metro", dataD2008, 0);
  mapBuildDemo("#religionMapRMetro", "religion", "#chart", "counties_metro.json", "demographics", "metro", dataDemo, 0);
  mapBuildDemo("#ageMapRMetro", "age", "#chart", "counties_metro.json", "demographics", "metro", dataDemo, 0);
  mapBuildDemo("#incomeMapRMetro", "income", "#chart", "counties_metro.json", "demographics", "metro", dataDemo, 0);
  mapBuildDemo("#educationMapRMetro", "education", "#chart", "counties_metro.json", "demographics", "metro", dataDemo, 0);
  mapBuildDemo("#minorityMapRMetro", "minority", "#chart", "counties_metro.json", "demographics", "metro", dataDemo, 0);

});
});
});
});
});
},{}]},{},[1])