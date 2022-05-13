<?php
$post_data = json_decode(file_get_contents('php://input'), true); 
$filename_json = "data/".$post_data['filename'].".json"; 
$filedata_json = $post_data['filedata_json'];
file_put_contents($filename_json, $filedata_json);
$filename_csv = "data/".$post_data['filename'].".csv"; 
$filedata_csv = $post_data['filedata_csv'];
file_put_contents($filename_csv, $filedata_csv);
?>