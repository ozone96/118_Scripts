var outputs : Transform[];
var weightTag : String;

function OnCollisionEnter (hit : Collision) {
	if(hit.gameObject.tag == weightTag){
		for(output in outputs){
			output.SendMessage("Signal", 1);
		}
	}
}

function OnCollisionExit (hit : Collision) {
	if(hit.gameObject.tag == weightTag){
		for(output in outputs){
			output.SendMessage("Signal", 0);
		}
	}
}