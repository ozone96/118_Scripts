var levelToLoad : String;

function OnCollisionEnter (hit : Collision) {
	if(hit.gameObject.tag == "Player"){
		Application.LoadLevel(levelToLoad);
	}
}
