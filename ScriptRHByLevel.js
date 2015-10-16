/*
Script passage of the maze for RoboHub.
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
