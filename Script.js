javascript :{

    function tickWithChance (inArray, chance, supLv = false) {
        for ( cou = 0; cou < inArray.length; cou++) {
            if (inArray[cou].type == "checkbox") {  
                if( Math.random() < chance ) {
                    inArray[cou].checked = true;
                } else {
                    inArray[cou].checked = false;
                }
                
                if (supLv !== false) {
                   if( supLv <= 2 ) {
                       if( inArray[cou].value == "4" ) {
                           inArray[cou].checked = false;
                       }
                   } 
                   if ( supLv == 1 ) {
                       if( inArray[cou].value == "2" ) {
                           inArray[cou].checked = false;
                       }
                   }
                }
            }
        }
    }

    var defaultHours = 5;
    var runningTotalHours = 0;

    const hours = [];

    hours[1] = prompt("Fault find electrial hours?", defaultHours);
    runningTotalHours = runningTotalHours + parseInt(hours[1]);
    hours[2] = prompt("Install/ Terminate LV Cables? (hours worked so far: " + runningTotalHours + ')', defaultHours);
    runningTotalHours = runningTotalHours + parseInt(hours[2]);
    hours[3] = prompt("Install Apparatus? (hours worked so far: " + runningTotalHours + ')', defaultHours);
    runningTotalHours = runningTotalHours + parseInt(hours[3]);
    hours[4] = prompt("Install Support / Protection (hours worked so far: " + runningTotalHours + ')', defaultHours);
    runningTotalHours = runningTotalHours + parseInt(hours[4]);
    hours[5] = prompt("Service / Fabricate / Repair apparatus (hours worked so far: " + runningTotalHours + ')', defaultHours);
    runningTotalHours = runningTotalHours + parseInt(hours[5]);
    hours[6] = prompt("Test Apparatus / Circuts (hours worked so far: " + runningTotalHours + ')', defaultHours);
    runningTotalHours = runningTotalHours + parseInt(hours[6]);
    var i, j, k;

    oJT = document.getElementsByName("competency25Time");
    var oP = prompt("How many hours of Trade School? (hours worked so far: " + runningTotalHours + ')' , "8");
    oJT[1][oP].selected = true;

    //var workHours = hours - oP;
    //console.log("Working hours to divide between Core units: "+workHours);

    var supLv = prompt("What level of support do you want to tick? 1: Direct/Constant only; 2:General/Intermittent as well; 3:All of them", 2);


    for ( i = 1; i < 7; i++) {
        //var tTemp = Math.floor(workHours/6);
        //console.log(tTemp);
        document.getElementsByName("competency"+i+"Time")[1][hours[i]].selected = true;
    }

    wPrac = document.getElementsByName("workPractices");


    for ( i = 0; i < wPrac.length; i++) {
        if (wPrac[i].type == "checkbox") {
            wPrac[i].checked = true;
        }
    }

    sWork = document.getElementsByName("supplementaryWork");

    for ( i = 0; i < sWork.length; i++) {
        if (sWork[i].type == "checkbox") {
            if (Math.random() > .5) {
                sWork[i].checked = true;
            } else {
                sWork[i].checked = false;
            }
        }
    }

    //try and step through all 6 cats at once and tick everything!!
    for ( i = 1; i < 7; i++) {

        activity = document.getElementsByName("competency"+ i +"Activity");
        tickWithChance(activity, 1);

        supervision = document.getElementsByName("competency"+ i +"Supervision");
        tickWithChance(supervision, 1, supLv);

        support = document.getElementsByName("competency"+ i +"Support");
        tickWithChance(support, 1, supLv);

        extended = document.getElementsByName("competency"+ i +"Extended");
        tickWithChance(extended, .25);            
    }

    //alert("Everything should be ticked now with " + Math.floor(workHours/6) + " hours for each category, don't forget to change this!");

    sup = document.getElementsByName("SupervisorUserID1");
    sup[0][1].selected = true;

}