/** @jsx React.DOM */
(function($){

	Home = React.createClass({displayName: 'Home',
		render : function() {
			return (
				<div className={'home'}>
					<h2 className={'home-header'}>
						What I do
					</h2>
					<p className={'home-content'}>
						I type code to send to my CPU to accomplish tasks - a programmer.
						I&#8217;m good with java, javascript, html, css, jquery, nodejs,
						apache, mysql, mongodb, angularjs, reactjs.
						I&#8217;ve worked with the LAMP and MEAN stack and have an affinity
						with android development and web development.
					</p>
				</div>
			);
		}
	});
}(jQuery));
