var minDamage : int;
var minVelocity : float;
var shatter : Transform;
//var damageSounds : AudioClip[];
//var noDamageSounds : AudioClip[];
private var damage : int = 0;

function OnCollisionEnter (hit : Collision){
	if(hit.rigidbody){
		var target = hit.rigidbody.velocity;
			var targetHP = hit.gameObject.GetComponent(Hit_Points);
		var diffX = Mathf.Abs(rigidbody.velocity.x)-Mathf.Abs(target.x);
		var diffY = Mathf.Abs(rigidbody.velocity.y)-Mathf.Abs(target.y);
		if(diffX < 0){
			diffX = 0;
		}
		if(diffY < 0){
			diffY = 0;
		}
		var velocityDiff : float = diffX + diffY;
		if(velocityDiff > minVelocity){
			print(velocityDiff);
			if(targetHP != null){
				damage = Mathf.Ceil((velocityDiff/minVelocity)*minDamage);
			}
			hit.gameObject.SendMessage("TakeDamage", damage, SendMessageOptions.DontRequireReceiver);
			Instantiate(shatter, transform.position, transform.rotation);
			Destroy(gameObject);
		}
	}
}
@script RequireComponent(Rigidbody);