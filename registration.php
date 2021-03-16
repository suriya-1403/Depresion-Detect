<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>registration</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <ul>
                <div style="float: left;">
                    <li><img src="listen-ear-icon-icons-and-png-backgrounds-26.png" height="100cm" width="100cm"></li>
                    <li><h1>easE Education</h1></li>
                </div>
                
                <div style="float: right;">
                    <li><h1>education for everyone</h1></li>
                </div>
                
            </ul>
        </header>
        
        <div>
            <form class="regform" method="POST">
                <label><h2>Create an Account</h2></label>
                <div class="input-container">
                    <input type="text" name="fname" required=""><label>Firstname</label>
                </div>
                <div class="input-container">
                    <input type="text" name="lname" required=""><label>Lastname</label>
                </div>
                <div class="input-container">
                    <input type="text" name="phone" required=""><label>Phone</label>
                </div>
                <div class="input-container">
                    <input type="text" name="dob" required=""><label>Date of Birth</label>
                </div>
                <div class="input-container">
                    <input type="text" name="school" required=""><label>School</label>
                </div>
                <div class="input-container">
                    <input type="text" name="uname" required=""><label>Username</label>
                </div>
                <div class="input-container">
                    <input type="password" name="pass" required=""><label>Password</label>
                </div>
                <div>
                <input type="submit" name="Submit">
                </div>
            </form>
        </div>        
    </body>
</html>
<?php
              
              if(isset($_POST['Submit']))
              {
                $fname=$_POST['fname'];
                $lname=$_POST['lname'];
                $phno =$_POST['phone'];
                $dob =$_POST['dob'];
                $sch = $_POST['school'];
                $user = $_POST['uname'];
                $pass = $_POST['pass'];
                //   $text = $fullname . "," . $regno . "," . $phno . "," . $mail . "\n";
                //   $fp = fopen('data.txt', 'a');
                //   fwrite($fp, $text);
              
                  $con = mysqli_connect("localhost","root","","hackathon");
                  if(mysqli_connect_errno()){
                      echo "Failed to connect to MySQL: ".mysqli_connect_error();
                  }
                  else{
                      // echo "Connected to mysql";
                      mysqli_query($con,"INSERT INTO `user`(`fullName`, `lastName`, `DoB`, `Phone`, `School`, `userName`, `Password`) VALUES ('$fname','$lname','$dob','$phno','$sch','$user','$pass')");

                      echo "<script>alert('Registered')</script>";
                  }
                  mysqli_close($con); 
              
              }
?>
