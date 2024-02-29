import{h as G,E as j,o as w,c as b,a as r,n as A,D as F,l as D,e as Y,u as W,m as E,t as v,F as O,k as X,b as C,x as q,y as Q,i as I,q as K,A as U,d as P,g as Z}from"./app-e4f1f62e.js";import tt from"./DuAnModal-e74717c4.js";import{_ as et}from"./MainLayout-52bfe2db.js";import{_ as st}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                     *//* empty css              */const S="year",H="month",k="day",T="hour",L="minute",N="second",V="millisecond",R={en:["January","February","March","April","May","June","July","August","September","October","November","December"],es:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],ru:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],ptBr:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],fr:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],tr:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],zh:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},d={parse(i,t="-",e=/[.:]/){if(i instanceof Date)return i;if(typeof i=="string"){let s,o;const n=i.split(" ");s=n[0].split(t).map(a=>parseInt(a,10)),o=n[1]&&n[1].split(e),s[1]=s[1]-1;let h=s;return o&&o.length&&(o.length==4&&(o[3]="0."+o[3],o[3]=parseFloat(o[3])*1e3),h=h.concat(o)),new Date(...h)}},to_string(i,t=!1){if(!(i instanceof Date))throw new TypeError("Invalid argument type");const e=this.get_date_values(i).map((n,h)=>(h===1&&(n=n+1),h===6?M(n+"",3,"0"):M(n+"",2,"0"))),s=`${e[0]}-${e[1]}-${e[2]}`,o=`${e[3]}:${e[4]}:${e[5]}.${e[6]}`;return s+(t?" "+o:"")},format(i,t="YYYY-MM-DD HH:mm:ss.SSS",e="en"){const s=this.get_date_values(i).map(a=>M(a,2,0)),o={YYYY:s[0],MM:M(+s[1]+1,2,0),DD:s[2],HH:s[3],mm:s[4],ss:s[5],SSS:s[6],D:s[2],MMMM:R[e][+s[1]],MMM:R[e][+s[1]]};let n=t;const h=[];return Object.keys(o).sort((a,_)=>_.length-a.length).forEach(a=>{n.includes(a)&&(n=n.replace(a,`$${h.length}`),h.push(o[a]))}),h.forEach((a,_)=>{n=n.replace(`$${_}`,a)}),n},diff(i,t,e=k){let s,o,n,h,a,_,l;return s=i-t,o=s/1e3,h=o/60,n=h/60,a=n/24,_=a/30,l=_/12,e.endsWith("s")||(e+="s"),Math.floor({milliseconds:s,seconds:o,minutes:h,hours:n,days:a,months:_,years:l}[e])},today(){const i=this.get_date_values(new Date).slice(0,3);return new Date(...i)},now(){return new Date},add(i,t,e){t=parseInt(t,10);const s=[i.getFullYear()+(e===S?t:0),i.getMonth()+(e===H?t:0),i.getDate()+(e===k?t:0),i.getHours()+(e===T?t:0),i.getMinutes()+(e===L?t:0),i.getSeconds()+(e===N?t:0),i.getMilliseconds()+(e===V?t:0)];return new Date(...s)},start_of(i,t){const e={[S]:6,[H]:5,[k]:4,[T]:3,[L]:2,[N]:1,[V]:0};function s(n){const h=e[t];return e[n]<=h}const o=[i.getFullYear(),s(S)?0:i.getMonth(),s(H)?1:i.getDate(),s(k)?0:i.getHours(),s(T)?0:i.getMinutes(),s(L)?0:i.getSeconds(),s(N)?0:i.getMilliseconds()];return new Date(...o)},clone(i){return new Date(...this.get_date_values(i))},get_date_values(i){return[i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()]},get_days_in_month(i){const t=[31,28,31,30,31,30,31,31,30,31,30,31],e=i.getMonth();if(e!==1)return t[e];const s=i.getFullYear();return s%4==0&&s%100!=0||s%400==0?29:28}};function M(i,t,e){return i=i+"",t=t>>0,e=String(typeof e<"u"?e:" "),i.length>t?String(i):(t=t-i.length,t>e.length&&(e+=e.repeat(t/e.length)),e.slice(0,t)+String(i))}function c(i,t){return typeof i=="string"?(t||document).querySelector(i):i||null}function g(i,t){const e=document.createElementNS("http://www.w3.org/2000/svg",i);for(let s in t)s==="append_to"?t.append_to.appendChild(e):s==="innerHTML"?e.innerHTML=t.innerHTML:e.setAttribute(s,t[s]);return e}function z(i,t,e,s){const o=it(i,t,e,s);if(o===i){const n=document.createEvent("HTMLEvents");n.initEvent("click",!0,!0),n.eventName="click",o.dispatchEvent(n)}}function it(i,t,e,s,o="0.4s",n="0.1s"){const h=i.querySelector("animate");if(h)return c.attr(h,{attributeName:t,from:e,to:s,dur:o,begin:"click + "+n}),i;const a=g("animate",{attributeName:t,from:e,to:s,dur:o,begin:n,calcMode:"spline",values:e+";"+s,keyTimes:"0; 1",keySplines:nt("ease-out")});return i.appendChild(a),i}function nt(i){return{ease:".25 .1 .25 1",linear:"0 0 1 1","ease-in":".42 0 1 1","ease-out":"0 0 .58 1","ease-in-out":".42 0 .58 1"}[i]}c.on=(i,t,e,s)=>{s?c.delegate(i,t,e,s):(s=e,c.bind(i,t,s))};c.off=(i,t,e)=>{i.removeEventListener(t,e)};c.bind=(i,t,e)=>{t.split(/\s+/).forEach(function(s){i.addEventListener(s,e)})};c.delegate=(i,t,e,s)=>{i.addEventListener(t,function(o){const n=o.target.closest(e);n&&(o.delegatedTarget=n,s.call(this,o,n))})};c.closest=(i,t)=>t?t.matches(i)?t:c.closest(i,t.parentNode):null;c.attr=(i,t,e)=>{if(!e&&typeof t=="string")return i.getAttribute(t);if(typeof t=="object"){for(let s in t)c.attr(i,s,t[s]);return}i.setAttribute(t,e)};class ot{constructor(t,e){this.set_defaults(t,e),this.prepare(),this.draw(),this.bind()}set_defaults(t,e){this.action_completed=!1,this.gantt=t,this.task=e}prepare(){this.prepare_values(),this.prepare_helpers()}prepare_values(){this.invalid=this.task.invalid,this.height=this.gantt.options.bar_height,this.x=this.compute_x(),this.y=this.compute_y(),this.corner_radius=this.gantt.options.bar_corner_radius,this.duration=d.diff(this.task._end,this.task._start,"hour")/this.gantt.options.step,this.width=this.gantt.options.column_width*this.duration,this.progress_width=this.gantt.options.column_width*this.duration*(this.task.progress/100)||0,this.group=g("g",{class:"bar-wrapper "+(this.task.custom_class||""),"data-id":this.task.id}),this.bar_group=g("g",{class:"bar-group",append_to:this.group}),this.handle_group=g("g",{class:"handle-group",append_to:this.group})}prepare_helpers(){SVGElement.prototype.getX=function(){return+this.getAttribute("x")},SVGElement.prototype.getY=function(){return+this.getAttribute("y")},SVGElement.prototype.getWidth=function(){return+this.getAttribute("width")},SVGElement.prototype.getHeight=function(){return+this.getAttribute("height")},SVGElement.prototype.getEndX=function(){return this.getX()+this.getWidth()}}draw(){this.draw_bar(),this.draw_progress_bar(),this.draw_label(),this.draw_resize_handles()}draw_bar(){this.$bar=g("rect",{x:this.x,y:this.y,width:this.width,height:this.height,rx:this.corner_radius,ry:this.corner_radius,class:"bar",append_to:this.bar_group}),z(this.$bar,"width",0,this.width),this.invalid&&this.$bar.classList.add("bar-invalid")}draw_progress_bar(){this.invalid||(this.$bar_progress=g("rect",{x:this.x,y:this.y,width:this.progress_width,height:this.height,rx:this.corner_radius,ry:this.corner_radius,class:"bar-progress",append_to:this.bar_group}),z(this.$bar_progress,"width",0,this.progress_width))}draw_label(){g("text",{x:this.x+this.width/2,y:this.y+this.height/2,innerHTML:this.task.name,class:"bar-label",append_to:this.bar_group}),requestAnimationFrame(()=>this.update_label_position())}draw_resize_handles(){if(this.invalid)return;const t=this.$bar,e=8;g("rect",{x:t.getX()+t.getWidth()-9,y:t.getY()+1,width:e,height:this.height-2,rx:this.corner_radius,ry:this.corner_radius,class:"handle right",append_to:this.handle_group}),g("rect",{x:t.getX()+1,y:t.getY()+1,width:e,height:this.height-2,rx:this.corner_radius,ry:this.corner_radius,class:"handle left",append_to:this.handle_group}),this.task.progress&&this.task.progress<100&&(this.$handle_progress=g("polygon",{points:this.get_progress_polygon_points().join(","),class:"handle progress",append_to:this.handle_group}))}get_progress_polygon_points(){const t=this.$bar_progress;return[t.getEndX()-5,t.getY()+t.getHeight(),t.getEndX()+5,t.getY()+t.getHeight(),t.getEndX(),t.getY()+t.getHeight()-8.66]}bind(){this.invalid||this.setup_click_event()}setup_click_event(){c.on(this.group,"focus "+this.gantt.options.popup_trigger,t=>{this.action_completed||(this.show_popup(),this.gantt.unselect_all(),this.group.classList.add("active"))}),c.on(this.group,"dblclick",t=>{this.action_completed||this.gantt.trigger_event("click",[this.task])})}show_popup(){if(this.gantt.bar_being_dragged)return;const t=d.format(this.task._start,"MMM D",this.gantt.options.language),e=d.format(d.add(this.task._end,-1,"second"),"MMM D",this.gantt.options.language),s=t+" - "+e;this.gantt.show_popup({target_element:this.$bar,title:this.task.name,subtitle:s,task:this.task})}update_bar_position({x:t=null,width:e=null}){const s=this.$bar;if(t){if(!this.task.dependencies.map(h=>this.gantt.get_bar(h).$bar.getX()).reduce((h,a)=>t>=a,t)){e=null;return}this.update_attr(s,"x",t)}e&&e>=this.gantt.options.column_width&&this.update_attr(s,"width",e),this.update_label_position(),this.update_handle_position(),this.update_progressbar_position(),this.update_arrow_position()}date_changed(){let t=!1;const{new_start_date:e,new_end_date:s}=this.compute_start_end_date();Number(this.task._start)!==Number(e)&&(t=!0,this.task._start=e),Number(this.task._end)!==Number(s)&&(t=!0,this.task._end=s),t&&this.gantt.trigger_event("date_change",[this.task,e,d.add(s,-1,"second")])}progress_changed(){const t=this.compute_progress();this.task.progress=t,this.gantt.trigger_event("progress_change",[this.task,t])}set_action_completed(){this.action_completed=!0,setTimeout(()=>this.action_completed=!1,1e3)}compute_start_end_date(){const t=this.$bar,e=t.getX()/this.gantt.options.column_width,s=d.add(this.gantt.gantt_start,e*this.gantt.options.step,"hour"),o=t.getWidth()/this.gantt.options.column_width,n=d.add(s,o*this.gantt.options.step,"hour");return{new_start_date:s,new_end_date:n}}compute_progress(){const t=this.$bar_progress.getWidth()/this.$bar.getWidth()*100;return parseInt(t,10)}compute_x(){const{step:t,column_width:e}=this.gantt.options,s=this.task._start,o=this.gantt.gantt_start;let h=d.diff(s,o,"hour")/t*e;return this.gantt.view_is("Month")&&(h=d.diff(s,o,"day")*e/30),h}compute_y(){return this.gantt.options.header_height+this.gantt.options.padding+this.task._index*(this.height+this.gantt.options.padding)}get_snap_position(t){let e=t,s,o;return this.gantt.view_is("Week")?(s=t%(this.gantt.options.column_width/7),o=e-s+(s<this.gantt.options.column_width/14?0:this.gantt.options.column_width/7)):this.gantt.view_is("Month")?(s=t%(this.gantt.options.column_width/30),o=e-s+(s<this.gantt.options.column_width/60?0:this.gantt.options.column_width/30)):(s=t%this.gantt.options.column_width,o=e-s+(s<this.gantt.options.column_width/2?0:this.gantt.options.column_width)),o}update_attr(t,e,s){return s=+s,isNaN(s)||t.setAttribute(e,s),t}update_progressbar_position(){this.$bar_progress.setAttribute("x",this.$bar.getX()),this.$bar_progress.setAttribute("width",this.$bar.getWidth()*(this.task.progress/100))}update_label_position(){const t=this.$bar,e=this.group.querySelector(".bar-label");e.getBBox().width>t.getWidth()?(e.classList.add("big"),e.setAttribute("x",t.getX()+t.getWidth()+5)):(e.classList.remove("big"),e.setAttribute("x",t.getX()+t.getWidth()/2))}update_handle_position(){const t=this.$bar;this.handle_group.querySelector(".handle.left").setAttribute("x",t.getX()+1),this.handle_group.querySelector(".handle.right").setAttribute("x",t.getEndX()-9);const e=this.group.querySelector(".handle.progress");e&&e.setAttribute("points",this.get_progress_polygon_points())}update_arrow_position(){this.arrows=this.arrows||[];for(let t of this.arrows)t.update()}}class at{constructor(t,e,s){this.gantt=t,this.from_task=e,this.to_task=s,this.calculate_path(),this.draw()}calculate_path(){let t=this.from_task.$bar.getX()+this.from_task.$bar.getWidth()/2;const e=()=>this.to_task.$bar.getX()<t+this.gantt.options.padding&&t>this.from_task.$bar.getX()+this.gantt.options.padding;for(;e();)t-=10;const s=this.gantt.options.header_height+this.gantt.options.bar_height+(this.gantt.options.padding+this.gantt.options.bar_height)*this.from_task.task._index+this.gantt.options.padding,o=this.to_task.$bar.getX()-this.gantt.options.padding/2,n=this.gantt.options.header_height+this.gantt.options.bar_height/2+(this.gantt.options.padding+this.gantt.options.bar_height)*this.to_task.task._index+this.gantt.options.padding,h=this.from_task.task._index>this.to_task.task._index,a=this.gantt.options.arrow_curve,_=h?1:0,l=h?-a:a,p=h?n+this.gantt.options.arrow_curve:n-this.gantt.options.arrow_curve;if(this.path=`
            M ${t} ${s}
            V ${p}
            a ${a} ${a} 0 0 ${_} ${a} ${l}
            L ${o} ${n}
            m -5 -5
            l 5 5
            l -5 5`,this.to_task.$bar.getX()<this.from_task.$bar.getX()+this.gantt.options.padding){const f=this.gantt.options.padding/2-a,m=this.to_task.$bar.getY()+this.to_task.$bar.getHeight()/2-l,x=this.to_task.$bar.getX()-this.gantt.options.padding;this.path=`
                M ${t} ${s}
                v ${f}
                a ${a} ${a} 0 0 1 -${a} ${a}
                H ${x}
                a ${a} ${a} 0 0 ${_} -${a} ${l}
                V ${m}
                a ${a} ${a} 0 0 ${_} ${a} ${l}
                L ${o} ${n}
                m -5 -5
                l 5 5
                l -5 5`}}draw(){this.element=g("path",{d:this.path,"data-from":this.from_task.task.id,"data-to":this.to_task.task.id})}update(){this.calculate_path(),this.element.setAttribute("d",this.path)}}class rt{constructor(t,e){this.parent=t,this.custom_html=e,this.make()}make(){this.parent.innerHTML=`
            <div class="title"></div>
            <div class="subtitle"></div>
            <div class="pointer"></div>
        `,this.hide(),this.title=this.parent.querySelector(".title"),this.subtitle=this.parent.querySelector(".subtitle"),this.pointer=this.parent.querySelector(".pointer")}show(t){if(!t.target_element)throw new Error("target_element is required to show popup");t.position||(t.position="left");const e=t.target_element;if(this.custom_html){let o=this.custom_html(t.task);o+='<div class="pointer"></div>',this.parent.innerHTML=o,this.pointer=this.parent.querySelector(".pointer")}else this.title.innerHTML=t.title,this.subtitle.innerHTML=t.subtitle,this.parent.style.width=this.parent.clientWidth+"px";let s;e instanceof HTMLElement?s=e.getBoundingClientRect():e instanceof SVGElement&&(s=t.target_element.getBBox()),t.position==="left"&&(this.parent.style.left=s.x+(s.width+10)+"px",this.parent.style.top=s.y+"px",this.pointer.style.transform="rotateZ(90deg)",this.pointer.style.left="-7px",this.pointer.style.top="2px"),this.parent.style.opacity=1}hide(){this.parent.style.opacity=0,this.parent.style.left=0}}const u={QUARTER_DAY:"Quarter Day",HALF_DAY:"Half Day",DAY:"Day",WEEK:"Week",MONTH:"Month",YEAR:"Year"};class B{constructor(t,e,s){this.setup_wrapper(t),this.setup_options(s),this.setup_tasks(e),this.change_view_mode(),this.bind_events()}setup_wrapper(t){let e,s;if(typeof t=="string"&&(t=document.querySelector(t)),t instanceof HTMLElement)s=t,e=t.querySelector("svg");else if(t instanceof SVGElement)e=t;else throw new TypeError("Frappé Gantt only supports usage of a string CSS selector, HTML DOM element or SVG DOM element for the 'element' parameter");e?(this.$svg=e,this.$svg.classList.add("gantt")):this.$svg=g("svg",{append_to:s,class:"gantt"}),this.$container=document.createElement("div"),this.$container.classList.add("gantt-container"),this.$svg.parentElement.appendChild(this.$container),this.$container.appendChild(this.$svg),this.popup_wrapper=document.createElement("div"),this.popup_wrapper.classList.add("popup-wrapper"),this.$container.appendChild(this.popup_wrapper)}setup_options(t){const e={header_height:50,column_width:30,step:24,view_modes:[...Object.values(u)],bar_height:20,bar_corner_radius:3,arrow_curve:5,padding:18,view_mode:"Day",date_format:"YYYY-MM-DD",popup_trigger:"click",custom_popup_html:null,language:"en"};this.options=Object.assign({},e,t)}setup_tasks(t){this.tasks=t.map((e,s)=>{if(e._start=d.parse(e.start),e._end=d.parse(e.end),d.diff(e._end,e._start,"year")>10&&(e.end=null),e._index=s,!e.start&&!e.end){const n=d.today();e._start=n,e._end=d.add(n,2,"day")}if(!e.start&&e.end&&(e._start=d.add(e._end,-2,"day")),e.start&&!e.end&&(e._end=d.add(e._start,2,"day")),d.get_date_values(e._end).slice(3).every(n=>n===0)&&(e._end=d.add(e._end,24,"hour")),(!e.start||!e.end)&&(e.invalid=!0),typeof e.dependencies=="string"||!e.dependencies){let n=[];e.dependencies&&(n=e.dependencies.split(",").map(h=>h.trim()).filter(h=>h)),e.dependencies=n}return e.id||(e.id=ht(e)),e}),this.setup_dependencies()}setup_dependencies(){this.dependency_map={};for(let t of this.tasks)for(let e of t.dependencies)this.dependency_map[e]=this.dependency_map[e]||[],this.dependency_map[e].push(t.id)}refresh(t){this.setup_tasks(t),this.change_view_mode()}change_view_mode(t=this.options.view_mode){this.update_view_scale(t),this.setup_dates(),this.render(),this.trigger_event("view_change",[t])}update_view_scale(t){this.options.view_mode=t,t===u.DAY?(this.options.step=24,this.options.column_width=38):t===u.HALF_DAY?(this.options.step=24/2,this.options.column_width=38):t===u.QUARTER_DAY?(this.options.step=24/4,this.options.column_width=38):t===u.WEEK?(this.options.step=24*7,this.options.column_width=140):t===u.MONTH?(this.options.step=24*30,this.options.column_width=120):t===u.YEAR&&(this.options.step=24*365,this.options.column_width=120)}setup_dates(){this.setup_gantt_dates(),this.setup_date_values()}setup_gantt_dates(){this.gantt_start=this.gantt_end=null;for(let t of this.tasks)(!this.gantt_start||t._start<this.gantt_start)&&(this.gantt_start=t._start),(!this.gantt_end||t._end>this.gantt_end)&&(this.gantt_end=t._end);this.gantt_start=d.start_of(this.gantt_start,"day"),this.gantt_end=d.start_of(this.gantt_end,"day"),this.view_is([u.QUARTER_DAY,u.HALF_DAY])?(this.gantt_start=d.add(this.gantt_start,-7,"day"),this.gantt_end=d.add(this.gantt_end,7,"day")):this.view_is(u.MONTH)?(this.gantt_start=d.start_of(this.gantt_start,"year"),this.gantt_end=d.add(this.gantt_end,1,"year")):this.view_is(u.YEAR)?(this.gantt_start=d.add(this.gantt_start,-2,"year"),this.gantt_end=d.add(this.gantt_end,2,"year")):(this.gantt_start=d.add(this.gantt_start,-1,"month"),this.gantt_end=d.add(this.gantt_end,1,"month"))}setup_date_values(){this.dates=[];let t=null;for(;t===null||t<this.gantt_end;)t?this.view_is(u.YEAR)?t=d.add(t,1,"year"):this.view_is(u.MONTH)?t=d.add(t,1,"month"):t=d.add(t,this.options.step,"hour"):t=d.clone(this.gantt_start),this.dates.push(t)}bind_events(){this.bind_grid_click(),this.bind_bar_events()}render(){this.clear(),this.setup_layers(),this.make_grid(),this.make_dates(),this.make_bars(),this.make_arrows(),this.map_arrows_on_bars(),this.set_width(),this.set_scroll_position()}setup_layers(){this.layers={};const t=["grid","date","arrow","progress","bar","details"];for(let e of t)this.layers[e]=g("g",{class:e,append_to:this.$svg})}make_grid(){this.make_grid_background(),this.make_grid_rows(),this.make_grid_header(),this.make_grid_ticks(),this.make_grid_highlights()}make_grid_background(){const t=this.dates.length*this.options.column_width,e=this.options.header_height+this.options.padding+(this.options.bar_height+this.options.padding)*this.tasks.length;g("rect",{x:0,y:0,width:t,height:e,class:"grid-background",append_to:this.layers.grid}),c.attr(this.$svg,{height:e+this.options.padding+100,width:"100%"})}make_grid_rows(){const t=g("g",{append_to:this.layers.grid}),e=g("g",{append_to:this.layers.grid}),s=this.dates.length*this.options.column_width,o=this.options.bar_height+this.options.padding;let n=this.options.header_height+this.options.padding/2;for(let h of this.tasks)g("rect",{x:0,y:n,width:s,height:o,class:"grid-row",append_to:t}),g("line",{x1:0,y1:n+o,x2:s,y2:n+o,class:"row-line",append_to:e}),n+=this.options.bar_height+this.options.padding}make_grid_header(){const t=this.dates.length*this.options.column_width,e=this.options.header_height+10;g("rect",{x:0,y:0,width:t,height:e,class:"grid-header",append_to:this.layers.grid})}make_grid_ticks(){let t=0,e=this.options.header_height+this.options.padding/2,s=(this.options.bar_height+this.options.padding)*this.tasks.length;for(let o of this.dates){let n="tick";this.view_is(u.DAY)&&o.getDate()===1&&(n+=" thick"),this.view_is(u.WEEK)&&o.getDate()>=1&&o.getDate()<8&&(n+=" thick"),this.view_is(u.MONTH)&&(o.getMonth()+1)%3===0&&(n+=" thick"),g("path",{d:`M ${t} ${e} v ${s}`,class:n,append_to:this.layers.grid}),this.view_is(u.MONTH)?t+=d.get_days_in_month(o)*this.options.column_width/30:t+=this.options.column_width}}make_grid_highlights(){if(this.view_is(u.DAY)){const t=d.diff(d.today(),this.gantt_start,"hour")/this.options.step*this.options.column_width,e=0,s=this.options.column_width,o=(this.options.bar_height+this.options.padding)*this.tasks.length+this.options.header_height+this.options.padding/2;g("rect",{x:t,y:e,width:s,height:o,class:"today-highlight",append_to:this.layers.grid})}}make_dates(){for(let t of this.get_dates_to_draw())if(g("text",{x:t.lower_x,y:t.lower_y,innerHTML:t.lower_text,class:"lower-text",append_to:this.layers.date}),t.upper_text){const e=g("text",{x:t.upper_x,y:t.upper_y,innerHTML:t.upper_text,class:"upper-text",append_to:this.layers.date});e.getBBox().x2>this.layers.grid.getBBox().width&&e.remove()}}get_dates_to_draw(){let t=null;return this.dates.map((s,o)=>{const n=this.get_date_info(s,t,o);return t=s,n})}get_date_info(t,e,s){e||(e=d.add(t,1,"year"));const o={"Quarter Day_lower":d.format(t,"HH",this.options.language),"Half Day_lower":d.format(t,"HH",this.options.language),Day_lower:t.getDate()!==e.getDate()?d.format(t,"D",this.options.language):"",Week_lower:t.getMonth()!==e.getMonth()?d.format(t,"D MMM",this.options.language):d.format(t,"D",this.options.language),Month_lower:d.format(t,"MMMM",this.options.language),Year_lower:d.format(t,"YYYY",this.options.language),"Quarter Day_upper":t.getDate()!==e.getDate()?d.format(t,"D MMM",this.options.language):"","Half Day_upper":t.getDate()!==e.getDate()?t.getMonth()!==e.getMonth()?d.format(t,"D MMM",this.options.language):d.format(t,"D",this.options.language):"",Day_upper:t.getMonth()!==e.getMonth()?d.format(t,"MMMM",this.options.language):"",Week_upper:t.getMonth()!==e.getMonth()?d.format(t,"MMMM",this.options.language):"",Month_upper:t.getFullYear()!==e.getFullYear()?d.format(t,"YYYY",this.options.language):"",Year_upper:t.getFullYear()!==e.getFullYear()?d.format(t,"YYYY",this.options.language):""},n={x:s*this.options.column_width,lower_y:this.options.header_height,upper_y:this.options.header_height-25},h={"Quarter Day_lower":this.options.column_width*4/2,"Quarter Day_upper":0,"Half Day_lower":this.options.column_width*2/2,"Half Day_upper":0,Day_lower:this.options.column_width/2,Day_upper:this.options.column_width*30/2,Week_lower:0,Week_upper:this.options.column_width*4/2,Month_lower:this.options.column_width/2,Month_upper:this.options.column_width*12/2,Year_lower:this.options.column_width/2,Year_upper:this.options.column_width*30/2};return{upper_text:o[`${this.options.view_mode}_upper`],lower_text:o[`${this.options.view_mode}_lower`],upper_x:n.x+h[`${this.options.view_mode}_upper`],upper_y:n.upper_y,lower_x:n.x+h[`${this.options.view_mode}_lower`],lower_y:n.lower_y}}make_bars(){this.bars=this.tasks.map(t=>{const e=new ot(this,t);return this.layers.bar.appendChild(e.group),e})}make_arrows(){this.arrows=[];for(let t of this.tasks){let e=[];e=t.dependencies.map(s=>{const o=this.get_task(s);if(!o)return;const n=new at(this,this.bars[o._index],this.bars[t._index]);return this.layers.arrow.appendChild(n.element),n}).filter(Boolean),this.arrows=this.arrows.concat(e)}}map_arrows_on_bars(){for(let t of this.bars)t.arrows=this.arrows.filter(e=>e.from_task.task.id===t.task.id||e.to_task.task.id===t.task.id)}set_width(){const t=this.$svg.getBoundingClientRect().width,e=this.$svg.querySelector(".grid .grid-row").getAttribute("width");t<e&&this.$svg.setAttribute("width",e)}set_scroll_position(){const t=this.$svg.parentElement;if(!t)return;const s=d.diff(this.get_oldest_starting_date(),this.gantt_start,"hour")/this.options.step*this.options.column_width-this.options.column_width;t.scrollLeft=s}bind_grid_click(){c.on(this.$svg,this.options.popup_trigger,".grid-row, .grid-header",()=>{this.unselect_all(),this.hide_popup()})}bind_bar_events(){let t=!1,e=0,s=0,o=!1,n=!1,h=null,a=[];this.bar_being_dragged=null;function _(){return t||o||n}c.on(this.$svg,"mousedown",".bar-wrapper, .handle",(l,p)=>{const f=c.closest(".bar-wrapper",p);p.classList.contains("left")?o=!0:p.classList.contains("right")?n=!0:p.classList.contains("bar-wrapper")&&(t=!0),f.classList.add("active"),e=l.offsetX,s=l.offsetY,h=f.getAttribute("data-id"),a=[h,...this.get_all_dependent_tasks(h)].map(x=>this.get_bar(x)),this.bar_being_dragged=h,a.forEach(x=>{const y=x.$bar;y.ox=y.getX(),y.oy=y.getY(),y.owidth=y.getWidth(),y.finaldx=0})}),c.on(this.$svg,"mousemove",l=>{if(!_())return;const p=l.offsetX-e;l.offsetY-s,a.forEach(f=>{const m=f.$bar;m.finaldx=this.get_snap_position(p),this.hide_popup(),o?h===f.task.id?f.update_bar_position({x:m.ox+m.finaldx,width:m.owidth-m.finaldx}):f.update_bar_position({x:m.ox+m.finaldx}):n?h===f.task.id&&f.update_bar_position({width:m.owidth+m.finaldx}):t&&f.update_bar_position({x:m.ox+m.finaldx})})}),document.addEventListener("mouseup",l=>{(t||o||n)&&a.forEach(p=>p.group.classList.remove("active")),t=!1,o=!1,n=!1}),c.on(this.$svg,"mouseup",l=>{this.bar_being_dragged=null,a.forEach(p=>{p.$bar.finaldx&&(p.date_changed(),p.set_action_completed())})}),this.bind_bar_progress()}bind_bar_progress(){let t=0,e=0,s=null,o=null,n=null,h=null;c.on(this.$svg,"mousedown",".handle.progress",(a,_)=>{s=!0,t=a.offsetX,e=a.offsetY;const p=c.closest(".bar-wrapper",_).getAttribute("data-id");o=this.get_bar(p),n=o.$bar_progress,h=o.$bar,n.finaldx=0,n.owidth=n.getWidth(),n.min_dx=-n.getWidth(),n.max_dx=h.getWidth()-n.getWidth()}),c.on(this.$svg,"mousemove",a=>{if(!s)return;let _=a.offsetX-t;a.offsetY-e,_>n.max_dx&&(_=n.max_dx),_<n.min_dx&&(_=n.min_dx);const l=o.$handle_progress;c.attr(n,"width",n.owidth+_),c.attr(l,"points",o.get_progress_polygon_points()),n.finaldx=_}),c.on(this.$svg,"mouseup",()=>{s=!1,n&&n.finaldx&&(o.progress_changed(),o.set_action_completed())})}get_all_dependent_tasks(t){let e=[],s=[t];for(;s.length;){const o=s.reduce((n,h)=>(n=n.concat(this.dependency_map[h]),n),[]);e=e.concat(o),s=o.filter(n=>!s.includes(n))}return e.filter(Boolean)}get_snap_position(t){let e=t,s,o;return this.view_is(u.WEEK)?(s=t%(this.options.column_width/7),o=e-s+(s<this.options.column_width/14?0:this.options.column_width/7)):this.view_is(u.MONTH)?(s=t%(this.options.column_width/30),o=e-s+(s<this.options.column_width/60?0:this.options.column_width/30)):(s=t%this.options.column_width,o=e-s+(s<this.options.column_width/2?0:this.options.column_width)),o}unselect_all(){[...this.$svg.querySelectorAll(".bar-wrapper")].forEach(t=>{t.classList.remove("active")})}view_is(t){return typeof t=="string"?this.options.view_mode===t:Array.isArray(t)?t.some(e=>this.options.view_mode===e):!1}get_task(t){return this.tasks.find(e=>e.id===t)}get_bar(t){return this.bars.find(e=>e.task.id===t)}show_popup(t){this.popup||(this.popup=new rt(this.popup_wrapper,this.options.custom_popup_html)),this.popup.show(t)}hide_popup(){this.popup&&this.popup.hide()}trigger_event(t,e){this.options["on_"+t]&&this.options["on_"+t].apply(null,e)}get_oldest_starting_date(){return this.tasks.map(t=>t._start).reduce((t,e)=>e<=t?e:t)}clear(){this.$svg.innerHTML=""}}B.VIEW_MODE=u;function ht(i){return i.name+"_"+Math.random().toString(36).slice(2,12)}const J=i=>(q("data-v-bdf9d2af"),i=i(),Q(),i),dt={class:"row",style:{height:"48px"}},lt={key:0,class:"vertical-line"},_t={class:"col-lg-2 d-flex align-items-center"},pt={class:"col-lg-2 d-flex align-items-center"},ct={class:"col-lg-2 d-flex align-items-center justify-content-center"},gt={class:"col-lg-2 col-3 d-flex justify-content-center d-flex align-items-center"},ut=J(()=>r("i",{class:"fa fa-plus text-neutral-500 mr-2"},null,-1)),ft=[ut],mt=J(()=>r("i",{class:"fa fa-edit text-neutral-500"},null,-1)),wt=[mt],bt={__name:"TreeItem1",props:{item:Object,isChild:{type:Boolean,default:!1},level:{type:Number,default:0}},emits:["edit","add"],setup(i,{emit:t}){let e=G(!0);const s=t;function o(){e.value=!e.value}return(n,h)=>{var _;const a=j("TreeItem1",!0);return w(),b("div",null,[r("div",dt,[r("div",{class:A(["col-lg-4 col-9 d-flex align-items-center",{"child-container":i.isChild}]),style:F({paddingLeft:`${i.level*15}px`})},[r("span",{style:F({width:`${i.level*15}px`}),class:"line-connector"},null,4),i.isChild?(w(),b("span",lt)):D("",!0),r("a",{onClick:Y(o,["prevent"]),class:A([i.item.children?"cursor-pointer":"cursor-text","mb-2 text-black"])},[i.item.children?(w(),b("i",{key:0,class:A(["fa fa-folder mr-2 text-amber-400 text-lg",W(e)?"fa-folder-open":"fa-folder-closed"])},null,2)):D("",!0),E(" "+v(i.item.ten),1)],2)],6),r("div",_t,[r("span",null,v(i.item.ngay_bat_dau),1)]),r("div",pt,[r("span",null,v(i.item.ngay_ket_thuc),1)]),r("div",ct,[r("span",null,v((_=i.item.nhan_vien)==null?void 0:_.name),1)]),r("div",gt,[r("a",{onClick:h[0]||(h[0]=Y(l=>{s("add",i.item.id)},["prevent"]))},ft),r("a",{onClick:h[1]||(h[1]=Y(l=>{s("edit",i.item)},["prevent"]))},wt)])]),r("div",null,[W(e)?(w(!0),b(O,{key:0},X(i.item.children,l=>(w(),C(a,{"is-child":!0,level:i.level+1,key:l.id,item:l,onEdit:h[2]||(h[2]=p=>n.$emit("edit",p)),onAdd:h[3]||(h[3]=p=>n.$emit("add",p))},null,8,["level","item"]))),128)):D("",!0)])])}}},vt=st(bt,[["__scopeId","data-v-bdf9d2af"]]);const yt=r("div",{class:"card shadow"},[r("div",{class:"card-body card-brc"},[r("p",{class:"txt-color mb-0 font-weight-bold"},[E("Danh mục quản lý "),r("i",{class:"fa fa-angle-right mr-2 ml-2"}),E(" Quản lý dự án "),r("i",{class:"fa fa-angle-right mr-2 ml-2"}),E(" Chi tiết dự án ")])])],-1),$t={class:"card shadow card-child",style:{}},xt={class:"card-body"},kt={class:""},Mt={class:""},Dt={class:"txt-color mb-2 font-weight-bold"},Yt={class:"space-y-2"},Et={class:"row"},At=r("div",{class:"col-md-2 col-6"},[r("span",{class:"font-bold"},"Ngày bắt đầu")],-1),St={class:"col-md-10 col-6"},Ht={class:"row"},Tt=r("div",{class:"col-md-2 col-6"},[r("span",{class:"font-bold"},"Ngày kết thúc")],-1),Lt={class:"col-md-10 col-6"},Nt={class:"row"},Wt=r("div",{class:"col-md-2 col-6 font-bold"},"Trạng thái",-1),Ot={class:"col-md-10 col-6"},Xt={key:0,class:"badge badge-warning"},Ct={key:1,class:"badge badge-primary"},Bt={key:2,class:"badge badge-success"},Ft={class:"row"},It=r("div",{class:"col-md-2 col-6 font-bold"},"Phụ trách",-1),Vt={class:"col-md-10 col-6"},Rt={class:"row"},zt=r("div",{class:"col-md-2 col-6 font-bold"},"Mô tả",-1),Gt={class:"col-md-10 col-6"},Jt={class:"row"},jt=r("div",{class:"col-md-2 col-6 font-bold"},"File",-1),qt={class:"col-md-10 col-6"},Qt=["href"],Kt={class:"mt-2"},Ut={class:"mb-1"},Pt={class:"p-2 pt-3 pl-3"},Zt={class:"row"},te={class:"col-md-4"},ee=r("div",{style:{height:"56px"}},[r("div",{class:"row h-100 border"},[r("div",{class:"col-4 d-flex align-items-center"}," Tên "),r("div",{class:"col-2 d-flex align-items-center"}," Bắt đầu "),r("div",{class:"col-2 d-flex align-items-center"}," Kết thúc "),r("div",{class:"col-2 d-flex align-items-center"}," Trạng thái "),r("div",{class:"col-2 d-flex align-items-center"}," Thao tác ")])],-1),se=r("div",{class:"col-md-8"},[r("div",{class:"gantt-target border"})],-1),de={__name:"BieuDo",props:{du_an:Object,du_an_id:String,nhan_vien_list:Object},setup(i){const t=i,e=I(()=>t.du_an.find(a=>String(a.id)===t.du_an_id)),s=I(()=>{function a(_){return _.flatMap(l=>{const p=l.children?a(l.children):[];return[{id:l.id,name:l.ten,start:l.ngay_bat_dau,end:l.ngay_ket_thuc,progress:0,dependencies:l.parent_id?[l.parent_id]:null,custom_class:l.trang_thai===0?"warning":l.trang_thai===1?"primary":"success"},...p]})}return a(e.value.children)});K(()=>{new B(".gantt-target",s.value,{on_click:a=>{console.log(a)},view_mode:"Day",language:"en",bar_height:30,header_height:45,date_format:"YYYY-MM-DD"})}),U(()=>{new B(".gantt-target",s.value,{on_click:a=>{console.log(a)},view_mode:"Day",language:"en",bar_height:30,header_height:45})});let o=G({id:"",ten:"",ngay_bat_dau:"",ngay_ket_thuc:"",user_id:"",nhan_vien:{},mo_ta:"",trang_thai:"",parent_id:"",children:[],files:[]});function n(a){o.value={id:"",ten:"",ngay_bat_dau:"",ngay_ket_thuc:"",user_id:"",mo_ta:"",trang_thai:"",parent_id:a,children:[],files:[]},$("#duanmodal").modal("show")}function h(a){o.value={id:a.id,ten:a.ten,ngay_bat_dau:a.ngay_bat_dau,ngay_ket_thuc:a.ngay_ket_thuc,user_id:a.user_id,mo_ta:a.mo_ta,trang_thai:a.trang_thai,parent_id:a.parent_id,children:a.children,files:a.files},$("#duanmodal").modal("show")}return(a,_)=>(w(),C(et,null,{default:P(()=>{var l;return[yt,r("div",$t,[r("div",xt,[r("div",kt,[r("div",Mt,[r("h5",Dt,v(e.value.ten),1)]),r("div",Yt,[r("div",Et,[At,r("div",St,[r("span",null,v(new Date(e.value.ngay_bat_dau).toLocaleDateString()),1)])]),r("div",Ht,[Tt,r("div",Lt,[r("span",null,v(new Date(e.value.ngay_ket_thuc).toLocaleDateString()),1)])]),r("div",Nt,[Wt,r("div",Ot,[e.value.trang_thai===0?(w(),b("span",Xt,"Chưa thực hiện")):e.value.trang_thai===1?(w(),b("span",Ct,"Đang thực hiện")):e.value.trang_thai===2?(w(),b("span",Bt,"Đã hoàn thành")):D("",!0)])]),r("div",Ft,[It,r("div",Vt,v((l=e.value.nhan_vien)==null?void 0:l.name),1)]),r("div",Rt,[zt,r("div",Gt,v(e.value.mo_ta),1)]),r("div",Jt,[jt,r("div",qt,[r("ul",null,[(w(!0),b(O,null,X(e.value.files,p=>(w(),b("li",{key:p.id},[r("a",{href:`/uploads/${p.ten}`,target:"_blank"},v(p.ten),9,Qt)]))),128))])])]),r("div",Kt,[r("div",Ut,[r("a",{class:"btn btn-primary",onClick:_[0]||(_[0]=Y(p=>n(e.value.id),["prevent"]))},"Thêm hạng mục")]),r("div",Pt,[r("div",Zt,[r("div",te,[ee,(w(!0),b(O,null,X(e.value.children,(p,f)=>(w(),C(vt,{class:"",key:p.id,item:p,onEdit:h,onAdd:n},null,8,["item"]))),128))]),se])])])])])])]),Z(tt,{du_an:W(o),users:i.nhan_vien_list},null,8,["du_an","users"])]}),_:1}))}};export{de as default};