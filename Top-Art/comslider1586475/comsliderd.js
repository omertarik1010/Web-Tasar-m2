function comSlider1586475() { 
var self = this; 
var g_HostRoot = "";
var jssor_slider1586475 = null;	this.jssor_slider1586475_starter = function (containerId) { 
						
            var _SlideshowTransitions = [ 
{$Duration:1200,x:0.3,y:-0.3,$Delay:20,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8]},$Formation:$JssorSlideshowFormations$.$FormationZigZag,$Assembly:260,$Easing:{$Left:$JssorEasing$.$EaseInJump,$Top:$JssorEasing$.$EaseInJump},$Outside:true,$Round:{$Left:0.8,$Top:0.8}}
,{$Duration:1000,$Delay:30,$Cols:8,$Rows:4,$Clip:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2049,$Easing:$JssorEasing$.$EaseOutQuad}
,{$Duration:1500,x:0.3,$During:{$Left:[0.6,0.4]},$Easing:{$Left:$JssorEasing$.$EaseInQuad,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2,$Outside:true,$Brother:{$Duration:1000,x:-0.3,$Easing:{$Left:$JssorEasing$.$EaseInQuad,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2}}
,{$Duration:1000,$Zoom:11,$SlideOut:true,$Easing:{$Zoom:$JssorEasing$.$EaseInExpo,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2}
,{$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$JssorEasing$.$EaseInCubic,$Top:$JssorEasing$.$EaseInCubic,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2}
				]; 
			
					var options = {
										$AutoPlay: true,                                   //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
										$Idle: 0,
										$LazyLoading: 1,
										$PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, default value is 1
										$DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
										$FillMode: 1,										//[Optional] The way to fill image in slide, 0: stretch, 1: contain (keep aspect ratio and put all inside slide), 2: cover (keep aspect ratio and cover whole slide), 4: actual size, 5: contain for large image and actual size for small image, default value is 0 
										$Loop: 1,										//[Optional] Enable loop(circular) of carousel or not, 0: stop, 1: loop, 2 rewind, default value is 1 
										$PauseOnHover: 1, 							//[Optional] Whether to pause when mouse over if a slider is auto playing, 0: no pause, 1: pause for desktop, 2: pause for touch device, 3: pause for desktop and touch device, 4: freeze for desktop, 8: freeze for touch device, 12: freeze for desktop and touch device, default value is 1 
										$StartIndex: 0,	//[Optional] Index of slide to display when initialize, default value is 0 
 
									$SlideshowOptions: {                                //[Optional] Options to specify and enable slideshow or not
										$Class: $JssorSlideshowRunner$,                 //[Required] Class to create instance of slideshow
										$Transitions: _SlideshowTransitions,            //[Required] An array of slideshow transitions to play slideshow
										$TransitionsOrder: 0,       //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
									}										
									
					, $ArrowNavigatorOptions: {
						$Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
						$ChanceToShow: 2       //[Required] 0 Never, 1 Mouse Over, 2 Always
					}
				, $BulletNavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
						$Class: $JssorBulletNavigator$,                       //[Required] Class to create navigator instance
						$ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
						$AutoCenter: 1,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
						$Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
						$Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
						$SpacingX: 12,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
						$SpacingY: 12,                                   //[Optional] Vertical space between each item in pixel, default value is 0
						$Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
					}						
									};

									self.jssor_slider1586475 = new $JssorSlider$(containerId, options);										
									
										}; 
							
									//responsive code begin
									//you can remove responsive code if you do not want the slider scales while window resizes
									this.ScaleSlider = function() {		
										var  parentWidth = jqCS1586475("#comSContainer1586475_").parent().width();
										if (parentWidth) {
											self.jssor_slider1586475.$ScaleWidth(Math.min(parentWidth, 800));
										}
										else
											window.setTimeout(self.ScaleSlider, 30);											
									};
				
					this.scriptLoaded = function(options)
					{
				   jqCS1586475 = jQuery1586475.noConflict(false);jqCS1586475("#comslider_in_point_1586475").html('<div id="comSContainer1586475_" name="comSContainer1586475_" style="display: inline-block; text-align: left; background:#000000; border:0px; width:800px; height:450px; position: relative; top: 0px; left: 0px;"><div u="slides" style="position: absolute; left: 0px; top: 0px; width:800px; height:450px; overflow: hidden;"><div idle="5000" id="imgidle_1586475_1009713"><img u="image" src="comslider1586475/img/180515170621101.jpg"></img></div><div idle="5000" id="imgidle_1586475_1009714"><img u="image" src="comslider1586475/img/180515170621102.jpg"></img></div><div idle="5000" id="imgidle_1586475_1009715"><img u="image" src="comslider1586475/img/180515170621103.png"></img></div><div idle="5000" id="imgidle_1586475_1009719"><img u="image" src="comslider1586475/img/180515171115101.jpg"></img></div></div><!-- Bullet Navigator Skin Begin --><!-- jssor slider bullet navigator skin 01 --><style>	/*	.	 div           (normal)	.jssorb1586475 div:hover     (normal mouseover)	.jssorb1586475 .av           (active)	.jssorb1586475 .av:hover     (active mouseover)	.jssorb1586475 .dn           (mousedown)	*/	.jssorb1586475 div, .jssorb1586475 div:hover, .jssorb1586475 .av {		filter: alpha(opacity=90);		opacity: 0.9;		overflow: hidden;		cursor: pointer;	border-radius: 24px;  border: 2px solid #DDDDDD;	background-color: transparent;		margin: 1px !important;	}	.jssorb1586475 div {		margin: 1px !important;		background-repeat:no-repeat;		background-position:center; 	}		.jssorb1586475 div:hover, 		.jssorb1586475 .av:hover {			background-color: #FFFFFF;  border: 3px solid #FFFFFF;	background-color: transparent;		margin: 0px !important;		background-repeat:no-repeat;		background-position:center; 		}	.jssorb1586475 .av {		background-color: #FFFFFF;  border: 3px solid #FFFFFF;	background-color: transparent;		margin: 0px !important;		background-image: none;		background-repeat:no-repeat;		background-position:center; 	}</style><!-- bullet navigator container -->         <div u="navigator" class="jssorb1586475" style="position: absolute; bottom: 17px; left: 12px;">        	<!-- bullet navigator item prototype -->        	<div u="prototype" style="POSITION: absolute; WIDTH: 12px; HEIGHT: 12px;"></div>        </div>				 <!-- Bullet Navigator Skin End -->	<!-- Arrow Navigator Skin Begin --><style>/* jssor slider arrow navigator skin 02 css *//*.jssora1586475l              (normal).jssora1586475r              (normal).jssora1586475l:hover        (normal mouseover).jssora1586475r:hover        (normal mouseover).jssora1586475ldn            (mousedown).jssora1586475rdn            (mousedown)*/.jssora1586475l, .jssora1586475r, .jssora1586475ldn, .jssora1586475rdn{	position: absolute;	cursor: pointer;	display: block;    overflow:hidden;}.jssora1586475l {background: transparent url("comslider1586475/imgnavctl/defback.png?1526393374") no-repeat; }.jssora1586475r {background: transparent url("comslider1586475/imgnavctl/defforward.png?1526393374") no-repeat; }.jssora1586475l:hover, .jssora1586475ldn {background: transparent url("comslider1586475/imgnavctl/defbackhover.png?1526393374") no-repeat; }.jssora1586475r:hover, .jssora1586475rdn {background: transparent url("comslider1586475/imgnavctl/defforwardhover.png?1526393374") no-repeat; } </style><!-- Arrow Left --><span u="arrowleft" class="jssora1586475l" style="margin-left:10px; width: 42px; height: 42px; top: 204px; left: 0px;"></span><!-- Arrow Right --><span u="arrowright" class="jssora1586475r" style="margin-left:-10px; width: 42px; height: 42px; top: 204px; left: 758px"></span><!-- Arrow Navigator Skin End -->	</div>');
                    jqCS1586475("#comslider_in_point_1586475 a").bind('click',  function() { if ((this.name.length > 0) && (isNaN(this.name) == false)) {  self.switchToFrame(parseInt(this.name)); return false;} });
                
					self.jssor_slider1586475_starter("comSContainer1586475_");
							
						self.ScaleSlider();
						jqCS1586475(document).ready(function() {				
							self.ScaleSlider();
						});
						jqCS1586475(window).bind("load", self.ScaleSlider);
						jqCS1586475(window).bind("resize", self.ScaleSlider);
						jqCS1586475(window).bind("orientationchange", self.ScaleSlider);						
					
}
var g_CSIncludes = new Array();
var g_CSLoading = false;
var g_CSCurrIdx = 0; 
 this.include = function(src, last) 
                {
                    if (src != '')
                    {				
                            var tmpInclude = Array();
                            tmpInclude[0] = src;
                            tmpInclude[1] = last;					
                            //
                            g_CSIncludes[g_CSIncludes.length] = tmpInclude;
                    }            
                    if ((g_CSLoading == false) && (g_CSCurrIdx < g_CSIncludes.length))
                    {


                            var oScript = null;
                            if (g_CSIncludes[g_CSCurrIdx][0].split('.').pop().substring(0,3) == 'css')
                            {
                                oScript = document.createElement('link');
                                oScript.href = g_CSIncludes[g_CSCurrIdx][0];
                                oScript.type = 'text/css';
                                oScript.rel = 'stylesheet';

                                oScript.onloadDone = true; 
                                g_CSLoading = false;
                                g_CSCurrIdx++;								
                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                        self.scriptLoaded(); 
                                else
                                        self.include('', false);
                            }
                            else
                            {
                                oScript = document.createElement('script');
                                oScript.src = g_CSIncludes[g_CSCurrIdx][0];
                                oScript.type = 'text/javascript';

                                //oScript.onload = scriptLoaded;
                                oScript.onload = function() 
                                { 
                                        if ( ! oScript.onloadDone ) 
                                        {
                                                oScript.onloadDone = true; 
                                                g_CSLoading = false;
                                                g_CSCurrIdx++;								
                                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                                        self.scriptLoaded(); 
                                                else
                                                        self.include('', false);
                                        }
                                };
                                oScript.onreadystatechange = function() 
                                { 
                                        if ( ( "loaded" === oScript.readyState || "complete" === oScript.readyState ) && ! oScript.onloadDone ) 
                                        {
                                                oScript.onloadDone = true;
                                                g_CSLoading = false;	
                                                g_CSCurrIdx++;
                                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                                        self.scriptLoaded(); 
                                                else
                                                        self.include('', false);
                                        }
                                }
                                
                            }
                            //
                            document.getElementsByTagName("head").item(0).appendChild(oScript);
                            //
                            g_CSLoading = true;
                    }

                }
                

}
objcomSlider1586475 = new comSlider1586475();
objcomSlider1586475.include('comslider1586475/js/jquery-1.10.1.js?ts=1526393480', false);
objcomSlider1586475.include('comslider1586475/js/jquery-ui-1.10.3.effects.js?ts=1526393480', false);
objcomSlider1586475.include('comslider1586475/js/jssor.slider.min_2_0.js?ts=1526393480', false);
objcomSlider1586475.include('comslider1586475/js/jssorcap.min.js?ts=1526393480', true);
