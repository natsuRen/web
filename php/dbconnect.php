<!-- Dbconnect.php  包含本地主机连接，数据库选择的代码。 -->

<!-- 不可动 -->

<?php
$con=mysqli_connect("localhost","root","","resume");
if (mysqli_connect_errno($con)) { 
	echo "连接 MySQL 失败: " . mysqli_connect_error(); 
} 
?>