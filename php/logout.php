<!-- logout.php 用户注销（退出登录）页面： -->
<?php
session_start();

if(!isset($_SESSION['user'])){
	header("Location: Index1.php");
}
else if(isset($_SESSION['user'])!=""){
	header("Location: home.php");
}

if(isset($_GET['logout'])){
	session_destroy();
	unset($_SESSION['user']);
	header("Location: Index1.php");
}
?>