<?php

include_once '../../App/db_config.php';
$GLOBALS['conn'] = connectToDb('localhost', 'root', '', 'testdb');

class ArticleService
{
    public function getArticles($data = null){
        $articles = array();
        global $conn;
        $article_id = $data['id'] ?? null;
        $where = '';
        if(!is_null($article_id)){
            $where = "where id = {$article_id}";
        }
        $query = "SELECT * from articles $where";
        $result = mysqli_query($conn, $query);
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $articles[] = $row;
            }
        }
        return $articles;
    }

    public function getArticlesOrderBy($data){
        $articles = array();
        global $conn;
        $order = $data['order'];
        $column = $data['column'];
        $query = "SELECT * FROM `articles` ORDER BY $column $order;";
        $result = mysqli_query($conn, $query);
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $articles[] = $row;
            }
        }
        return $articles;
    }

    public function getArticlesSearchBy($data){
        $articles = array();
        global $conn;
        $search_key = $data['search'];
        $column = $data['column'];
        $query = "SELECT * FROM `articles` WHERE $column LIKE '%$search_key%';";
        $result = mysqli_query($conn, $query);
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $articles[] = $row;
            }
        }
        return $articles;
    }

    public function getPaginatedArticles($data){
        $articles = array();
        global $conn;
        $page = $data['page'];
        $limit = $data['limit'];
        $offset = ($page * $limit) - $limit;
        $query = "SELECT * FROM `articles` LIMIT $limit OFFSET $offset;";
        $result = mysqli_query($conn, $query);
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $articles[] = $row;
            }
        }
        return $articles;
    }

    public function addArticle($data){
        global $conn;
        [$image , $title , $description , $writter , $category , $readingTime] =
        [$data['image'] , $data['title'] ,$data['description'],$data['writter'],$data['category'],$data['readingTime']];
        $query = "INSERT INTO articles (`image`, `title`, `description`, `writter`, `category`, `readingTime`) VALUES ('$image', '$title', '$description', '$writter', '$category', '$readingTime');";
        $result = mysqli_query($conn, $query);
        return $result;
    }

    public function editArticle($article_id , $data){
        global $conn;
        [$image , $title , $description , $writter , $category , $readingTime] =
        [$data['image'] , $data['title'] ,$data['description'],$data['writter'],$data['category'],$data['readingTime']];
        $query = "UPDATE `articles` SET `image` = '$image', `title` = '$title', `description` = '$description', `writter` = '$writter', `category` = '$category', `readingTime` = '$readingTime' WHERE id = $article_id;";
        $result = mysqli_query($conn, $query);
        return $result;
    }

    public function deleteArticle($article_id){
        global $conn;
        $query = "DELETE from `articles` WHERE `id` = $article_id;";
        $result = mysqli_query($conn, $query);
        return $result;
    }
}
