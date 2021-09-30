<?php

// connexion BDD
// require ('bdd.php'):
// requete SQL...

$result = [
    [
    "name" => "Christophe",
    "age" => 22
    ],
    [
    "name" => "Myriam",
    "age" => 25
    ]
];

echo json_encode($result);

?>