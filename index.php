<?php

if(($pos = strpos($_SERVER['REQUEST_URI'], '?')) !== false) {

	// try to extract the url
  $url = trim(substr($_SERVER['REQUEST_URI'], $pos + 1));
  
	// if url is set, include the redirect page
  if(!empty($url)) {  
    include_once 'redirect.php';
    exit;
  }
}

// else show the splash page

include_once 'welcome.php';

?>
