<?php

  $email = $_POST['email_address'];
  $database = new SQLite3('matchx.sqlite');

  $sql = 'CREATE TABLE IF NOT EXISTS notifications( id INTEGER PRIMARY KEY,email varchar(30))';

  $database->exec($sql);

  	if(isset($email)){
  		$email;
  		$database->exec("INSERT INTO notifications (email)  VALUES ('$email')");

      echo'
  		<script>
            window.onload = function() {
            alert("You would be notifies once we launch, Thank You.");
            location.href = "index.html";
            }
          </script>
            ';
  	}else{
      echo'
      <script>
            window.onload = function() {
            alert("An error occured");
            location.href = "index.html";
            }
          </script>
            ';
    }

    // header("Content-type: application/json; charset=utf-8"); //inform the browser we're sending JSON data
    // echo json_encode($data); //echoing JSON encoded data as the response for the AJAX call


?>
