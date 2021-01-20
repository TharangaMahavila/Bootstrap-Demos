$(".btn").on('click',function(){
    $.ajax({
        /* type: "POST", */
        url: "logout.php",
        success: ()=>{
            alert("You Logged Out!");
            location.href="admin.php";
        },
        error: ()=>{
            alert("Something Went Wrong! Try Again");
        }
    });
});