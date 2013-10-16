var heated : Transform;
var cooled : Transform;
var relativeWeight : float;
var id : int; 
var reactive : boolean = false;
var dissipateTime : float;
var randomVertical : boolean = false;
var randomHorizontal : boolean = false;
var randomSpeed : float;

function Start(){
	yield new WaitForSeconds(dissipateTime);
	Destroy(gameObject); 
}

function OnTriggerEnter(contact : Collider){
	if(contact.gameObject.GetComponent("Substance") != null){
		var react = contact.gameObject.GetComponent("Substance").reactive;
		var other = contact.gameObject.GetComponent("Substance").id;
	}
	if(react != null){
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

function PhaseChange(heat : boolean){
	if(heat){
		Instantiate(heated, transform.position, transform.rotation);
	}
	else if(!heat){
		Instantiate(cooled, transform.position, transform.rotation);
	}
	Destroy(gameObject);
}
@script RequireComponent(Rigidbody);