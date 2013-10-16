var timeOut : float = 1.0;

function Awake () {
	Invoke("DestroyNow",timeOut);
}

function DestroyNow () {
	Destroy(gameObject);
}