(function($) {
	var App = React.createClass({displayName: 'App',
		getInitialState: function() {
			return {
				section: 0
			};
		},
		updateViewport: function(w,h) {
			this.state.win = {
  			width: w,
  			height: h
	  	};
    	this.setState(this.state);
		},
		onSectionClick: function(section) {
			$(window).scrollTop(0);
			this.state.section = section;
			this.setState(this.state);
		},
	  componentDidMount: function() {
	  	var win = $(window);
    	var that = this;
    	that.updateViewport(win.width(),win.height());
	  	win.on('resize', function(){
	  		that.updateViewport(win.width(),win.height());
	  	});
    },
    componentWillUnmount: function() {
    	$(window).off('resize');
    },
		render : function() {
			var section = this.state.section;
			if (this.state.section === 2 || this.state.section === 3) {
				return (
						<div>
							<Header section={section} onSectionClick={this.onSectionClick}/>
							<Content section={section} className={'content'}/>
						</div>
					);
			} else {
				return (
						<div>
							<Header section={section} onSectionClick={this.onSectionClick}/>
							<Content section={section} className={'content'}/>
							<Footer/>
						</div>
					);
			}
		}
	});


	React.renderComponent(
	  <App/>,
	  document.getElementById('app')
	);
}(jQuery));
