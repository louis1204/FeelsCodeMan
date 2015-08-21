(function($){

	Content = React.createClass({displayName: 'Content',
		render : function() {
			var sectionClass = 'header content-' + this.props.section;
			var self = this;
			switch (this.props.section) {
				case 0:
					return(<Home/>);
				case 1:
					return (<Code/>);
				case 2:
					return(<Photos pollInterval={3000}/>);
				case 3:
					return(<Doodles pollInterval={3000}/>);
				default:
					return(<div></div>);
			}
		}
	});
}(jQuery));
