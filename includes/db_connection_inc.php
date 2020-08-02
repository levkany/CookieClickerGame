<?php
	// Script to define database parameters and connect to it.

	define('db_name', 'cookie_clicker');
	define('db_user', 'root');
	define('db_pass', '');
	$db_tables = array(0 => 'users', 1 => 'items');
	$conn = 0;	// will hold the database connection handler

	// add new user to the database
	function db_insert_user(string $username, string $password){
		try{
			$conn = new PDO('mysql:host=localhost;dbname=' . db_name, db_user, db_pass);
			$sqlcheckExists = "select id from users where username=?";
			$stmt = $conn->prepare($sqlcheckExists);
			$stmt->execute([$username]);
			echo $stmt->rowCount() . '<br/>';

			if($stmt->rowCount() == 0){

				$sql = "insert into users (username, password) values(?,?)";
				$stmt = $conn->prepare($sql);
				$stmt->execute([$username, $password]);

				if($conn->lastInsertId()){
					$conn = '{"status": 2, "id": ' . $conn->lastInsertId() . '}';
				}
			}

			// user already exists in the database
			else{
				$conn = '{"status": 4, "id": ' . $conn->lastInsertId() . ', "error": "User already exists in the database"}';
			}
		}
		catch(PDOException $e){
			$conn = $e;
		}
		finally{
			return $conn;
		}
	}
?>