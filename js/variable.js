var gameFl = false;
var pausefl = false;
var ANet = new Array();
var AEl = new Array(); 				//массив жуков
var as =new Array();                // массив для атаки мух
var vvq = 0;
var MaxAt = 3;						//максимальное колличество атак мух в один промежуток времени;
var MaxL = 2;						//предел жизней	
var Lives_L;						//Жизни на уровне
var nN = 0;							 //номер паутины)
var N = 10; 						//колличество мух
var m;
var x1 = 0;
var y1 = 700;
var x2 = 0;
var y2 = -51;
var iner;
var inter2;
var inter3;
var dir=0;
var points = 0;                     //Очки
var ex = true;
var Nfly = 20;                      //cскорость полета паутины
var checkFire = false;
var sInt = 25;
var AtackSpeed = 5000;				//Скорость атаки бота
var atackFL = true;
var recharge = 5000;				//скорость перезарядки
var StatRech = 100;



function NET()			// Паутина
{
	this.x = 0;
	this.y = 800;
	this.w = 50;
	this.h = 50;
	this.fl = false;
}


function beetle()
{
	this.x = 0;
	this.y = 0;
	this.w = 70;
	this.h = 70;
	this.fl = true;
}
function Speeder()    //паук
{
	this.x = 0;
	this.y = 700;
	this.w = 50;
	this.h = 50;
	this.life = MaxL;
}

