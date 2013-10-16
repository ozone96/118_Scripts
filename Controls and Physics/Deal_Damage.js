var damage : int;
var boom : boolean;
var boomPower : float;
var boomRadius : float;

function OnCollisionEnter (target : Collision) {
	if(boom && target.gameObject.GetComponent(Rigidbody) != null){
		target.rigidbody.AddExplosionForce(boomPower, transform.position, boomRadius, 0.0);
	}
	if(target.gameObject.GetComponent(Hit_Points) != null){
		target.gameObject.SendMessage("TakeDamage", damage);
	}
}