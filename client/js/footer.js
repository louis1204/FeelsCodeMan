/** @jsx React.DOM */
(function($){

  Footer = React.createClass({displayName: 'Footer',
    render : function() {
      return(
        <div className={'footer'}>
          Made with keks in San Francisco<br/>
          &#169; 2018 -
          <a target="_blank" href="mailto:louis1204@gmail.com">
            Louis D Wong
          </a>
        </div>
      );
    }
  });
}(jQuery));
