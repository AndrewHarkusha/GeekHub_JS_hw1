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

//level 5
for(var i = 1; i<=3; i++){
while(isFree('west')){west()};
if (i!=2){while(isFree('south')){south()};}
else {while(isFree('north')){north()};}
}
while(isFree('east')){east()};
