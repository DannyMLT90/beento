<?php
// Set database credentials
$host = "localhost";
$username = "root";
$password = "Change@1990!";
$dbname = "beento_backend";

// Create connection
$conn = mysqli_connect($host, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Delete record if delete button is clicked
if (isset($_GET['delete_id'])) {
    $id = $_GET['delete_id'];
    $sql = "DELETE FROM `Flight Records` WHERE `ID` = '$id'";
    mysqli_query($conn, $sql);
}

// Retrieve data from table
$sql = "SELECT * FROM `Flight Records`";
$result = mysqli_query($conn, $sql);
?>

<!DOCTYPE html>
<html>
<head>
    <title> Edit Flight Records</title>
    <link rel="stylesheet" type="text/css" href="backend.css">
</head>
<body>
    <table>
        <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Continent F</th>
            <th>Country F</th>
            <th>City F</th>
            <th>Continent T</th>
            <th>Country T</th>
            <th>City T</th>
            <th>Airline</th>
            <th>Distance KM</th>
            <th>Duration</th>
            <th>Action</th>
        </tr>
        <?php while ($row = mysqli_fetch_assoc($result)) { ?>
            <tr>
                <td><?php echo $row["ID"]; ?></td>
                <td><?php echo $row["Date"]; ?></td>
                <td><?php echo $row["Continent_F"]; ?></td>
                <td><?php echo $row["Country_F"]; ?></td>
                <td><?php echo $row["City_F"]; ?></td>
                <td><?php echo $row["Continent_T"]; ?></td>
                <td><?php echo $row["Country_T"]; ?></td>
                <td><?php echo $row["City_T"]; ?></td>
                <td><?php echo $row["Airline"]; ?></td>
                <td><?php echo $row["Distance KM"]; ?></td>
                <td><?php echo $row["Duration"]; ?></td>
                <td>
                    <button class="delete-button" data-id="<?php echo $row["ID"]; ?>">Delete</button>
                </td>
            </tr>
        <?php } ?>
    </table>

    <script src="backend.js"></script>
</body>
</html>

