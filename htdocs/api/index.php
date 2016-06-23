<?php

$words = json_decode(file_get_contents(__DIR__ . '/../../src/english-words.json'));

$filter = isset($_GET['q']) ? $_GET['q'] : null;

header('Content-Type: application/json');
echo json_encode(
    array_slice(
        array_filter(
            $words,
            function ($word) use ($filter) {
                if ($filter === null) {
                    return true;
                }

                return (strpos($word, $filter) !== false);
            }
        ),
        0,
        50
    )
);

