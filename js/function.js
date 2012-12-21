// JavaScript Document
document.body.style.overflow = 'hidden';
var can1 = document.getElementById("can1");
var zz=can1.getContext("2d");
var w = can1.width;
var h = can1.height;

//pausefl = false;

	
		for(i=0;i<10;i++)		// заполнение массива паутин
		{
			ANet[i] = new NET();
		}
		var speeder = new Speeder();
		for(i=0;i<N;i++)		// заполнение массива Жуков
		{
		AEl[i] = new beetle();
		}		
function Play1(sPl)
		{	
	if(sPl==true)
	{
		points = 0;
		speeder.life = MaxL;
		Lives_L=MaxL;	
		
		pausefl = false;
		document.onkeydown = function(e) 
		{
 			e = e || window.event;
  		 if (e.keyCode == 39&&  speeder.x < 1230) {dir = 1;}
		 	else{dir=0;}
	     if (e.keyCode == 37&& speeder.x > 0){dir = 2;}
	  		
		 if (e.keyCode == 32)
			{			
				while(ANet[nN].fl==true)
				{
					if(nN<9)
					{
						nN++;
					}
					else
					{
						nN = 0;						
					}
				}
				if(atackFL==true){
				ANet[nN].x = speeder.x;
				ANet[nN].y = speeder.y;	
				ANet[nN].fl = true;	
				points-=1;
				atackFL=false;
				StatRech = 0;
				IntervalF();
				setTimeout(function(){
				
						atackFL = true;
					
				},recharge);
				
				}
			}
	return true;
		}
		document.onkeyup = function(e)
		{
		   e=e||window.event;
		   dir = 0;
		}
		eliensO(N,0);											//
		inter = setInterval(Game,sInt);	
	}
}
//here vas play end

function nFly()
	{
		for(i=0;i<10;i++)
		{	
			if(ANet[i].fl == true)
			{
			ANet[i].y-=20;
			}			
		}				
			for(i=0;i<10;i++)
			{
				zz.fillRect(ANet[i].x,ANet[i].y,ANet[i].w,ANet[i].h);
			}
	} 
function Game()
	{		
			 zz.clearRect(0,0,1280,768);
			 nFly();
			 check1()		 
			 check();		 
			 flyB();
			 statusBar()
			 zz.save();
			 eliens();		 	 
			 zz.restore();
		if(dir==1)
			{
				 speeder.x+=30;
			}
		if(dir==2)
			{
				 speeder.x-=30;
			}  
		if(dir==0||speeder.x<0||speeder.x>1230)
			{
				 speeder.x=speeder.x;
			}  
				zz.save();
				zz.strokeStyle = '#f00';
				zz.strokeRect(speeder.x,speeder.y,50,50);
				zz.fillText(speeder.x,speeder.x+15,speeder.y+30);
				zz.restore();
				zz.beginPath();
				zz.strokeStyle = '#00f';
				zz.fill();
				zz.closePath();			
	}	
inter2 = setInterval(atack,AtackSpeed);
function check() 
{		
	
	for(j=0;j<10;j++)
	{
		if(ANet[j].fl==true)
		{
		for(i=0;i<N;i++)
		{
			if(ANet[j].x>AEl[i].x-40 && ANet[j].x<AEl[i].x+60 && AEl[i].fl==true)
			{ 
				if(ANet[j].y<AEl[i].y+50 && AEl[i].fl==true)
				{	
					ANet[j].y=800;
					ANet[j].fl = false;
					AEl[i].fl = false;
					m = 0;
					for(i1=0;i1<N;i1++)
					{
					if(AEl[i1].fl == true)
						{
							m++;
						}
					}					
					 points+=11;
						if(m==0)
						{
							
							pausefl == true;
							if(confirm('!!You Win!!'))
							{
								
								Start();
								
							}
							else
							{
								
								$.mobile.changePage('#M_menu');
							}
							//stopGame();
						}						 
				}				  
			}
		}
		}
		if((-50)>ANet[j].y)
		{
						ANet[j].y = 800;
						ANet[j].fl = false;
		}			
	}
	}
function eliens()
		{
			for(i=0;i<N;i++)
				{					
				if(AEl[i].fl==true)
					{
						zz.strokeRect(AEl[i].x,AEl[i].y,70,70);
					}
				
				}			
		}
