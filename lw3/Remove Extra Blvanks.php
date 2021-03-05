<?php

  header("Content-Type: text/plain");
  
  $string = $_GET['text'];
  $trimmed_str = trim($string);
  $trimmed_str = preg_replace('/\s\s+/', ' ', $trimmed_str);
  echo $trimmed_str;
