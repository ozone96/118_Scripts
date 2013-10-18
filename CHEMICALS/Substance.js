var deployWithForce : boolean;
var phase : int;
var relativeWeights : float[];
var gasTransition : float;
var solidTransition : float;
var id : String; 
var reactive : boolean = false;
var dissipateTime : float;
var randomVertical : boolean = false;
var randomHorizontal : boolean = false;
var randomSpeed : float;
var compoundID : String;
private var currentTemperature = 0;
private var relativeWeight = relativeWeights[phase];

function Start(){
	yield new WaitForSeconds(dissipateTime);
	Destroy(gameObject); 
}

function OnTriggerEnter(contact : Collider){
	if(contact.gameObject.GetComponent("Substance") != null){
		var react = contact.gameObject.GetComponent("Substance").reactive;
		var other = contact.gameObject.GetComponent("Substance").id;
	}
	if(react){
		React(other);
	}
}

function FixedUpdate(){
	gameObject.rigidbody.AddForce(Vector3.down*relativeWeight);
	if(randomVertical){
		var speedy = Mathf.Floor(Random.value*2*(randomSpeed+1))-randomSpeed;
		transform.position.y += speedy*0.01;
		
	}
	if(randomHorizontal){
		var speedx = Mathf.Floor(Random.value*2*(randomSpeed+1))-randomSpeed;
		transform.position.x += speedx*0.01;
		
	}
}

function React(reactant : int){
	
}

function TempChange(heat : float){
	currentTemperature += heat;
	if(currentTemperature > gasTransition){
		
	}
	else if (currentTemperature < solidTransition){
	
	}
}
function PhaseChange(){
	
}
@script RequireComponent(Rigidbody);