(this["webpackJsonpgyanayu-react-app"]=this["webpackJsonpgyanayu-react-app"]||[]).push([[60],{133:function(e,t,a){"use strict";a(0);var r=a(167),s=a(153),i=a(163),o=a(1);t.a=function(e){return Object(o.jsx)(r.a,{children:Object(o.jsx)(s.a,{children:Object(o.jsxs)("div",{className:"page-title-box",children:[Object(o.jsx)("h4",{className:"page-title",children:e.title}),Object(o.jsx)("div",{className:"page-title-right",children:Object(o.jsxs)(i.a,{listProps:{className:"m-0"},children:[Object(o.jsx)(i.a.Item,{href:"/",children:"Shreyu"}),(e.breadCrumbItems||[]).map((function(e,t){return e.active?Object(o.jsx)(i.a.Item,{active:!0,children:e.label},t):Object(o.jsx)(i.a.Item,{href:e.path,children:e.label},t)}))]})})]})})})}},205:function(e,t,a){"use strict";a(0);var r=a(1);t.a=function(){return Object(r.jsx)("div",{className:"preloader",id:"preloader",children:Object(r.jsx)("div",{className:"status",id:"status",children:Object(r.jsxs)("div",{className:"spinner",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})})})}},960:function(e,t,a){"use strict";a.r(t);var r=a(23),s=a(0),i=a.n(s),o=a(167),n=a(153),c=a(133),l=a(148),d=a.n(l),h=a(160),j=a(205),x=a(1),b=function(e){var t=e.lineChartWithData,a=e.showLoader,r=[{name:"High - 2018",data:t.data1||[]},{name:"Low - 2018",data:t.data2||[]}];return Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title mt-0 mb-3",children:"Line with Data Labels"}),a?Object(x.jsx)("div",{style:{height:380,position:"relative"},children:Object(x.jsx)(j.a,{})}):Object(x.jsx)(d.a,{options:{chart:{height:380,type:"line",zoom:{enabled:!1}},dataLabels:{enabled:!0},stroke:{width:[3,3],curve:"smooth"},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#e9ecef"},markers:{size:6},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"],title:{text:"Month"}},yaxis:{title:{text:"Temperature"},min:5,max:40},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}},legend:{show:!1}}}]},series:r,type:"line",height:380,className:"apex-charts",dir:"ltr"})]})})},m=function(e){var t=e.gradientLineChartData,a=e.showLoader,r=[{name:"Likes",data:t.data||[]}];return Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title mt-0 mb-3",children:"Gradient Line Chart"}),a?Object(x.jsx)("div",{style:{height:380,position:"relative"},children:Object(x.jsx)(j.a,{})}):Object(x.jsx)(d.a,{id:"apex-charts-Gradient",options:{chart:{height:380,type:"line"},stroke:{width:5,curve:"smooth"},xaxis:{type:"datetime",categories:["1/11/2000","2/11/2000","3/11/2000","4/11/2000","5/11/2000","6/11/2000","7/11/2000","8/11/2000","9/11/2000","10/11/2000","11/11/2000","12/11/2000","1/11/2001","2/11/2001","3/11/2001","4/11/2001","5/11/2001","6/11/2001"]},title:{text:"Social Media",align:"left",style:{fontSize:"14px",color:"#666"}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#43d39e"],shadeIntensity:1,type:"vertical",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:4,colors:["#50a5f1"],strokeWidth:2,hover:{size:7}},yaxis:{min:-10,max:40,title:{text:"Engagement"}},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#185a9d"},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}},legend:{show:!1}}}]},series:r,type:"line",height:380,className:"apex-charts",dir:"ltr"})]})})},p=function(e){var t=e.stackedAreaChartData,a=e.showLoader,r=[{name:"South",data:t.data1||[]},{name:"North",data:t.data2||[]},{name:"Central",data:t.data3||[]}];return Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title mb-3",children:"Stacked Area"}),a?Object(x.jsx)("div",{style:{height:380,position:"relative"},children:Object(x.jsx)(j.a,{})}):Object(x.jsx)(d.a,{options:{chart:{id:"apexchart",height:380,type:"area",stacked:!0},stroke:{width:[3,3,3],curve:"smooth"},legend:{position:"top",horizontalAlign:"left"},xaxis:{type:"datetime"}},series:r,type:"area",height:380,className:"apex-charts"})]})})},O=function(e){var t=e.basicColumnChartData,a=e.showLoader,r=[{name:"Net Profit",data:t.data1||[]},{name:"Revenue",data:t.data2||[]},{name:"Free Cash Flow",data:t.data3||[]}];return Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title mt-0 mb-3",children:"Basic Column Chart"}),a?Object(x.jsx)("div",{style:{height:380,position:"relative"},children:Object(x.jsx)(j.a,{})}):Object(x.jsx)(d.a,{options:{chart:{height:380,type:"bar"},plotOptions:{bar:{horizontal:!1,columnWidth:"55%"}},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},legend:{offsetY:7},yaxis:{title:{text:"$ (thousands)"}},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"},tooltip:{y:{formatter:function(e){return"$ "+e+" thousands"}}}},series:r,type:"bar",height:380,className:"apex-charts",dir:"ltr"})]})})},f=function(e){var t=e.columnChartData,a=e.showLoader,r={plotOptions:{bar:{dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:function(e){return e+"%"},offsetY:-30,style:{fontSize:"12px",colors:["#304758"]}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],position:"top",labels:{offsetY:-18},axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{fill:{type:"gradient",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}}},tooltip:{enabled:!0,offsetY:-35}},fill:{gradient:{shade:"light",type:"horizontal",shadeIntensity:.25,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[50,0,100,100]}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,formatter:function(e){return e+"%"}}},title:{text:"Monthly Inflation in Argentina, 2002",floating:!0,offsetY:350,align:"center",style:{color:"#444"}},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"}},s=[{name:"Inflation",data:t.data||[]}];return Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title mt-0 mb-3",children:"Column Chart with Datalabels"}),a?Object(x.jsx)("div",{style:{height:380,position:"relative"},children:Object(x.jsx)(j.a,{})}):Object(x.jsx)(d.a,{options:r,series:s,type:"bar",height:380,className:"apex-charts",dir:"ltr"})]})})},u=function(e){var t=e.mixedChart1Data,a=e.showLoader,r=[{name:"Team A",type:"area",data:t.data1||[]},{name:"Team B",type:"line",data:t.data2||[]}];return Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title mb-3",children:"Mixed Chart - Line & Area"}),a?Object(x.jsx)("div",{style:{height:380,position:"relative"},children:Object(x.jsx)(j.a,{})}):Object(x.jsx)(d.a,{options:{chart:{height:380,type:"line"},stroke:{width:3,curve:"smooth"},fill:{type:"solid",opacity:[.35,1]},labels:["Dec 01","Dec 02","Dec 03","Dec 04","Dec 05","Dec 06","Dec 07","Dec 08","Dec 09 ","Dec 10","Dec 11"],markers:{size:0},legend:{offsetY:7},yaxis:[{title:{text:"Series A"}},{opposite:!0,title:{text:"Series B"}}],tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return"undefined"!==typeof e?e.toFixed(0)+" points":e}}}},series:r,type:"line",height:380,className:"apex-charts"})]})})},g=function(e){var t=e.basicBarChartData,a=e.showLoader,r=[{data:t.data||[]}];return Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title mt-0 mb-3",children:"Basic Bar Chart"}),a?Object(x.jsx)("div",{style:{height:380,position:"relative"},children:Object(x.jsx)(j.a,{})}):Object(x.jsx)(d.a,{options:{chart:{height:380,type:"bar"},plotOptions:{bar:{horizontal:!0}},xaxis:{categories:["South Korea","Canada","United Kingdom","Netherlands","Italy","France","Japan","United States","China","Germany"]}},series:r,type:"bar",height:380,className:"apex-charts",dir:"ltr"})]})})},y=function(e){var t=e.barWithNegativeData,a=e.showLoader,r={chart:{height:380,type:"bar",stacked:!0},plotOptions:{bar:{horizontal:!0,barHeight:"80%"}},grid:{borderColor:"#f1f3fa"},yaxis:{min:-5,max:5},tooltip:{shared:!1,y:{formatter:function(e){return Math.abs(e)+"%"}}},xaxis:{categories:["85+","80-84","75-79","70-74","65-69","60-64","55-59","50-54","45-49","40-44","35-39","30-34","25-29","20-24","15-19","10-14","5-9","0-4"],title:{text:"Percent"},labels:{formatter:function(e){return Math.abs(Math.round(Number(e)))+"%"}}},legend:{offsetY:7}},s=[{name:"Males",data:t.data1||[]},{name:"Females",data:t.data2||[]}];return Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title mt-0 mb-3",children:"Bar with Negative Values"}),a?Object(x.jsx)("div",{style:{height:380,position:"relative"},children:Object(x.jsx)(j.a,{})}):Object(x.jsx)(d.a,{options:r,series:s,type:"bar",height:380,className:"apex-charts",dir:"ltr"})]})})},w=function(e){var t=e.mixedChart2Data,a=e.showLoader,r=[{name:"Team A",type:"column",data:t.data1||[]},{name:"Team B",type:"area",data:t.data2||[]},{name:"Team C",type:"line",data:t.data3||[]}];return Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title mt-0 mb-3",children:"Line, Column & Area Chart"}),a?Object(x.jsx)("div",{style:{height:380,position:"relative"},children:Object(x.jsx)(j.a,{})}):Object(x.jsx)(d.a,{options:{chart:{stacked:!1},stroke:{width:[0,2,4],curve:"smooth"},plotOptions:{bar:{columnWidth:"50%"}},fill:{opacity:[.85,.25,1],gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.85,opacityTo:.55,stops:[0,100,100,100]}},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],markers:{size:0},legend:{offsetY:7},xaxis:{type:"datetime"},yaxis:{title:{text:"Points"}},tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return"undefined"!==typeof e?e.toFixed(0)+" points":e}}},grid:{borderColor:"#f1f3fa"}},series:r,type:"line",height:380,className:"apex-charts",dir:"ltr"})]})})},v=function(e){var t=e.multiYaxisChartData,a=e.showLoader,r=[{name:"Income",type:"column",data:t.data1||[]},{name:"Cashflow",type:"column",data:t.data2||[]},{name:"Revenue",type:"line",data:t.data3||[]}];return Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title mt-0 mb-3",children:"Multiple Y-Axis Chart"}),a?Object(x.jsx)("div",{style:{height:380,position:"relative"},children:Object(x.jsx)(j.a,{})}):Object(x.jsx)(d.a,{options:{chart:{stacked:!1},stroke:{width:[0,0,3]},xaxis:{categories:[2009,2010,2011,2012,2013,2014,2015,2016]},yaxis:[{axisTicks:{show:!0},axisBorder:{show:!0,color:"#675db7"},labels:{style:{colors:["#675db7"]}},title:{text:"Income (thousand crores)"}},{axisTicks:{show:!0},axisBorder:{show:!0,color:"#23b397"},labels:{style:{colors:["#23b397"]},offsetX:10},title:{text:"Operating Cashflow (thousand crores)"}},{opposite:!0,axisTicks:{show:!0},axisBorder:{show:!0,color:"#e36498"},labels:{style:{colors:["#e36498"]}},title:{text:"Revenue (thousand crores)"}}],tooltip:{followCursor:!0,y:{formatter:function(e){return"undefined"!==typeof e?e+" thousand crores":e}}},grid:{borderColor:"#f1f3fa"},legend:{offsetY:7},responsive:[{breakpoint:600,options:{yaxis:{show:!1},legend:{show:!1}}}]},series:r,type:"line",height:380,className:"apex-charts",dir:"ltr"})]})})},C=function(e){var t=e.bubbleChartData,a=e.showLoader,r=[{name:"Bubble 1",data:t.data1||[]},{name:"Bubble 2",data:t.data2||[]},{name:"Bubble 3",data:t.data3||[]}];return Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title mt-0 mb-3",children:"Simple Bubble Chart"}),a?Object(x.jsx)("div",{style:{height:380,position:"relative"},children:Object(x.jsx)(j.a,{})}):Object(x.jsx)(d.a,{options:{fill:{opacity:.8},xaxis:{tickAmount:12,type:"category"},yaxis:{max:70},grid:{borderColor:"#f1f3fa"},legend:{offsetY:7}},series:r,type:"bubble",height:380,className:"apex-charts",dir:"ltr"})]})})},D=function(e){var t=e.threeDBubbleChartData,a=e.showLoader,r=[{name:"Product 1",data:t.data1||[]},{name:"Product 2",data:t.data2||[]},{name:"Product 3",data:t.data3||[]},{name:"Product 4",data:t.data4||[]}];return Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title mt-0 mb-3",children:"3D Bubble Chart"}),a?Object(x.jsx)("div",{style:{height:380,position:"relative"},children:Object(x.jsx)(j.a,{})}):Object(x.jsx)(d.a,{options:{fill:{type:"gradient"},xaxis:{tickAmount:12,type:"datetime",labels:{rotate:0}},yaxis:{max:70},legend:{offsetY:7},grid:{borderColor:"#f1f3fa"}},series:r,type:"bubble",height:380,className:"apex-charts",dir:"ltr"})]})})},T=function(e){var t=e.scatterChartData,a=e.showLoader,r={chart:{zoom:{enabled:!1}},xaxis:{tickAmount:10,labels:{formatter:function(e){return parseFloat(e).toFixed(1)}}},yaxis:{tickAmount:7},grid:{borderColor:"#f1f3fa"},legend:{offsetY:7},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}},legend:{show:!1}}}]},s=[{name:"Sample A",data:t.data1||[]},{name:"Sample B",data:t.data2||[]},{name:"Sample C",data:t.data3||[]}];return Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title mt-0 mb-3",children:"Scatter (XY) Chart"}),a?Object(x.jsx)("div",{style:{height:380,position:"relative"},children:Object(x.jsx)(j.a,{})}):Object(x.jsx)(d.a,{options:r,series:s,type:"scatter",height:380,className:"apex-charts",dir:"ltr"})]})})},B=function(e){var t=e.scatterDateTimeChartData,a=e.showLoader,r=[{name:"Team 1",data:t.data1||[]},{name:"Team 2",data:t.data2||[]},{name:"Team 3",data:t.data3||[]},{name:"Team 4",data:t.data4||[]},{name:"Team 5",data:t.data5||[]}];return Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title mt-0 mb-3",children:"Scatter Chart - Datetime"}),a?Object(x.jsx)("div",{style:{height:380,position:"relative"},children:Object(x.jsx)(j.a,{})}):Object(x.jsx)(d.a,{options:{chart:{zoom:{type:"xy"}},grid:{borderColor:"#f1f3fa",xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}},legend:{offsetY:7},xaxis:{type:"datetime"},yaxis:{max:70},tooltip:{theme:"dark",x:{show:!1}},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}},legend:{show:!1}}}]},series:r,type:"scatter",height:380,className:"apex-charts",dir:"ltr"})]})})},L=function(e){var t=e.pieChartData,a=e.showLoader,r=t.data||[];return Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title mt-0 mb-3",children:"Simple Pie Chart"}),a?Object(x.jsx)("div",{style:{height:320,position:"relative"},children:Object(x.jsx)(j.a,{})}):Object(x.jsx)(d.a,{options:{labels:["Series 1","Series 2","Series 3","Series 4","Series 5"],legend:{show:!0,position:"bottom",horizontalAlign:"center",floating:!1,fontSize:"14px",offsetX:0,offsetY:7},responsive:[{breakpoint:600,options:{chart:{height:240},legend:{show:!1}}}]},series:r,type:"pie",height:320,className:"apex-charts",dir:"ltr"})]})})},N=function(e){var t=e.gradientDonutChartData,a=e.showLoader,r=t.data||[];return Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title mt-0 mb-3",children:"Gradient Donut Chart"}),a?Object(x.jsx)("div",{style:{height:320,position:"relative"},children:Object(x.jsx)(j.a,{})}):Object(x.jsx)(d.a,{options:{legend:{show:!0,position:"bottom",horizontalAlign:"center",floating:!1,fontSize:"14px",offsetX:0,offsetY:7},labels:["Series 1","Series 2","Series 3","Series 4","Series 5"],responsive:[{breakpoint:600,options:{chart:{height:240},legend:{show:!1}}}],fill:{type:"gradient"}},series:r,type:"donut",height:320,className:"apex-charts",dir:"ltr"})]})})},k=function(e){var t=e.patternedDonutChartData,a=e.showLoader,r=t.data||[];return Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title mt-0 mb-3",children:"Patterned Donut Chart"}),a?Object(x.jsx)("div",{style:{height:320,position:"relative"},children:Object(x.jsx)(j.a,{})}):Object(x.jsx)(d.a,{options:{chart:{dropShadow:{enabled:!0,color:"#111",top:-1,left:3,blur:3,opacity:.2}},stroke:{show:!0,width:2},labels:["Comedy","Action","SciFi","Drama","Horror"],fill:{type:"pattern",opacity:1,pattern:{style:["verticalLines","squares","horizontalLines","circles","slantedLines"]}},legend:{show:!0,position:"bottom",horizontalAlign:"center",floating:!1,fontSize:"14px",offsetX:0,offsetY:7},responsive:[{breakpoint:600,options:{chart:{height:240},legend:{show:!1}}}]},series:r,type:"donut",height:320,className:"apex-charts",dir:"ltr"})]})})},M=function(e){var t=e.radarChartData,a=e.showLoader,r=t.data||[];return Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title mt-0 mb-3",children:"Basic RadialBar Chart"}),a?Object(x.jsx)("div",{style:{height:350,position:"relative"},children:Object(x.jsx)(j.a,{})}):Object(x.jsx)(d.a,{options:{plotOptions:{radialBar:{hollow:{size:"70%"}}},colors:["#50a5f1"],labels:["CRICKET"]},series:r,type:"radialBar",height:350,className:"apex-charts",dir:"ltr"})]})})},S=function(e){var t=e.multiRadarChartData,a=e.showLoader,r={plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(e){return String(249)}}}}},labels:["Apples","Oranges","Bananas","Berries"]},s=t.data||[];return Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title mt-0 mb-3",children:"Multiple RadialBars"}),a?Object(x.jsx)("div",{style:{height:350,position:"relative"},children:Object(x.jsx)(j.a,{})}):Object(x.jsx)(d.a,{options:r,series:s,type:"radialBar",height:350,className:"apex-charts",dir:"ltr"})]})})},F=function(e){var t=e.gaugeChartData,a=e.showLoader,r={plotOptions:{radialBar:{startAngle:-135,endAngle:135,dataLabels:{name:{fontSize:"16px",color:void 0,offsetY:120},value:{offsetY:76,fontSize:"22px",color:void 0,formatter:function(e){return e+"%"}}}}},fill:{gradient:{shade:"dark",shadeIntensity:.15,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,65,91]}},stroke:{dashArray:4},colors:["#f46a6a"],labels:["Median Ratio"],responsive:[{breakpoint:380,options:{chart:{height:280}}}]},s=t.data||[];return Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title mt-0 mb-3",children:"Multiple RadialBars"}),a?Object(x.jsx)("div",{style:{height:350,position:"relative"},children:Object(x.jsx)(j.a,{})}):Object(x.jsx)(d.a,{options:r,series:s,type:"radialBar",height:350,className:"apex-charts",dir:"ltr"})]})})};function A(e,t,a){for(var r=0,s=[];r<t;){var i=e,o=Math.floor(Math.random()*(a.max-a.min+1))+a.min;s.push({x:i,y:o}),e+=864e5,r++}return s}function z(e,t,a){for(var r=0,s=[];r<t;){var i=Math.floor(750*Math.random())+1,o=Math.floor(Math.random()*(a.max-a.min+1))+a.min,n=Math.floor(61*Math.random())+15;s.push([i,o,n]),864e5,r++}return s}function Y(e,t,a){for(var r=0,s=[];r<t;){var i=Math.floor(Math.random()*(a.max-a.min+1))+a.min,o=Math.floor(61*Math.random())+15;s.push([e,i,o]),e+=864e5,r++}return s}var G={data1:[28,29,33,36,32,32,33],data2:[12,11,14,18,17,13,13]},I={data:[4,3,10,9,29,19,22,9,12,7,19,5,13,9,17,2,7,5]},E={data1:A(new Date("11 Feb 2019 GMT").getTime(),20,{min:10,max:60}),data2:A(new Date("11 Feb 2019 GMT").getTime(),20,{min:10,max:20}),data3:A(new Date("11 Feb 2019 GMT").getTime(),20,{min:10,max:15})},J={data1:[44,55,57,56,61,58,63,60,66],data2:[76,85,101,98,87,105,91,114,94],data3:[35,41,36,26,45,48,52,53,41]},P={data:[2.3,3.1,4,10.1,4,3.6,3.2,2.3,1.4,.8,.5,.2]},R={data1:[44,55,31,47,31,43,26,41,31,47,33],data2:[55,69,45,61,43,54,37,52,44,61,43]},W={data:[400,430,448,470,540,580,690,1100,1200,1380]},X={data1:[.4,.65,.76,.88,1.5,2.1,2.9,3.8,3.9,4.2,4,4.3,4.1,4.2,4.5,3.9,3.5,3],data2:[-.8,-1.05,-1.06,-1.18,-1.4,-2.2,-2.85,-3.7,-3.96,-4.22,-4.3,-4.4,-4.1,-4,-4.1,-3.4,-3.1,-2.8]},H={data1:[23,11,22,27,13,22,37,21,44,22,30],data2:[44,55,41,67,22,43,21,41,56,27,43],data3:[30,25,36,30,45,35,64,52,59,36,39]},K={data1:[1.4,2,2.5,1.5,2.5,2.8,3.8,4.6],data2:[1.1,3,3.1,4,4.1,4.9,6.5,8.5],data3:[20,29,37,36,44,45,50,58]},U={data1:z(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60}),data2:z(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60}),data3:z(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},$={data1:Y(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60}),data2:Y(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60}),data3:Y(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60}),data4:Y(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},q={data1:[[16.4,5.4],[21.7,2],[25.4,3],[19,2],[10.9,1],[13.6,3.2],[10.9,7.4],[10.9,0],[10.9,8.2],[16.4,0],[16.4,1.8],[13.6,.3],[13.6,0],[29.9,0],[27.1,2.3],[16.4,0],[13.6,3.7],[10.9,5.2],[16.4,6.5],[10.9,0],[24.5,7.1],[10.9,0],[8.1,4.7],[19,0],[21.7,1.8],[27.1,0],[24.5,0],[27.1,0],[29.9,1.5],[27.1,.8],[22.1,2]],data2:[[6.4,13.4],[1.7,11],[5.4,8],[9,17],[1.9,4],[3.6,12.2],[1.9,14.4],[1.9,9],[1.9,13.2],[1.4,7],[6.4,8.8],[3.6,4.3],[1.6,10],[9.9,2],[7.1,15],[1.4,0],[3.6,13.7],[1.9,15.2],[6.4,16.5],[.9,10],[4.5,17.1],[10.9,10],[.1,14.7],[9,10],[12.7,11.8],[2.1,10],[2.5,10],[27.1,10],[2.9,11.5],[7.1,10.8],[2.1,12]],data3:[[21.7,3],[23.6,3.5],[24.6,3],[29.9,3],[21.7,20],[23,2],[10.9,3],[28,4],[27.1,.3],[16.4,4],[13.6,0],[19,5],[22.4,3],[24.5,3],[32.6,3],[27.1,4],[29.6,6],[31.6,8],[21.6,5],[20.9,4],[22.4,0],[32.6,10.3],[29.7,20.8],[24.5,.8],[21.4,0],[21.7,6.9],[28.6,7.7],[15.4,0],[18.1,0],[33.4,0],[16.4,0]]},V={data1:A(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60}),data2:A(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60}),data3:A(new Date("11 Feb 2017 GMT").getTime(),30,{min:10,max:60}),data4:A(new Date("11 Feb 2017 GMT").getTime(),10,{min:10,max:60}),data5:A(new Date("11 Feb 2017 GMT").getTime(),30,{min:10,max:60})},Q={data:[44,55,41,17,15]},Z={data:[44,55,41,17,15]},_={data:[44,55,41,17,15]},ee={data:[70]},te={data:[44,55,67,83]},ae={data:[67]};t.default=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),a=t[0],l=t[1];return Object(s.useEffect)((function(){return window.Apex&&(window.Apex={chart:{parentHeightOffset:0,toolbar:{show:!1}},grid:{padding:{left:20,right:0}},colors:["#5369F8","#43D39E","#F77E53","#1CE1AC","#25C2E3","#FFBE0B"],tooltip:{theme:"dark",x:{show:!1}},dataLabels:{enabled:!1},xaxis:{axisBorder:{color:"#D6DDEA"},axisTicks:{color:"#D6DDEA"}},yaxis:{labels:{offsetX:-5}}},l(!0)),function(){window.Apex&&(window.Apex={})}}),[]),Object(x.jsxs)(i.a.Fragment,{children:[Object(x.jsx)(c.a,{breadCrumbItems:[{label:"Apps",path:"/components/charts"},{label:"Charts",path:"/components/charts",active:!0}],title:"Charts"}),Object(x.jsxs)(o.a,{children:[Object(x.jsx)(n.a,{xl:6,children:Object(x.jsx)(b,{lineChartWithData:G,showLoader:!a})}),Object(x.jsx)(n.a,{xl:6,children:Object(x.jsx)(m,{gradientLineChartData:I,showLoader:!a})})]}),Object(x.jsxs)(o.a,{children:[Object(x.jsx)(n.a,{xl:6,children:Object(x.jsx)(p,{stackedAreaChartData:E,showLoader:!a})}),Object(x.jsx)(n.a,{xl:6,children:Object(x.jsx)(O,{basicColumnChartData:J,showLoader:!a})})]}),Object(x.jsxs)(o.a,{children:[Object(x.jsx)(n.a,{xl:6,children:Object(x.jsx)(f,{columnChartData:P,showLoader:!a})}),Object(x.jsx)(n.a,{xl:6,children:Object(x.jsx)(u,{mixedChart1Data:R,showLoader:!a})})]}),Object(x.jsxs)(o.a,{children:[Object(x.jsx)(n.a,{xl:6,children:Object(x.jsx)(g,{basicBarChartData:W,showLoader:!a})}),Object(x.jsx)(n.a,{xl:6,children:Object(x.jsx)(y,{barWithNegativeData:X,showLoader:!a})})]}),Object(x.jsxs)(o.a,{children:[Object(x.jsx)(n.a,{xl:6,children:Object(x.jsx)(w,{mixedChart2Data:H,showLoader:!a})}),Object(x.jsx)(n.a,{xl:6,children:Object(x.jsx)(v,{multiYaxisChartData:K,showLoader:!a})})]}),Object(x.jsxs)(o.a,{children:[Object(x.jsx)(n.a,{xl:6,children:Object(x.jsx)(C,{bubbleChartData:U,showLoader:!a})}),Object(x.jsx)(n.a,{xl:6,children:Object(x.jsx)(D,{threeDBubbleChartData:$,showLoader:!a})})]}),Object(x.jsxs)(o.a,{children:[Object(x.jsx)(n.a,{xl:6,children:Object(x.jsx)(T,{scatterChartData:q,showLoader:!a})}),Object(x.jsx)(n.a,{xl:6,children:Object(x.jsx)(B,{scatterDateTimeChartData:V,showLoader:!a})})]}),Object(x.jsxs)(o.a,{children:[Object(x.jsx)(n.a,{xxl:4,md:6,children:Object(x.jsx)(L,{pieChartData:Q,showLoader:!a})}),Object(x.jsx)(n.a,{xxl:4,md:6,children:Object(x.jsx)(N,{gradientDonutChartData:Z,showLoader:!a})}),Object(x.jsx)(n.a,{xxl:4,md:6,children:Object(x.jsx)(k,{patternedDonutChartData:_,showLoader:!a})}),Object(x.jsx)(n.a,{xxl:4,md:6,children:Object(x.jsx)(M,{radarChartData:ee,showLoader:!a})}),Object(x.jsx)(n.a,{xxl:4,md:6,children:Object(x.jsx)(S,{multiRadarChartData:te,showLoader:!a})}),Object(x.jsx)(n.a,{xxl:4,md:6,children:Object(x.jsx)(F,{gaugeChartData:ae,showLoader:!a})})]})]})}}}]);
//# sourceMappingURL=60.05b98e71.chunk.js.map