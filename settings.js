// Change the url to the domain of your app
exports.url = 'https://iwa-web-newsletter.herokuapp.com';

exports.senderEmail = "newsletter@irishworldacademy.ie";
exports.senderName = "IWA Newsletter";

// set 'exports.listId = null' to add contact to all contacts, but no specific list
// or a string with the listId to add to a specific list
exports.listId = null;

// set 'exports.templateId = null' to opt out of using a template
// or a string with the templateId to use a template
exports.templateId = "dca7ed2b-60b6-4401-9668-722f11fc1bd8";

// receive an email when a new signup is confirmed
exports.sendNotification = false;
exports.notificationEmail = "admin@example.com";
