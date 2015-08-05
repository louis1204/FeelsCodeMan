/** @jsx React.DOM */
(function($){

	var Divider = React.createClass({displayName: 'Code',
		render : function() {
			return (
				<div className={'divider-container'}>
					<div className={'divider'} />
				</div>
			);
		}
	});

	Code = React.createClass({displayName: 'Code',
		render : function() {
			return (
				<div className={'code'}>
					<h2 className={'code-header'}>
						Here are some samples of my work
					</h2>
					<Divider/>
					<div className={'center-div'}>
						<h2 className={'code-content-header'}>
							<a target="_blank"
									href=
										"https://play.google.com/store/apps/details?id=com.louis.minesweeper">
								MineSweeper <i className="share-icon fa fa-external-link"/>
							</a>
						</h2>
					</div>
					<div className={'code-content'}>
						<p>
							Classic mine sweeper game with a minimalistic redesign. Developed on
							native android. Used TableLayout to draw the grid, Button for tiles,
							and sqlite to retain game data.
						</p>
						<img className={'media'} src="../img/minesweeper.jpg">
						</img>
					</div>
					<Divider/>
					<div className={'center-div'}>
						<h2 className={'code-content-header'}>
							<a target="_blank"
									href=
										"https://play.google.com/store/apps/details?id=smilerater.io">
								SmileRater <i className="share-icon fa fa-external-link"/>
							</a>
						</h2>
					</div>
					<div className={'code-content'}>
						<p>
							Native android application that rates the user&#8217;s smile from
							1 to 10. Uses the camera hardware, Snapdragon&#8217;s image processing
							API, android&#8217;s file system, and implicit intents for sharing.
						</p>
						<img className={'media'} src="../img/second_screen.png">
						</img>
					</div>
					<Divider/>
					<div className={'center-div'}>
						<h2 className={'code-content-header'}>
							<a target="_blank"
									href=
										"http://www.challengepost.com/software/dolladollabillyo">
								DollaDollaBillYo <i className="share-icon fa fa-external-link"/>
							</a>
						</h2>
					</div>
					<div className={'code-content'}>
						<p>
							Native android application that enables donating bitcoins to
							others around you by "Making it rain." This was built for a hackathon
							with a android frontend and apache, mysql, php backend.
						</p>
					</div>
					<Divider/>
					<div className={'center-div'}>
						<h2 className={'code-content-header'}>
							<a target="_blank"
									href=
										"http://parkchop.me">
								Parkchop <i className="share-icon fa fa-external-link"/>
							</a>
						</h2>
					</div>
					<div className={'code-content'}>
						<p>
							Native android application that enables renting out your driveway
							for parking. This was build with an android frontend and nodejs,
							mongodb, mysql, expressjs backend.
						</p>
					</div>
					<Divider/>
					<div className={'center-div'}>
						<h2 className={'code-content-header'}>
							<a>
								This Site!
							</a>
						</h2>
					</div>
					<div className={'code-content'}>
						<p>
							Built with reactjs, nodejs server setup with nodejs, hosted on Heroku.
						</p>
					</div>
				</div>
			);
		}
	});
}(jQuery));
