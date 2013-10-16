var maxHp : int;
private var currentHp : int;
var destroyedPrefab : Transform;

function Start(){
	currentHp = maxHp;
}

function Update(){
	if(currentHp <= 0){
		Instantiate(destroyedPrefab, transform.position, transform.rotation);
		Destroy(gameObject);
	}
}

function TakeDamage (damage : int) {
	currentHp -= damage;
	print(currentHp);
}