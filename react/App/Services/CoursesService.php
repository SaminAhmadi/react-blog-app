<?php

include_once '../../App/db_config.php';
$GLOBALS['conn'] = connectToDb('localhost', 'root', '', 'testdb');

class CourseService
{
    public function getCourses($data = null){
        $courses = array();
        global $conn;
        $course_id = $data['id'] ?? null;
        $where = '';
        if(!is_null($course_id)){
            $where = "where id = {$course_id}";
        }
        $query = "SELECT * from courses $where";
        $result = mysqli_query($conn, $query);
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $courses[] = $row;
            }
        }
        return $courses;
    }

    public function getCoursesOrderBy($data){
        $courses = array();
        global $conn;
        $order = $data['order'];
        $column = $data['column'];
        $query = "SELECT * FROM `courses` ORDER BY $column $order;";
        $result = mysqli_query($conn, $query);
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $courses[] = $row;
            }
        }
        return $courses;
    }

    public function getCoursesSearchBy($data){
        $courses = array();
        global $conn;
        $search_key = $data['search'];
        $column = $data['column'];
        $query = "SELECT * FROM `courses` WHERE $column LIKE '%$search_key%';";
        $result = mysqli_query($conn, $query);
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $courses[] = $row;
            }
        }
        return $courses;
    }
    public function getCoursesStateBy($data){
        $courses = array();
        global $conn;
        $state = $data['state'];
        $query = "SELECT * FROM `courses` WHERE state = '$state';";
        $result = mysqli_query($conn, $query);
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $courses[] = $row;
            }
        }
        return $courses;
    }
    public function getCoursesCategoryBy($data){
        $courses = array();
        global $conn;
        $category = $data['category'];
        $query = "SELECT * FROM `courses` WHERE category = '$category';";
        $result = mysqli_query($conn, $query);
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $courses[] = $row;
            }
        }
        return $courses;
    }

    public function getPaginatedCourses($data){
        $courses = array();
        global $conn;
        $page = $data['page'];
        $limit = $data['limit'];
        $offset = ($page * $limit) - $limit;
        $query = "SELECT * FROM `courses` LIMIT $limit OFFSET $offset;";
        $result = mysqli_query($conn, $query);
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $courses[] = $row;
            }
        }
        return $courses;
    }

    public function addCourse($data){
        global $conn;
        [$image , $title , $description , $teacher , $category , $duration , $state , $studentCount , $progressPercent , $mainPrice , $discountPrice] =
        [$data['image'] , $data['title'] ,$data['description'],$data['teacher'],$data['category'],$data['duration'],$data['state'],$data['studentCount'],$data['progressPercent'],$data['mainPrice'],$data['discountPrice']];
        $query = "INSERT INTO articles (`image`, `title`, `description`, `teacher`, `category`, `duration`, `state`, `studentCount`, `progressPercent`, `mainPrice`, `discountPrice`) VALUES ('$image', '$title', '$description', '$teacher', '$category', '$duration', '$state', '$studentCount', '$progressPercent', '$mainPrice', '$discountPrice');";
        $result = mysqli_query($conn, $query);
        return $result;
    }

    public function editCourse($course_id , $data){
        global $conn;
        [$image , $title , $description , $teacher , $category , $duration , $state , $studentCount , $progressPercent , $mainPrice , $discountPrice] =
        [$data['image'] , $data['title'] ,$data['description'],$data['teacher'],$data['category'],$data['duration'],$data['state'],$data['studentCount'],$data['progressPercent'],$data['mainPrice'],$data['discountPrice']];
        $query = "UPDATE `courses` SET `image` = '$image', `title` = '$title', `description` = '$description', `teacher` = '$teacher', `category` = '$category', `duration` = '$duration', `state` = '$state', `studentCount` = '$studentCount', `progressPercent` = '$progressPercent' , `mainPrice` = '$mainPrice', `discountPrice` = '$discountPrice' WHERE id = $course_id;";
        $result = mysqli_query($conn, $query);
        return $result;
    }

    public function deleteCourse($course_id){
        global $conn;
        $query = "DELETE from `courses` WHERE `id` = $course_id;";
        $result = mysqli_query($conn, $query);
        return $result;
    }
}
