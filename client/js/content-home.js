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
            I like to build things with code.
            I&#8217;m good with java, javascript, html, css, jquery, nodejs,
            apache, mysql, mongodb, angularjs, reactjs.
            I&#8217;ve worked with the LAMP and MEAN stack and have an affinity
            with android development and web development.
          </p>
          <p className={'home-content'}>
            Aside from coding, you can find me lifting heavy things in the gym,
            at a Giants game, at a Chipotle, or sleeping.
          </p>
        </div>
      );
    }
  });
}(jQuery));
