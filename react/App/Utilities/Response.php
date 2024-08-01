<?php

class Response
{
    public static function respond($data, $status_code, $status_message)
    {
        // set http headers
        self::setHeaders();
        // prepare response data
        $response = [
            'status' => $status_code,
            'message' => $status_message,
            'data' => $data
        ];
        //convert response to json
        return json_encode($response);
    }

    public static function setHeaders()
    {
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json; charset=UTF-8');
        header('Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE');
        header('Access-Control-Max-Age: 3600');
        header('Access-Type: application/json; charset=UTF-8');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers');
    }
}
