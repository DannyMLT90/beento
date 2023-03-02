<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');

    $servername = "localhost";
    $username = "root";
    $password = "Change@1990!";
    $dbname = "beento_backend";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $date = mysqli_real_escape_string($conn, $_POST['Date']);
        $Country_F = mysqli_real_escape_string($conn, $_POST['Country_F']);
        $City_F = mysqli_real_escape_string($conn, $_POST['City_F']);
        $Country_T = mysqli_real_escape_string($conn, $_POST['Country_T']);
        $City_T = mysqli_real_escape_string($conn, $_POST['City_T']);
        $type = mysqli_real_escape_string($conn, $_POST['type']);
        $airline = mysqli_real_escape_string($conn, $_POST['airline']);

        $sql = "INSERT INTO `Flight Records` (`Date`, `Country_F`, `City_F`, `Country_T`, `City_T`, `Airline`) VALUES (?, ?, ?, ?, ?, ?)";

        if($stmt = $conn->prepare($sql)) {
            $stmt->bind_param("ssssss", $date, $Country_F, $City_F, $Country_T, $City_T, $airline);
            $stmt->execute();
            header("Location: input.html");
        exit;
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

        $stmt->close();
        $conn->close();
    }

    // Redirect back to add_flight.html and clear form fields
    echo '<script>alert("New record created successfully"); window.location.href = "input.html"; document.getElementById("add-flight-form").reset();</script>';

?>

<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
    Date: <input type="text" name="Date"><br>
    Country_F: <input type="text" name="Country_F"><br>
    City_F: <input type="text" name="City_F"><br>
    Country_T: <input type="text" name="Country_T"><br>
    City_T: <input type="text" name="City_T"><br>
    Type: <input type="text" name="Type"><br>
    Airline: <input type="text" name="Airline"><br>
    <input type="submit">
</form>

</body>
</html>