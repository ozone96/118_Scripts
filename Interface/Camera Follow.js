var target : Transform; 

function FixedUpdate(){
	var targetX : float = target.position.x;
	var targetY : float = target.position.y;
	transform.position = Vector3(targetX, targetY, -10);
}