//The game objects in this array each had an area of vector3s.
var array : GameObject[];
private var inMotion : boolean = false;
var next : Vector3;
var lastPos : Vector3;
var x : int;
var y : int;
private var dir : int = 0;
var speed : float = 1;
var transitTime : float = 2;
private var startTime : float;
private var check : Vector3;
private var levelToLoad : int = 0;
private var canLoad : boolean = false;

function Start () {
	check=transform.position;
	levelToLoad = 0;
}

function Update () {
	var time = Time.time-startTime;
	if(inMotion) {
		MoveObject(transform, array[y].GetComponent(Row).places[x], next, 3);
	}
	getDirection();
	GetLoad();
	if(inMotion && check == next){
		hasArrived();
	}
	transform.position=check;
	transform.LookAt(next);
}

function MoveObject (thisTransform : Transform, startPos : Vector3, endPos : Vector3, time : float) {
   var i = 0.0;
   var rate = time/transitTime;
   while (i < 1.0) {
       i += Time.deltaTime * rate;
       thisTransform.position = Vector3.Lerp(startPos, endPos, i*speed);
       yield; 
   }
   check=thisTransform.position;
}

function getDirection() {
	if(!inMotion){
		if(Input.GetKeyDown("w")) {
			up();
		} else if(Input.GetKeyDown("s")) {
			down();
		} else if(Input.GetKeyDown("d")) {
			right();
		} else if(Input.GetKeyDown("a")) {
			left();
		}
	}
}

function hasArrived() {
	switch(dir) {
		case 1:
			x+=1;
			break;
		case 2:	
			x-=1;
			break;
		case 3:
			y+=1;
			break;
		case 4:
			y-=1;
			break;
	}
		inMotion=false;
		ChangeLevel();
}

function right () {
	var row = array[y].GetComponent(Row).places;
	if(x<(row.length-1)&&!inMotion) {
		if(row[x+1].y!=1){
			next=row[x+1];
			dir=1;
			inMotion=true;
			startTime=Time.time;
		}
	}
}

function left () {
	var row = array[y].GetComponent(Row).places;
	if(x>0&&!inMotion) {
		if(row[x-1].y!=1){
			next=row[x-1];
			dir=2;
			inMotion=true;
			startTime=Time.time;
		}
	}
}

function up () {
	if(y<(array.Length-1)&&!inMotion) {
		if(array[y+1].GetComponent(Row).places[x].y!=1) {
			next=array[y+1].GetComponent(Row).places[x];
			dir=3;
			inMotion=true;
			startTime=Time.time;
		}
	}
}

function down () {
	if(y>0&&!inMotion) {
		if(array[y-1].GetComponent(Row).places[x].y!=1){
			next=array[y-1].GetComponent(Row).places[x];
			dir=4;
			inMotion=true;
			startTime=Time.time;
		}
	}
}
function ChangeLevel(){
	var lvl = array[y].GetComponent(Row).levels[x];
	if(lvl>1){
		levelToLoad = lvl;
		canLoad = true;
	}
	else{
		canLoad = false;
	}
}

function GetLoad(){
	if(Input.GetKeyDown("return") && canLoad){
		Application.LoadLevel(levelToLoad);
	}
}