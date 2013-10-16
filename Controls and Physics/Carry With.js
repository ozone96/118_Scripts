private var carriedObject : Transform;
private var oldPos : float;

oldPos = transform.position.y;

function OnCollisionEnter(obj : Collision){
	if(obj.gameObject.tag == "Player"){
		carriedObject = obj.transform;
		print(obj.gameObject.name + "picked up");
	}
}

function OnCollisionExit(obj : Collision){
	if(obj.gameObject.tag == "Player"){
		carriedObject=null;
	}
}

function FixedUpdate(){
	var pos = transform.position.y;
	var delta = pos-oldPos;
	if(carriedObject){
		carriedObject.GetComponent(CharacterController).Move(Vector3(0,delta,0));
	}
	oldPos = pos;
}