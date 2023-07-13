<?php


if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "support@paytoplay.ee";
  $subject = "Сообщение с формы обратной связи";
  $headers = 'MIME-Version: 1.0' . "\r\n";
  $headers .= "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-type: text/html; charset=UTF-8\r\n";

  $json_data = file_get_contents('php://input');
  $assoc_array = json_decode($json_data, true);
  $assoc_array;

  $dataString = "<html>";
  $dataString .= "<h4>Сообщение с формы обратной связи:</h4>";
  $dataString .= "<div style='padding-left:15px'>";
  // $dataString .=  "<p>Пользователь: " . $assoc_array['name'] . ";</p> ";
  $dataString .=  "<p>Данные обратной связи: " . $assoc_array['email'] . ";</p> ";
  $dataString .=  "<p>Сообщение: " . $assoc_array['text'] . ";</p> ";
  $dataString .= "</div>";
  $dataString .= "</html>";
  $dataString = rtrim($dataString, ", ");


  mail($to, $subject, $dataString, $headers);
  print $email;
}

?>
 