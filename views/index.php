<?php include(__DIR__ . '/header.php'); ?>

<?php
foreach ($rows as $row) { ?>
    <div>
        <h3><a href="/clanek/<?php echo $row['url']; ?>"><?php echo $row['name']; ?></a></h3>
        <p><?php echo $row['description']; ?></p>
    </div>
    <?php
}
?>

<?php include(__DIR__ . '/footer.php'); ?>
