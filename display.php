<?php
    include('inc/headermovies.php');
    include('inc/return.php');

?>
<div class="display-name">
    <?php
        $user = $_GET["username"];

        $servername = "localhost";
        $username = "dev02dbuser";
        $password = "FMweb2018";
        $dbname = "dev02db";
        
        echo "<h1 class=\"heading\" >username: <span id=\"username\">$user</span></h1>";
        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
    
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } 
    
        $sql = "SELECT DISTINCT movie_title FROM movie_db where username = '$user'";
    
    
        if ($result = $conn->query($sql)) {
            while($row = $result->fetch_assoc()) {
                echo "<h1 class=\"movie-title-one\">" . $row["movie_title"]."</h1>"; 
            }                                                                           
        } else {
            echo "0 results";
        }
    
        $conn->close();
        echo "<div class=\"data-one\"> </div>";
    ?>
</div>
<?php
    
?>

