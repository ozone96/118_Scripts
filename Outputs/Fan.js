#pragma strict
var strength : float;
function Update () {
	var hit : RaycastHit;
	var pos = transform.position;
	if(Physics.Raycast(pos, this.transform.forward, hit, strength)) {
		var hitpos : Vector3 = hit.transform.position;
		var power = this.transform.forward*(strength-(hitpos-this.transform.position).magnitude);
		if(hit.rigidbody!=null)
		{
			hit.rigidbody.AddForce(power);
		}
	}
}