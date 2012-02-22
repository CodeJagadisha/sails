var Content = Row.extend({
	
	initialize: function(params) {
		
		// Cast fields that must be integers
		if (params.id) {
			params.id = +params.id;
			this.id = params.id;
		}
		
		this.attributes = _.extend(this.attributes,params);
		
		// Map of which fields are busy
		this.busy={};
	},


	defaults: {
		type: 'html',
		title: 'new node'
	},


	rules: {}
})