/**
 * Created by tylermckee on 2/27/16.
 */
Router.route('/', function () {
    this.render('Home', {
        data: function () { return Items.findOne({_id: this.params._id}); }
    });
});

function route(){
    Router.route('/Prompt2');
}

