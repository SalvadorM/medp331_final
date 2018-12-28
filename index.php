<?php
    include('inc/header.php');
    include('inc/info.php');
?>
       <div class="form-box">
        <form action="./movies.php?">
            <table>
                <tr>
                    <th><label for="fname">Enter secret username</label></th>
                    <th><input type="text" id="username" name="username"></th>
                </tr>
            </table>

            <?php 
                $firstName = $_POST['username'];
            ?>
            <input type="submit"/>
         </form>
       </div>
    </div>
</body>
</html>