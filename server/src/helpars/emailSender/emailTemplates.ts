export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Verify Your Email</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>Thank you for signing up! Your verification code is:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #4CAF50;">{verificationCode}</span>
    </div>
    <p>Enter this code on the verification page to complete your registration.</p>
    <p>This code will expire in 15 minutes for security reasons.</p>
    <p>If you didn't create an account with us, please ignore this email.</p>
    <p>Best regards,<br>JudySeide Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>Your JudySeide Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
    </div>
    <p>This link will expire in 15 minutes for security reasons.</p>
    <p>Best regards,<br>Your Ruebzj Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome Aboard</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Welcome to Our Community</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hi {name},</p>
    <p>We're thrilled to have you on board! 🎉</p>
    <p>Thanks for verifying your email and joining us. You’re now officially part of our awesome community.</p>
    <p>Feel free to explore, engage, and make the most of what we have to offer.</p>
    <p>If you ever have any questions, our team is here to help.</p>
    <p>Once again, welcome aboard!</p>
    <p>Best regards,<br>The JudySeide Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const CONTACT_FORM_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #2196F3, #0b7dda); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">New Contact Message</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> <a href="mailto:{email}">{email}</a></p>
    <p><strong>Subject:</strong> {subject}</p>
    <p><strong>Phone:</strong> {phone}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-line;">{message}</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This message was sent via the contact form on your website.</p>
  </div>
</body>
</html>
`;

export const PARTNER_CONTACT_FORM_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>New Partner Contact Submission</title>
  <style type="text/css">
    /* Base styles */
    body, html {
      margin: 0;
      padding: 0;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      line-height: 1.5;
      color: #333333;
      background-color: #f5f5f5;
    }
    
    /* Email container */
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }
    
    /* Header */
    .email-header {
      background: linear-gradient(135deg, #2196F3 0%, #0b7dda 100%);
      padding: 30px 20px;
      text-align: center;
      color: #ffffff;
    }
    
    .email-header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 500;
      line-height: 1.3;
    }
    
    /* Content */
    .email-content {
      padding: 30px;
    }
    
    .field {
      margin-bottom: 15px;
    }
    
    .field-label {
      font-weight: 600;
      color: #555555;
      display: block;
      margin-bottom: 5px;
    }
    
    .field-value {
      color: #333333;
      line-height: 1.6;
    }
    
    .message-content {
      background-color: #f9f9f9;
      border-left: 3px solid #2196F3;
      padding: 15px;
      margin-top: 10px;
      white-space: pre-line;
    }
    
    /* Footer */
    .email-footer {
      text-align: center;
      padding: 20px;
      color: #999999;
      font-size: 12px;
      line-height: 1.5;
      border-top: 1px solid #eeeeee;
    }
    
    /* Responsive adjustments */
    @media screen and (max-width: 480px) {
      .email-header {
        padding: 20px 15px;
      }
      
      .email-header h1 {
        font-size: 20px;
      }
      
      .email-content {
        padding: 20px 15px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1>New Partner Contact Submission</h1>
    </div>
    
    <div class="email-content">
      <div class="field">
        <span class="field-label">Name:</span>
        <span class="field-value">{name}</span>
      </div>
      
      <div class="field">
        <span class="field-label">Email:</span>
        <span class="field-value"><a href="mailto:{email}" style="color: #2196F3; text-decoration: none;">{email}</a></span>
      </div>
      
      <div class="field">
        <span class="field-label">Subject:</span>
        <span class="field-value">{subject}</span>
      </div>
      
      <div class="field">
        <span class="field-label">Message:</span>
        <div class="message-content">{message}</div>
      </div>
    </div>
    
    <div class="email-footer">
      <p>This message was sent via the partner contact form on your website.</p>
      <p>Please do not reply directly to this automated message.</p>
    </div>
  </div>
</body>
</html>
`;
