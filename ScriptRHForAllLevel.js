/*
Script passage of the maze for RoboHub.
http://zhesha.github.io/robohub/
*/

// For all levels
var prevStep = '';
var countStep = 0;
for(var i = 1; i<=28; i++){ // Loop "for" because I don't know how to verify that the game is over
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
	countStep += step; 
}

// last step that the system is not breakdown
countStep++;
east();

console.log("Count of steps at all levels is " + countStep);
