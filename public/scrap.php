<?php

$execute = false;
$lock_file = '../storage/scrap_lock.txt';
$log_file = '../storage/scrap_log.txt';

// Decide if the scrap process can be launched
if (file_exists($lock_file)) {

    $now = time();
    $last_modified = filemtime($lock_file);

    // After 12 hours, it is assumed that the process finished abnormally, so it can start again.
    if ($now > $last_modified + 60 * 60 * 12) {
        $execute = true;
    }

} else {
    $execute = true;
}

if ($execute) {

    file_put_contents($lock_file, 'Lock file. Remove to unlock the site scrapping.');

    // Do the job
    exec("nohup /usr/bin/php /dades/html/artisan scrap:run > $log_file 2>&1 &");

    echo 'Execution running in background.';

} else {
    echo 'Execution already running';
}
