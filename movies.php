<?php
    include('inc/header.php');
    include('inc/return.php');
    $user = $_GET["username"];

?>


<div class="display-name">
    <?php
        echo "<h1 class=\"heading\" >username: <span id=\"username\">$user</span></h1>";
        echo "<h2 id=\"info\">Save movies to watch later</h2>";
        echo "<div class=\"data\"> </div>";
    ?>
</div>