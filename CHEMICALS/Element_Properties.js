//CSV file containing all properties of the elements
var elementInfoFile : TextAsset;
private var elementInfo : String[] = elementInfoFile.text.Split(","[0]);
//CSV file containint the bond energies of all single covalent bonds
var bond1InfoFile : TextAsset;
private var bond1Info : String[] = bond1InfoFile.text.Split(","[0]);
//ditto for all double covalent bonds
var bond2InfoFile : TextAsset;
private var bond2Info : String[] = bond2InfoFile.text.Split(","[0]);
//ditto for trible bonds
var bond3InfoFile : TextAsset;
private var bond3Info : String[] = bond3InfoFile.text.Split(","[0]);
//ditto for hydrogen bonds
var bondHydroInfoFile : TextAsset;
private var bondHInfo : String[] = bondHydroInfoFile.text.Split(","[0]);
//ditto for ionic bonds
var bondIonInfoFile : TextAsset;
private var bondIonInfo : String[] = bondIonInfoFile.text.Split(","[0]);

//this is an array of elements defined by the class type Element. This is effectively the final product of this script
static var elements = new Array() as Element[];
elements[0] = null;

//These are properties of elements indexed by ATOMIC NUMBER! This means that the first one is 0 NOT 1. Hydrogen is the SECOND value in the arrays, Helium is third, and so on.  
var rSeriesPlaces : int[];
var valenceEs : int[];
var eNegs : float[];

//defines a class that holds all information about an element
class Element{
	//atomic number
	var id : int;
	//valence charge
	var valenceE : int;
	//if the object is a metal, defines its rank in the activity series, otherwise is 0
	var rSeriesPlace : int;
	//the element's electronegativity
	var eNeg : float;
	//the element's bond energies in single covalent bonds
	var bond1E : float[];
	//ditto double bonds
	var bond2E : float[];
	//ditto triple bonds
	var bond3E : float[];
	//ditto hydrogen bonds
	var bondHE : float[];
	//ditto ionic bonds
	var bondIonE : float[];
}
//parses CSV file holding element properties and sorts values into various categories
private var j : int = 0;
private var k : int = 0;
for(info in elementInfo){
	switch(j){
		case 0: 
			rSeriesPlaces[k] = parseInt(info);
			break;
		case 1:
			valenceEs[k] = parseInt(info);
			break;
		case 2:
			eNegs[k] = parseFloat(info);
			break;
	}
	j++;
	if(j > 3){
		j = 0;
		k++;
	}
}

//pushes all the elements in the game into an array and sets their properties
for(var i = 0; i < 118; i++){
	var newElement : Element;
	newElement.id = i+1;
	newElement.valenceE = valenceEs[i];
	newElement.eNeg = eNegs[i];
	newElement.rSeriesPlace = rSeriesPlaces[i];
	//parses CSV file holding the bond strengths for single covalent bonds
	for(var l = 0; l < 118; l++){
		newElement.bond1E.push(parseFloat(bond1Info[(i*118)+l]));
	}
	//parses CSV file holding the bond strengths for double covalent bonds
	for(var m = 0; m < 118; m++){
		newElement.bond2E.push(parseFloat(bond2Info[(i*118)+m]));
	}
	//parses CSV file holding the bond strengths for triple covalent bonds
	for(var n = 0; n < 118; n++){
		newElement.bond3E.push(parseFloat(bond3Info[(i*118)+n]));
	}
	//parses CSV file holding the bond strengths for hydrogen bonds
	for(var o = 0; o < 118; o++){
		newElement.bondHE.push(parseFloat(bondHInfo[(i*118)+o]));
	}
	//parses CSV file holding the bond strengths for ionic bonds
	for(var p = 0; p < 118; p++){
		newElement.bondIonE.push(parseFloat(bondIonInfo[(i*118)+p]));
	}
	elements.push(newElement);
}