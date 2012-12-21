// JavaScript Document is here
var can_W = 1280;
var can_H = 768;
var test = document.getElementById("can1");
test.width=can_W;
test.height=can_H;
function Start(){
	zz.clearRect(0,0,1280,768);
	/*if(inter==true){
	clearInterval(inter);
	clearInterval(inter2);
	}*/
	if(pausefl == true)
		{
			inter2 = setInterval(atack,2000);
			pausefl=false;
			inter = setInterval(Game,sInt);			
		
	for(i=0;i<10;i++)		// заполнение массива паутин
		{
			ANet[i] = new NET();
		}
	//var speeder = new Speeder();
	for(i=0;i<N;i++)		// заполнение массива Жуков
		{
			AEl[i] = new beetle();
		}
		N = 10;
		}
	//eliensO(N,0);
	
	//alert(speeder.life);		
	
//stopGame();	
if(test.height==768 && gameFl == false)
{
gameFl = true;
Play1(true);
}
}

	