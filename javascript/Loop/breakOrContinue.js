//break keyword
for (let i=0;i<= 10;i++){
    if(i==4){
        break //break stop the for loop excuation will go out to next code
    }
}

//continue -- will continue start for loop

for (let i=0; i<=10;i++){
    if (i == 4){
        continue //it will start loop again 
    }
    console.log(i) // 4 will be skipped & loop start further away
}