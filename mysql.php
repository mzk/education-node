<?php

require __DIR__ . '/config.php';

$con = mysqli_connect($config['host'], $config['user'], $config['password'], $config['database']);

$query = "
  SELECT id, name, url, description, date 
  FROM blog 
  WHERE public = 1 
  ORDER BY id DESC 
  LIMIT 20";
$rows = mysqli_query($con, $query);

require __DIR__ . '/views/index.php';
