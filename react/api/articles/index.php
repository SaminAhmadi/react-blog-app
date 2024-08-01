<?php
include_once '../../App/Services/ArticleService.php';
include_once '../../App/Services/PublicService.php';
include_once '../../App/Utilities/Response.php';

$articleService = new ArticleService();
$request_method = $_SERVER['REQUEST_METHOD'];
$request_body = json_decode(file_get_contents('php://input'), true);

//handlde GET method
if ($request_method == 'GET') {
    $id = $_GET['id'] ?? null;
    $order = $_GET['order'] ?? null;
    $column = $_GET['column'] ?? null;
    $search = $_GET['search'] ?? null;
    $page = $_GET['page'] ?? null;
    $limit = $_GET['limit'] ?? null;
    $count = $_GET['count'] ?? null;
    $request_data = [
        'id' => $id,
        'order' => $order,
        'column' => $column,
        'search' => $search,
        'page' => $page,
        'limit' => $limit,
        'count' => $count,
    ];
    if(!is_null($id)){
        $response = $articleService->getArticles($request_data);
        echo Response::respond($response, 200, 'OK');
    }
    elseif(!is_null($order)){
        if(!is_null($column)){
            $response = $articleService->getArticlesOrderBy($request_data);
            echo Response::respond($response, 200, 'OK');
        }
    }
    elseif(!is_null($search)){
        if(!is_null($column)){
            $response = $articleService->getArticlesSearchBy($request_data);
            echo Response::respond($response, 200, 'OK');
        }
    }
    elseif(!is_null($page)){
        if(!is_null($limit)){
            $response = $articleService->getPaginatedArticles($request_data);
            echo Response::respond($response, 200, 'OK');
        }
    }elseif(!is_null($count)){
        echo Response::respond(PublicService::getCount('articles'),200,'ok');
    }
    else{
        if(empty($_GET)){
            $response = $articleService->getArticles($request_data);
            echo Response::respond($response, 200, 'OK');
        }else{
            echo Response::respond('invalid query parameter', 404, 'error');
        }
    }
}
elseif ($request_method == 'POST') {
    $response = $articleService->addArticle($request_body);
    Response::respond($response, 201, 'Created');
}
elseif ($request_method == 'PUT') {
    $article_id = $_GET['id'];
    $response = $articleService->editArticle($article_id, $request_body);
    Response::respond($response, 200, 'OK');
}
elseif ($request_method == 'DELETE') {
    $article_id = $_GET['id'];
    $response = $articleService->deleteArticle($article_id);
    Response::respond($response, 200, 'OK');
}
else {
    Response::respond(['Invalid request Method'], 405, 'Method Not Allowed');
}

