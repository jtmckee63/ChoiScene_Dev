/*global FlowRouter, FlowLayout */

// Flow Router handles rendering out our page views (Blaze templates)
// these views can then call the router API to get reactive updates on
// state in the URL. This can then be passed down into children if needed

// If you're looking at using an all React front end (no Blaze) then using
// react-router (via browserfy) would prob. be better unless you just need
// an even more simple router!

FlowLayout.setRoot('body');

FlowRouter.route('/',      { name: 'Home',  action: renderView });
FlowRouter.route('/choiScene', { name: 'ChoiScene', action: renderView });
FlowRouter.route('/feed',  { name: 'Feed',  action: renderView });
FlowRouter.route('/prompt1',  { name: 'Prompt1',  action: renderView });
FlowRouter.route('/prompt2',  { name: 'Prompt2',  action: renderView });
FlowRouter.route('/drinkPrompt',  { name: 'DrinkPrompt',  action: renderView });
FlowRouter.route('/eatPrompt',  { name: 'EatPrompt',  action: renderView });
FlowRouter.route('/activityPrompt',  { name: 'ActivityPrompt',  action: renderView });
FlowRouter.route('/datePrompt',  { name: 'DatePrompt',  action: renderView });
FlowRouter.route('/loungePrompt',  { name: 'LoungePrompt',  action: renderView });
// helper to layout the parent page view and log debug data
function renderView() {
  renderMainLayoutWith(this.name);
  console.log("[FlowRouter] params", this.name, FlowRouter._current.params);
}

function renderMainLayoutWith(view) {
  FlowLayout.render('mainLayout', {
    top: "Header",
    main: view,
    bottom: "Footer"
  });
}

