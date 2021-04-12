<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>ease</title>
        <!-- <link rel="stylesheet" href="ease.css"> -->

        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <ul>
                <div style="float: left;">
                    <li><img src="listen-ear-icon-icons-and-png-backgrounds-26.png" height="100cm" width="100cm"></li>
                    <li><h1>easƎ Education</h1></li>
                </div>
                
                <div style="float: right;">
                    <li><h1>education for everyone</h1></li>
                </div>   
            </ul>
        </header>
        <div>
        <form class="regform" method="POST">
                <div class="input-container">
                    <input type="text" name="uname" id="uname" required=""><label>UserName</label>
                </div>
                <div class="input-container">
                    <input type="password" name="pass" id="pass" required=""><label>Password</label>
                </div>
                <div>
                    <input type="submit" name="Submit" class="done" value="login">
                </div>
        </form>
        <div class="reg">
                    <p class="regi">New to easE Education?</p>
                    <a href="registration.php">
                        <button class="regis">register</button>
                    </a>
                </div>
        </div>
    </body>
</html>
<?php
    if(isset($_POST['Submit']))
    {
        $user = $_POST['uname'];
        $pass = $_POST['pass'];
        $con = mysqli_connect('localhost','root','','hackathon');
        echo($user);
        if(mysqli_connect_errno()){
            echo "Failed to connect to MySQL: ".mysqli_connect_error();
        }
        else{
            $search = "SELECT * FROM `user` WHERE userName='$user' ";
			$result = mysqli_query($con,$search);
            $pass_search = "SELECT * FROM `user` WHERE Password='$pass' ";
            $pass_result=mysqli_query($con,$pass_search);
			
            if(mysqli_num_rows($result)==1){
                if(mysqli_num_rows($pass_result)==1){
                    echo"<script>alert('Succcess');location.replace('hack/q.html')</script>";
                }
                else{
                    echo"Invalid Password";
                }  
            }
            else{
                echo"Invalid username!";
            }
        }
        mysqli_close($con); 
    } 
?> 
