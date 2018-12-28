<?php 
    $user = $_GET["username"]; 

    if (basename($_SERVER['PHP_SELF']) == 'movies.php'){
        echo "<a href=\"./\" class=\"btn\" >use another secret user!</a>";
        echo "<a href=\"display.php?username=".$user."\" class=\"btn\">Movies to watch!</a>";
    } elseif (basename($_SERVER['PHP_SELF']) == 'movie.php') {
        echo "<a href=\"movies.php?username=".$user."\" class=\"btn\">save another movie!</a>";
    } elseif (basename($_SERVER['PHP_SELF']) == 'display.php') {
        echo "<a href=\"movies.php?username=".$user."\" class=\"btn\">save another movie!</a>";
    }

?>