function eliensO(N1,lev)
{
	var v,z;
	if(N1>9)
	{
		v=100;
		z=10;
	}
	if(N1<10)
	{
		v = 1000/N1;
		z=N1;		
	}
	AEl[lev*10].x=v;
	AEl[lev*10].y=((lev+1)*100);
	for(i=1;i<z;i++)
	{
		AEl[i+(lev*10)].x=AEl[i-1+(lev*10)].x+v;
		AEl[i+(lev*10)].y=((lev+1)*100);
	}
	if(N1>10)
	{
		eliensO(N1-10,lev+1);
	}
}
function atack()
{
	zz.save();	
	do{
	var at = Math.round(((N-0)*Math.random()));
	}while(AEl[at].fl == false);
	zz.fillRect(AEl[at].x,AEl[at].y,70,70);
	as[vvq] = new NET();
	as[vvq].x=AEl[at].x;
	as[vvq].y=AEl[at].y;
	as[vvq].w=AEl[at].w;
	as[vvq].h=AEl[at].h;
	as[vvq].fl = true;
	vvq++;
	if(vvq==1)
	{
		vvq = 0;
	}	
	zz.fillStyle = '#0f0';
	zz.restore();
}

function flyB()
{
	
	zz.save();
	zz.fillStyle = '#0f0';	
	  for(i = 0;i<as.length;i++)
	  {
		  if(as[i].fl != false)
		  {
			  as[i].y+=15;
			  zz.fillRect(as[i].x,as[i].y,as[i].w,as[i].h)	
		  }
	   }
  	zz.restore();
}
function check1()
{
	for(i = 0;i<as.length;i++)
  {
	  if(as[i].fl == true)
	  {
		  if(as[i].x > speeder.x-25 && as[i].x < speeder.x+75)
		  {
			  if(as[i].y >speeder.y-50 && as[i].y < speeder.y+100)
			  {
				  as[i].fl=false;
				  speeder.life -=1;
				 
				  if(speeder.life==0)
				  {
					  
					  zz.save();
					  zz.fillStyle = '#f00';
					  zz.font = "150px Arial";
					  zz.fillText('GAME OVER',200,200);						  				  
					  zz.restore();
					  gameFl = false;
					  pausefl == true;
					  setTimeout(function (){$.mobile.changePage('#M_menu');},1000);
				  }
			  }
		  }
		  if(as[i].y > 800)
		  {
			  as[i].fl = false;
		  }
	  }
  }
	  
	 
}
function statusBar()
{
	 zz.save();
	 zz.fillStyle = '#00f';
		 zz.font = "50px Arial";
		 zz.fillText(points,50,50);	
		 x1 = 1200; 
		 for(i=0;i<speeder.life;i++)
		 {			 
			 zz.fillRect(x1,50,10,50)
			 x1-=30;
		 }
	 zz.restore();
	zz.save();
		zz.fillStyle= '#fa0';
		zz.strokeRect(299,21,102,12);
		zz.fillRect(300,20,StatRech,10);
		
	zz.restore();
}
function PauseG()
{
		if(pausefl == true)
		{
			inter2 = setInterval(atack,2000);
			pausefl=false;
			inter = setInterval(Game,sInt);			
		}
		else{
	if(pausefl==false)
	{
		pausefl = true;
		clearInterval(inter);
		clearInterval(inter2);
		
	}
	}
	
}
function stopGame()
{
	//sPl=false;
	//gameFL==true;
	zz.clearRect(0,0,1280,768);
	clearInterval(inter);
	clearInterval(inter2);
	
	for(i=0;i<10;i++)		// заполнение массива паутин
		{
	ANet[i] = new NET();
		}
	var speeder = new Speeder();
	for(i=0;i<N;i++)		// заполнение массива Жуков
		{
	AEl[i] = new beetle();
		}
	eliensO(N,0);
	points = 0;
	speeder.life = MaxL;
	alert(speeder.life);	
	//$.mobile.changePage('#M_menu');
}
function IntervalF()
{
inter3 = setInterval(function(){
	StatRech+=1;
	if(StatRech ==100)
	{clearInterval(inter3);}
	
},recharge/100);
}