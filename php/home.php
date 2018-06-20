<!-- home.php 登录成功后跳转到的页面 -->
<?php
session_start();
include_once 'dbconnect.php';

if(!isset($_SESSION['user']))
{
 header("Location: Index1.php");
}
$res=mysqli_query($con,"SELECT * FROM users WHERE user_id=".$_SESSION['user']);
$userRow=mysqli_fetch_array($res);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Welcome - <?php echo $userRow['email']; ?></title>


<style>
	.ctn{
	height:100%;
	width:100%;
	display:flex;
	flex-direction:column;
}
.head{
	height:150px;
	width:100%;
	background-color:rgb(108,200,255);
	display:flex;
	flex-direction:row;
}
.navigation{
     height:120px;	 
     padding: 2.8em;
     border: 1px solid #eee;
     display: block;
     width:100%;
     margin: 0 auto;
     text-align: center;
     display:flex;
     flex-direction:row;
     justify-content:space-around;

}
.navigation a:hover{
	border-radius:4px;
	color:red;
	background:white;
}
.register,.log-in,.about-us,.contect-us{	
	text-decoration:none;
	font-size:30px;
	color:orange;
}
.body1{
	height:500px;
	width:100%;
	display:flex;
	flex-direction:row;
}
.picture1{
	height:100%;
	width:50%;
	background:url(../img/logo.jpg);
	background-repeat:no-repeat;
    background-size:100% auto;
}

.picture2{
	height:100%;
	width:50%;
	background:url(../img/picture5.png);
	background-repeat:no-repeat;
    background-size:100% auto;
}
.body2{
	margin-top:-10px;
	height:500px;
	width:100%;
	background:rgb(230,230,230);
	display:flex;
	flex-direction:row;
}
.body2-img1,.body2-img2,.body2-img3{
	height:300px;
	width:280px;
	align-self:center;

}
.pictures{
	height:100%;
	width:100%;
}

.body2-img1{
    margin-left:90px;
}
.body2-img2,.body2-img3{
    margin-left:110px;
}
.foot{
	height:150px;
	width:100%;
	background:rgb(102,102,102);
}

</style>
</head>
<body>


	<!-- 可替换 -->
 <div class="ctn">
    	<div class="head">
    		<div class="navigation">
    			<?hp echo $userRow['username']; ?>&nbsp;<a class="register" href="logout.php?logout">Sign Out</a>
    			<!-- <a class="register" href="introduce.html">sign out</a> -->
    			<a class="about-us" href="../html/example.html">choose example</a>
    			<a class="log-in" href="../html/about.html">about us</a>
    			
    			<a class="contect-us" href="../html/example1.html">contact us</a>
    		</div>	    		
    	</div>

    	<div class="body1">
    		<div class="picture1"></div>
    		<div class="picture2"></div>
    	</div>
    	<div class="body2">
    		<div class="body2-img1">
    			<a href="example.html"><img class="pictures" src="../img/picture1.png"></a>
    		</div>
    		<div class="body2-img2"><a href="../html/example.html"><img class="pictures" src="/img/picture2.png"></a></div>
    		<div class="body2-img3"><a href="../html/example.html"><img class="pictures" src="/img/picture3.png"></a></div>
    	</div>
    	<div class="foot"></div>




</body>
</html>
