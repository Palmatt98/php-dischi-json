<?php
//risolve il problema di cors policy, non mi fa fare la chiamata api
header("Access-Control-Allow-Origin: *");

$dischi_string = file_get_contents("dischi.json"); // string
//trasforma la stringa in un array associativo
$dischi = json_decode($dischi_string, true);

if(isset($_POST["discoIndex"])){

	$discoIndex = $_POST["discoIndex"];

	if(isset($_POST["action"]) && $_POST["action"] == "like") {
		$dischi[$discoIndex]["like"] = true;
		file_put_contents("dischi.json", json_encode($dischi));
	} else if(isset($_POST["action"]) && $_POST["action"] == "dislike") {
		$dischi[$discoIndex]["like"] = false; 
		file_put_contents("dischi.json", json_encode($dischi));
	} 

}

//compongo i dati della risposta
$response = [
	"result" => $dischi,
	"success" => true
];

//é possibile inviare dati al client solo in formato JSON
$response_json = json_encode($response);

// Informo il browser che gli arriverà json
header("Content-Type: application/json");

// Invio la risposta
echo $response_json;
