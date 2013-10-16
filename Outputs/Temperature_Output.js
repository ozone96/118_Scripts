var textureChange : boolean;
var textures : Texture2D[];
var heat : boolean;
private var on : boolean;

function Signal(input : int) {
	var meshRenderer : MeshRenderer = gameObject.GetComponent(MeshRenderer);
	if (input > 0){
		on = true;
	}
	if(input <= 0){
		on = false;
	}
	if(textureChange){
		meshRenderer.texture = textures[input];
	}
}

function OnTriggerStay(target : Collider){
	if(on){
		target.gameObject.SendMessage("PhaseChange", heat);
	}
}