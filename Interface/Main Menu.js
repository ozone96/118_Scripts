var skin : GUISkin; 
var areaX : float;
var areaY : float;
var startLevel : String;

function OnGUI () {
	var ScreenX : float = Screen.width*0.5-areaX*0.5;
	var ScreenY : float = Screen.height*0.5-areaY*0.5;
	GUILayout.BeginArea(Rect(ScreenX, ScreenY, areaX, areaY));
	if(GUILayout.Button("Play")){
		Application.LoadLevel(startLevel);
	}
	if(GUILayout.Button("Quit")){
		Application.Quit();
	}
	GUILayout.EndArea();
}