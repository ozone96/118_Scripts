#pragma strict
var player : Transform;
var distRequired : int;
var key : String;
var speakLength : int;
var skinSpeaking : GUISkin;
var skinNotSpeaking : GUISkin;
var text : String;
private var speakTemp : int;

function Update ()
{
	if(((player.position - transform.position).magnitude<=distRequired)&&Input.GetKeyDown(key))
	{
		answer();
	}
}

function OnGUI()
{
	skinNotSpeaking.label.fontSize = Mathf.Min(Screen.width, Screen.height)/25;
	skinSpeaking.label.fontSize = skinNotSpeaking.textField.fontSize;
	if(speakTemp!=0)
	{
		GUI.skin=skinSpeaking;
		speakTemp--;
		GUILayout.BeginArea(Rect(Screen.width/3, Screen.height/20, Screen.width/3, Screen.height/15));
		GUILayout.Label(text);
		GUILayout.EndArea();
	}
	else if(((player.position - transform.position).magnitude<=distRequired))
	{
		GUI.skin=skinNotSpeaking;
		GUILayout.BeginArea(Rect(Screen.width/3, Screen.height/20, Screen.width/3, Screen.height/15));
		GUILayout.Label("Press '"+key+"' to speak");
		GUILayout.EndArea();
	}
}

function answer () 
{
	var aud = GetComponent(AudioSource);
	if(aud!=null)
	{
		aud.Play();
	}
	speakTemp=speakLength;
	print("played sound");
}