function rem()
{
    function education()
    {
        var edu_sum= localStorage.getItem("edu_sum");
        if(edu_sum<6.5)
        {
            document.getElementById("edu").innerHTML="It seems that you are very stressed in the field of subjects that you study. You are advised to concentrate more on understanding the question with ease. If necessary you can also take the help of a personal tutor to reduce stress you are facing when studying the subjects that you find difficult. It is advised to take remedial measures immediately.";
        }
        else if((edu_sum>=6.5)&&(edu_sum<16))
        {
            document.getElementById("edu").innerHTML="It seems that you are somewhat stressed in the field of subjects that you study. You are advised to concentrate on understanding the question with ease. It is advised to take remedial measures as early as possible";
        }
        else if((edu_sum>=16)&&(edu_sum<21))
        {
            document.getElementById("edu").innerHTML="It seems that you are very less/not at all stressed in the field of subjects that you study. Eventhough, you are advised to improve your understandability of concepts. It is advised to take remedial measures whenever possible";
        }
    }
    function teacher()
    {
        var tea_sum= localStorage.getItem("tea_sum");
        if(tea_sum<6.5)
        {
            document.getElementById("tea").innerHTML="It seems that you are very stressed in the field of teachers-compatability. You are advised to talk to your teachers about the issues that your are facing with them. If face awkwardness in expressing your problems with your teachers to them, you are advised to tell your parents to convey the problem to them on your behalf.  It is advised to take remedial measures immediately";
        }
        else if((tea_sum>=6.5)&&(tea_sum<16))
        {
            document.getElementById("tea").innerHTML="It seems that you are somewhat stressed in the field of teachers-compatability. You are advised to talk to your teachers about the issues that your are facing with them. It is advised to take remedial measures as early as possible.";
        }
        else if((tea_sum>=16)&&(tea_sum<21))
        {
            document.getElementById("tea").innerHTML="It seems that you are very less/not at all stressed in the field of teachers-compatability. Eventhough, it is advised to do the needful in order to improve this. It is advised to take remedial measures whenever possible.";
        }
    }
    function school()
    {
        var sch_sum= localStorage.getItem("sch_sum");
        if(sch_sum<6.5)
        {
            document.getElementById("sch").innerHTML="It seems that you are very stressed in the field of school-environment. You are advised to talk to your teachers about the issues that your are facing with the studying environment of the school. If face awkwardness in expressing your problems with your teachers to them, you are advised to tell your parents to convey the problem to them on your behalf.  It is advised to take remedial measures immediately";
        }
        else if((sch_sum>=6.5)&&(sch_sum<16))
        {
            document.getElementById("sch").innerHTML="It seems that you are somewhat stressed in the field of school-environment. You are advised to talk to your teachers about the issues that your are facing with the studying environment of the school. It is advised to take remedial measures as early as possible.";
        }
        else if((sch_sum>=16)&&(sch_sum<21))
        {
            document.getElementById("sch").innerHTML="It seems that you are very less/not at all stressed in the field of school-environment. Eventhough, you are advised to do the needful in order to improve. It is advised to take remedial measures whenever possible";
        }
    }
    function home()
    {
        var home_sum= localStorage.getItem("home_sum");
        if(home_sum<6.5)
        {
            document.getElementById("home").innerHTML="It seems that you are very stressed in the field of house-environment. You are advised to talk to your parents about the issues that your are facing with the studying environment of your house. You are also advised to change your house/study room as per your wish in order to provide yourself the best comfortable environment. It is advised to take remedial measures immediately.";
        }
        else if((home_sum>=6.5)&&(home_sum<16))
        {
            document.getElementById("home").innerHTML="It seems that you are somewhat stressed in the field of house-environment. You are advised to talk to your parents about the issues that your are facing with the studying environment of your house. It is advised to take remedial measures as early as possible.";
        }
        else if((home_sum>=16)&&(home_sum<21))
        {
            document.getElementById("home").innerHTML="It seems that you are very less/not at all stressed in the field of house-environment. Eventhough, you are advised to do the needful in order to improve. It is advised to take remedial measures whenever possible.";
        }
    }
    function friends()
    {
        var fri_sum= localStorage.getItem("fri_sum");
        if(fri_sum<6.5)
        {
            document.getElementById("fri").innerHTML="It seems that you are very stressed in the field of friends-group. You are advised to talk to your friends about the problems you are facing with them. You are also advised surround yourselves only with positive people. It is advised to take remedial measures immediately.";
        }
        else if((fri_sum>=6.5)&&(fri_sum<16))
        {
            document.getElementById("fri").innerHTML="It seems that you are somewhat stressed in the field of friends-group. You are advised to talk to your friends about the problems you are facing with them. It is advised to take remedial measures as early as possible.";
        }
        else if((fri_sum>=16)&&(fri_sum<21))
        {
            document.getElementById("fri").innerHTML="It seems that you are very less/not at all stressed in the field of friends-group. Eventhough, you are advised to do the needful in order to improve. It is advised to take remedial measures whenever possible.";
        }
    }
    education();
    teacher();
    school();
    home();
    friends();
}
rem();