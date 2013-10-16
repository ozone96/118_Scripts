var speed : float;
var jumpPower : float;
var gravity : float;
var ammo : Transform;
var inventory : int[];
var fireRate : float;
var deployDist : float;
private var horizontalSpd : float;
private var grounded : boolean = false;
private var blockedUp : boolean = false;
private var moveDirection : Vector3 = Vector3.zero;
private var canFire : boolean = true;
private var canCount : boolean = true;

//var walkingAnim : String;
//var jumpAnim : String;
//var climbAnim : String;
//var pushAnim : String;
function Update(){
	if(!canFire&&canCount){
		CountDown();
	}
}

function FixedUpdate () {
	var controller : CharacterController = gameObject.GetComponent(CharacterController);
	var flags = controller.Move(moveDirection*Time.deltaTime);
	var blockedUp = (flags & CollisionFlags.CollidedAbove) != 0;
	if(grounded){
		moveDirection = new Vector3(Input.GetAxis("Horizontal"), 0, 0);
		moveDirection *= speed;
		if(Input.GetButton("Jump")){
			moveDirection.y = jumpPower;
		}
	}
	moveDirection += transform.right*Time.deltaTime*horizontalSpd;
	if(blockedUp){
		moveDirection.y = 0;
	}
	moveDirection.y -= gravity*Time.deltaTime;

	grounded = (flags & CollisionFlags.CollidedBelow) != 0;
	/*if(moveDirection.x != 0){
		Animation.CrossFade(walkingAnim);
	}
	if(moveDirection.y > 0){
		Animation.CrossFade(jumpAnim);
	}
	if(CollisionFlags.CollidedSides && moveDirection.y > 0){
		Animation.CrossFade(climbAnim);
	}
	if(CollisionFlags.CollidedSides && moveDirection.y <= 0){
		Animation.CrossFade(pushAnim);
	}
	*/
	
	if(Input.GetButton("Fire") && canFire){
		var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hit : RaycastHit;
		var direction : Vector3;
		if(Physics.Raycast(ray, hit)){
			direction = hit.point;
		}
		var diffVector = hit.point-transform.position;
		var hitDist = Mathf.Sqrt(Mathf.Pow(diffVector.x, 2)+Mathf.Pow(diffVector.y, 2));
		var ratio = deployDist/hitDist;
		var deployLoc = Vector3((diffVector.x*ratio)+transform.position.x, (diffVector.y*ratio)+transform.position.y, 0);
		Instantiate(ammo, deployLoc, Quaternion(0,0,0,0));
		canFire = false;
	}
}

function CountDown(){
	canCount = false;
	yield new WaitForSeconds(1/fireRate);
	canCount = true;
	canFire = true;
}
@script RequireComponent(CharacterController);
//@script RequireComponent(Animation);
