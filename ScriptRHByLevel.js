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
var lastStep = '';
for(var i = 1; i<=12; i++){
	var step = 0;
	if (lastStep != 'west'){	
		while(isFree('east')){east(); lastStep = 'east'; step++;}}
	if (lastStep != 'east'){
		while(isFree('west')){west(); lastStep = 'west'; step++;}}
	if (lastStep != 'south'){
		while(isFree('north')){north(); lastStep = 'north'; step++;}}
	if (lastStep != 'north'){
		while(isFree('south')){south(); lastStep = 'south'; step++;}}
	if (!step){north()} //crutch for trap in level 6
}

// last step that the system is not breakdown
east();
