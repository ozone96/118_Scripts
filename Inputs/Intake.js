var output : Transform;
private var input : Transform;
var form : int;

function OnCollisionEnter(contact : Collision){
	input = contact.transform;
	var sub=contact.gameObject.GetComponent(Substance);
	if(sub!=null){
		if(sub.phase==form)
		{
			output.gameObject.SendMessage("Intake", input);
			input.position=new Vector3(-10000,-10000,-10000);
		}
	}
}