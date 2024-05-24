
$(document).ready(()=>{

   /* $("#txt1").focus(()=>{
        console.log("Txt1 Focussed");
        document.getElementById("txt1").value="";
        $("#msg1").html("Enter Email or Mobile number");
    });
    
    $("#txt1").blur(()=>{
        document.getElementById("txt1").value="Enter Email or Mobile number";
        $("#msg1").html("");
    });

    $("#txt2").focus(()=>{
        console.log("Txt1 Focussed");
        document.getElementById("txt2").value="";
        $("#msg2").html("Enter Password");
    });
    
    $("#txt2").blur(()=>{
        document.getElementById("txt2").value="Enter Password";
        $("#msg2").html("");
    });*/

    $("#btn1").click(()=>{

        var un=$("#txt1").val();
        var p=$("#txt2").val();

        if(un!="" && p!=""){
            if(un=="admin" && p=="admin")
            {
                $("#m2").css("color","green");
                $("#m2").html("Your authorization is success");
            }
            else{
                $("#m2").html("Your authorization is denied");
            }
        }
        else{
            $("#m2").html("Username/password not found!!");
        }

        setTimeout(() => {
            $("#m2").html("");
        }, 3000);
    });
});    

          
     

     