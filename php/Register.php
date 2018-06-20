<!-- Register.php 包含了简单的HTML表单和PHP代码 -->
<?php
session_start();
if(isset($_SESSION['user'])!="")
{
 header("Location: home.php");
}
include_once 'dbconnect.php';

if(isset($_POST['btn-signup']))
{
 $uname = mysqli_real_escape_string($con,$_POST['uname']);
 $email = mysqli_real_escape_string($con,$_POST['email']);
 $upass = md5(mysqli_real_escape_string($con,$_POST['pass']));
 
 if(mysqli_query($con,"INSERT INTO users(username,email,password) VALUES('$uname','$email','$upass')"))
 {
  ?>
        <script>alert('successfully registered ');</script>
        <?php
 }
 else
 {
  ?>
        <script>alert('error while registering you...');</script>
        <?php
 }
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Login & Registration System</title>

<style>
.login-form{
	height:100%;
	width:1200px;
	opacity:0.7;
	display:flex;
	flex-direction:row;
	justify-content:center;
}
.picture{
	margin-left:-60px;
	width:400px;
	height:250px;
	background:url(../img/logo.png);
	background-repeat:no-repeat;
    background-size:100% auto;
}
.right{
	margin-right:100px;
}

.body{
	height:250px;
	width:400px;
	align-self:center;
	display:flex;
	flex-direction:column;
	justify-content:center;
}
.uname,.email,.pass
{
	align-self:center;
	width:400px;
}
.btn-signup{
	align-self:center;
	margin-top:-50px;
}
.uname{
	height:25px;
	width:300px;
}
.pass{
	height:25px;
	width:300px;
}
.email{
	height:25px;
	width:300px;
}

.head{
	margin-top:50px;
	color:orange;
	font-size:25px;
}


</style>

</head>
<body>
<center>








<!-- 这里等价于那个登陆页面的表头部分·可替换 -->
<div class="picture"></div>
<div id="login-form">
	<div class="left"></div>
	<form method="post">
		<table align="center" width="30%" border="0">
			<tr>
				<td><input class="uname" type="text" name="uname" placeholder="User Name" required /></td>
			</tr>
			<tr>
				<td><input class="email" type="email" name="email" placeholder="Your Email" required /></td>
			</tr>
			<tr>
				<td><input class="pass" type="password" name="pass" placeholder="Your Password" required /></td>
			</tr>
			<tr>
				<td><button type="submit" name="btn-signup">Sign Me Up</button></td>
			</tr>
			<tr>
				<td><a href="Index1.php">Sign In Here</a></td>
			</tr>
		</table>
	</form>
</div>
</center>
</body>
</html>