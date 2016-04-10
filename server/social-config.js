ServiceConfiguration.configurations.remove({
    service: 'facebook'
});
 
ServiceConfiguration.configurations.insert({
     service: "facebook",
      appId: "1120789044618439",
      secret: "744c24fe9fc44bc3dc7fe2357a4ff70e"
});


// var getFbPicture = function(accessToken) { // make async call to grab the picture from facebook
//     var result;
//     result = Meteor.http.get("https://graph.facebook.com/me", {
//       params: {
//         access_token: accessToken,
//         fields: 'picture'
//       }
//     });
//     if(result.error) {
//       throw result.error;
//     }
//     return result.data.picture.data.url; // return the picture's url
//   };

// // during new account creation get user picture from Facebook and save it on user object
// Accounts.onCreateUser(function(options, user) {
//   if(options.profile) {
//     options.profile.picture = getFbPicture(user.services.facebook.accessToken);
//     user.profile = options.profile; // We still want the default 'profile' behavior.
//   }
//   return user;
// });

// Accounts.onCreateUser(function(options, user) {
//     if (typeof(user.services.facebook) != "undefined") {
//         user.services.facebook.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
//     }
//     return user;
// });