<?php
require_once('../../php/Location.php');
header("Content-type: application/json");

$locations = Location::all();

$locationsJSON = [];

foreach ($locations as $location) {
    $locationsJSON[] = [
        "latitude" => floatval($location->latitude),
        "longitude" => floatval($location->longitude),
        "name" => $location->name
    ];
}

echo json_encode($locationsJSON);