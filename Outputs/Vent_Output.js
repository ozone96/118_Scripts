var delay : float;
private var inputClone : Transform;

function Intake (input : Transform) {
	yield WaitForSeconds(delay);
	Instantiate(input,transform.position-Vector3.down, transform.rotation);
	UnityEngine.Object.Destroy(input.gameObject);
}