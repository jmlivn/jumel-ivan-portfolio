<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Email settings
    $to = "jumelivan2@gmail.com"; // The email where the message will be sent
    $subject = "Message from: " . $name . " - " . $subject;
    $body = "You have received a new message:\n\nName: " . $name . "\nEmail: " . $email . "\n\nMessage: " . $message;

    // Additional headers (optional)
    $headers = "From: " . $email;

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Your message has been sent successfully!'); window.location.href = 'thank_you.html';</script>";
    } else {
        echo "<script>alert('There was an error sending your message. Please try again later.'); window.history.back();</script>";
    }
}
?>
