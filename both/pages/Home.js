/**
 * Created by tylermckee on 2/27/16.
 */
Router.route('/', function () {
    this.render('Home', {
        data: function () { return Body.findOne({_id: this.params._id}); }
    });
});

function route(){
    Router.route('/Prompt2');
}

Avatar.setOptions({
  fallbackType: "initials"
});

Avatar.setOptions({
	defaultImageUrl: "http://example.com/default-avatar.png"
});