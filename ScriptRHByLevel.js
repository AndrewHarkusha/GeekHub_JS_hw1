/*
Script passage of the maze for RoboHub.
http://zhesha.github.io/robohub/
*/

// level 1
north(); north();

//level 2
while(isFree('east')){east();}

//level 3
while(isFree('south')){south(); east();}

//level 4
while (isFree('east')){
east();
if(!isFree('east')){
	while(isFree('south')){south();}
	}
}

//level 5
for(var i = 1; i<=3; i++){
	while(isFree('west')){west()};
	if (i!=2){while(isFree('south')){south()};}
	else {while(isFree('north')){north()};}
}
while(isFree('east')){east()};

//level 6 and 7
var prevStep = '';
for(var i = 1; i<=12; i++){
	var step = 0;
	if (prevStep != 'west'){	
		while(isFree('east')){east(); prevStep = 'east'; step++;}}
	if (prevStep != 'east'){
		while(isFree('west')){west(); prevStep = 'west'; step++;}}
	if (prevStep != 'south'){
		while(isFree('north')){north(); prevStep = 'north'; step++;}}
	if (prevStep != 'north'){
		while(isFree('south')){south(); prevStep = 'south'; step++;}}
	if (!step){north()} //crutch for trap in level 6
}

// last step that the system is not breakdown
east();
