<?php
    include('inc/headermovies.php');
    include('inc/return.php');
    $user = $_GET["username"];
    $movie = $_GET["movie"];

    $servername = "localhost";
    $username = "dev02dbuser";
    $password = "FMweb2018";
    $dbname = "dev02db";
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    $sql = "INSERT INTO movie_db (username,movie_title) VALUES ('$user','$movie')"; 

    if ($conn->query($sql) === TRUE){
        echo "<h1 id=\"info\">Movie saved successufully!</h1>";
    } else{
        echo "<h1 id=\"info\">Error saving movie!</h1>";
    }

    $conn->close();
?>
<div class="display-name">
    <?php
        echo "<h1 class=\"heading\" >username: <span id=\"username\">$user</span></h1>";
        echo "<span id=\"movieId\">$movie</span>";
        echo "<div class=\"data-one\"> </div>";
    ?>
</div>
