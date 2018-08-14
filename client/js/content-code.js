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
                    "https://devpost.com/software/dolladollabillyo">
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
            <img className={'media'} src="../img/herocity.jpg"/>
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
              Built with reactjs, nodejs, expressjs, and hosted on Heroku.
            </p>
          </div>
        </div>
      );
    }
  });
}(jQuery));
