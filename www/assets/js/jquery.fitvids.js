(function(b){b.fn.fitVids=function(i){var j={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var h=document.head||document.getElementsByTagName("head")[0];var a=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";var g=document.createElement("div");g.innerHTML='<p>x</p><style id="fit-vids-style">'+a+"</style>";h.appendChild(g.childNodes[1])}if(i){b.extend(j,i)}return this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];if(j.customSelector){e.push(j.customSelector)}var c=".fitvidsignore";if(j.ignore){c=c+", "+j.ignore}var d=b(this).find(e.join(","));d=d.not("object object");d=d.not(c);d.each(function(){var p=b(this);if(p.parents(c).length>0){return}if(this.tagName.toLowerCase()==="embed"&&p.parent("object").length||p.parent(".fluid-width-video-wrapper").length){return}if((!p.css("height")&&!p.css("width"))&&(isNaN(p.attr("height"))||isNaN($this.attr("width")))){p.attr("height",9);p.attr("width",16)}var o=(this.tagName.toLowerCase()==="object"||(p.attr("height")&&!isNaN(parseInt(p.attr("height"),10))))?parseInt($this.attr("height"),10):p.height(),r=!isNaN(parseInt(p.attr("width"),10))?parseInt(p.attr("width"),10):p.width(),f=o/r;if(!p.attr("id")){var q="fitvid"+Math.floor(Math.random()*999999);p.attr("id",q)}p.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",(f*100)+"%");p.removeAttr("height").removeAttr("width")})})}})(window.jQuery||window.Zepto);jQuery(document).ready(function(){jQuery(".container").fitVids();jQuery(".container").fitVids({customSelector:"iframe[src^='http://socialcam.com']"})});