<!-- Index1.php 登录页面 -->
<?php
session_start();
include_once 'dbconnect.php';

if(isset($_SESSION['user'])!="")
{
 header("Location: home.php");
}
if(isset($_POST['btn-login']))
{
 $email = mysqli_real_escape_string($con,$_POST['email']);
 $upass = mysqli_real_escape_string($con,$_POST['pass']);
 $res=mysqli_query($con,"SELECT * FROM users WHERE email='$email'");
 $row=mysqli_fetch_array($res);
 if($row['password']==md5($upass))
 {
  $_SESSION['user'] = $row['user_id'];
  header("Location: home.php");
 }
 else
 {
  ?>
        <script>alert('wrong details');</script>
        <?php
 }
 
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>cleartuts - Login & Registration System</title>


<style>
.login-form{
	margin-top:150px;
	height:100%;
	width:1200px;
	opacity:0.7;
	display:flex;
	flex-direction:row;
	justify-content:center;
}
.picture{
	width:400px;
	height:230px;
	margin:-10px 0 0 -20px;
	background:url(img/logo.png);
	background-repeat:no-repeat;
    background-size:100% auto;
}
.head{
	font-size:25px;
	color:orange;
}
.body{
	height:200px;
	width:300px;
	align-self:center;
	display:flex;
	flex-direction:column;
	justify-content:center;
}

.email{
	height:25px;
	width:300px;
}
.pass{
	height:25px;
	width:300px;
}
</style>
</head>
<body>
<center>



<!-- 这里也等价于登录注册页面的表头部分·可替换，其余部分不可动 -->
<div class="picture"></div>
<div id="login-form">
<form method="post">
<table align="center" width="30%" border="0">
<tr>
<td><input class="email" type="text" name="email" placeholder="Your Email" required /></td>
</tr>
<tr>
<td><input class="pass" type="password" name="pass" placeholder="Your Password" required /></td>
</tr>
<tr>
<td><button type="submit" name="btn-login">Sign In</button></td>
</tr>
<tr>
<td><a href="register.php">Sign Up Here</a></td>
</tr>
</table>
</form>
</div>





</center>
</body>
</html>