(function($) {
	Header = React.createClass({displayName: 'Header',
		getInitialState: function() {
			return {};
		},
		updateViewport: function(w,h) {
			this.state.win = {
				width: w,
				height: h
			};
			this.setState(this.state);
		},
		onClick: function(section) {
			this.props.onSectionClick(section);
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
			// <button type="button" onClick={this.props.onSectionClick.bind(null, 0)}>
			// 	Hello
			// </button>
			// <button type="button" onClick={this.props.onSectionClick.bind(null, 1)}>
			// 	world!
			// </button>
			var sectionClass = 'header section-' + this.props.section;
			var self = this;
			var homeClass = this.props.section === 0 ? 'enabled' : 'disabled';
			var codeClass = this.props.section === 1 ? 'enabled' : 'disabled';
			var photosClass = this.props.section === 2 ? 'enabled' : 'disabled';
			var artClass = this.props.section === 3 ? 'enabled' : 'disabled';
			var hide = this.props.section !== 0 ? 'hide' : '';
			return (
					<div className={sectionClass + ' '}>
						<h1 className={'header-name ' + hide}>
							Hi, I&#8217;m Louis
						</h1>
						<h1 className={'header-title ' + hide}>
							The compiler whisperer
						</h1>
						<div className={'header-social ' + hide}>
							<a className={'social-icon fa fa-linkedin fa-2x'}
									target="_blank"
									href="https://www.linkedin.com/in/louiswong5"></a>
							<a className={'social-icon fa fa-twitter fa-2x'}
									target="_blank"
									href="https://twitter.com/louis1204"></a>
							<a className={'social-icon fa fa-instagram fa-2x'}
									target="_blank"
									href="https://instagram.com/louis1204/"></a>
							<a className={'social-icon fa fa-facebook-square fa-2x'}
									target="_blank"
									href="https://www.facebook.com/bidoofslaya"></a>
							<a className={'social-icon fa fa-envelope-o fa-2x'}
									target="_blank"
									href="mailto:louis1204@gmail.com"></a>
						</div>
						<h2 className={'header-links'}>
							<a className={homeClass}
									onClick={this.props.onSectionClick.bind(null, 0)}>
								Home
							</a> |
							<a className={codeClass}
									onClick={this.props.onSectionClick.bind(null, 1)}>
								Code
							</a>
						</h2>
					</div>
				);
		}
	});
}(jQuery));
