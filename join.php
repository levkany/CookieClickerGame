<?php
	/*
		The registration page for the game service
	*/

	require('includes/db_connection_inc.php');
	// echo db_insert_user('levkany123554', 'gamer123');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Cookie Clicker</title>

    <!-- Collection of links to various resources -->
    <link rel="shortcut icon" type="image/png" href="resources/content/favicon.png"/>
    <link rel="stylesheet" type="text/css" href="resources/css/main.css"/>

    <!-- Collection of scripts -->
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script defer src="scripts/main.js"></script>
</head>
<body>
    <!-- The wrapper for the whole page -->
    <div id="wrapper">
    	<div id="content">
    		<div class="inline-wrapper">
    		<picture>
    			<source srcset="resources/content/title-280w.png" media="(max-width: 600px)" />
    			<source srcset="resources/content/title-380w.png" media="(max-width: 800px)" />
    			<source srcset="resources/content/title-480w.png" media="(min-width: 801px)" />
    			<img srcset="resources/content/title-280w.png">
    		</picture>
    		</div>
	    	<div class="inline-wrapper">
	    		<h1>Join the cookie slayers!</h1><br/>
	    		<form>
		    		<label for="username">
		    			<p>Username</p><br/>
		    			<input type="text" id="username" name="username" placeholder="CookieSlayer2000.."/>
		    		</label>
		    		<br/>
		    		<label for="password">
		    			<p>Password</p><br/>
		    			<input type="password" id="password" name="password" placeholder="Password.."/>
		    		</label>
		    		<br/>
					<label for="password-confirm">
		    			<p>Confirm Password</p><br/>
		    			<input type="password" id="password-confirm" name="password" placeholder="Confirm password.."/>
		    		</label>
		    		<br/>
		    		<label for="register">
		    			<p>Join the cookie warriors now!</p><br/>
		    			<button id="register" style="width: 100%;">Register</button>
		    		</label>
	    		</form>
	    	</div>
    	</div>
    </div>

    <!-- Styling for this singular page -->
    <style type="text/css">
    	body, html, #wrapper{
    		width: 100%;
    		height: 100%;
    	}
    	#content{
    		display: block;
    		margin-top: auto;
    	}
    	picture{
    		margin-top: 30vh;
    	}

    	form,h1{
    		margin-top: 32px;
    	}
    	form{
    		text-align: left;
    	}
    	.inline-wrapper{
    		text-align: center;
    	}
    	h1{
    		flex-basis: 100%;
    	}
    </style>
</body>
</html>
