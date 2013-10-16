var lift : float;
var maxLift : float;
var destroyed : Transform;
private var blocked : boolean = false;

function FixedUpdate () {
	if(!blocked){
		transform.parent.Translate(Vector3.up*lift*0.005);
	} 
}

function OnTriggerEnter(contact : Collider){
	if(contact.gameObject.tag == "heat" || contact.gameObject.tag == "boom"){
		Instantiate(destroyed, transform.position, transform.rotation);
		Destroy(gameObject); 
	}
}

function Intake(input : Transform){
	if(input.gameObject.GetComponent("Substance").relativeWeight <= 0 && lift < maxLift){
		lift += 0.2;
		gameObject.transform.localScale += Vector3(0.04, 0.04, 0.04); 
	}
}

function OnCollisionEnter(hit : Collision){
	if(hit.gameObject.tag == "Wall"){
		blocked = true;
	}
}

function OnCollisionExit(){
	blocked = false;
}