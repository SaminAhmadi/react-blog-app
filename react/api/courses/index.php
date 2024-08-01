<?php
include_once '../../App/Services/CoursesService.php';
include_once '../../App/Services/PublicService.php';
include_once '../../App/Utilities/Response.php';

$courseService = new CourseService();
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
    $state = $_GET['state'] ?? null;
    $category = $_GET['category'] ?? null;
    $request_data = [
        'id' => $id,
        'order' => $order,
        'column' => $column,
        'search' => $search,
        'page' => $page,
        'limit' => $limit,
        'count' => $count,
        'state' => $state,
        'category' => $category,
    ];

    if (!is_null($id)) {
        $response = $courseService->getCourses($request_data);
        echo Response::respond($response, 200, 'OK');
    }
    elseif (!is_null($order)) {
        if (!is_null($column)) {
            $response = $courseService->getCoursesOrderBy($request_data);
            echo Response::respond($response, 200, 'OK');
        }
    }
    elseif (!is_null($search)) {
        if (!is_null($column)) {
            $response = $courseService->getCoursesSearchBy($request_data);
            echo Response::respond($response, 200, 'OK');
        }
    }
    elseif (!is_null($page)) {
        if (!is_null($limit)) {
            $response = $courseService->getPaginatedCourses($request_data);
            echo Response::respond($response, 200, 'OK');
        }
    }
    elseif (!is_null($count)) {
        echo Response::respond(PublicService::getCount('courses'), 200, 'ok');
    }
    elseif (!is_null($state)) {
        $response = $courseService->getCoursesStateBy($request_data);
        echo Response::respond($response, 200, 'OK');
    }
    elseif (!is_null($category)) {
        $response = $courseService->getCoursesCategoryBy($request_data);
        echo Response::respond($response, 200, 'OK');
    }
    else {
        if (empty($_GET)) {
            $response = $courseService->getCourses($request_data);
            echo Response::respond($response, 200, 'OK');
        } else {
            echo Response::respond('invalid query parameter', 404, 'error');
        }
    }
}
elseif ($request_method == 'POST') {
    $response = $courseService->addCourse($request_body);
    Response::respond($response, 201, 'Created');
}
elseif ($request_method == 'PUT') {
    $article_id = $_GET['id'];
    $response = $courseService->editCourse($article_id, $request_body);
    Response::respond($response, 200, 'OK');
}
elseif ($request_method == 'DELETE') {
    $article_id = $_GET['id'];
    $response = $courseService->deleteCourse($article_id);
    Response::respond($response, 200, 'OK');
}
else {
    Response::respond(['Invalid request Method'], 405, 'Method Not Allowed');
}
