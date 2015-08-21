(function($){

	var GalleryImage = React.createClass({
		render : function(){
			return (
				<img src={this.props.path} />
			);
		}
	});

	var Gallery = React.createClass({
		render : function(){
			var that =  this;
			var imageNodes = Object.keys(that.props.data.images).map(function (path, index) {
				var activeClass = (that.props.data.active === index) ? "active" : "";
				var thumbsOpenClass = (that.props.data.thumblistOpen) ? "thumblistOpen" : "";
	  			return (
	  				<li key={path} className={'galleryImage ' + activeClass + ' ' + thumbsOpenClass}><GalleryImage path={path}></GalleryImage></li>
	  			);
			});

			return (
					<ul>{imageNodes}</ul>
			);
		}
	});

	var Thumblist = React.createClass({
		clickHandler : function(index) {
			this.props.handleGoTo(index);
		},
		render: function(){
			var that =  this;
			var thumbs = Object.keys(that.props.data.images).map(function (path, index) {
				var activeClass = (that.props.data.active === index) ? "active" : "grayscale";
//this is needed in the img element to load thumbs src={"/thumbs" + path}
	  			return (
	  				<li key={path} className={'thumb '+ activeClass}>
	  					<img  onClick={that.clickHandler.bind(that, index)} className={activeClass} />
	  				</li>
	  			);
			});
			var leftOffset = that.props.data.win.width / 2 - 100;

			var thumblistStyle = {
				marginLeft : leftOffset -(204 * that.props.data.active)
			};
			var openClass = that.props.data.thumblistOpen ? "open" : "closed";
			return (
				<div className={'thumblistScroller '+ openClass}>
					<ul className="thumblist" style={thumblistStyle}>
						{thumbs}
					</ul>
				</div>
			);
		}
	});

	Photos = React.createClass({
		getInitialState: function(){
			var host = location.origin.replace(/^http/, 'ws')
var sock = new WebSocket(host);
// ws.onmessage = function (event) {
//   var li = document.createElement('li');
//   li.innerHTML = JSON.parse(event.data);
//   document.querySelector('#pings').appendChild(li);
// };
// 			var sock = new SockJS('https://' + window.location.hostname + ':8000/filestatus');
			var images = {};
			var updateGallery = function(message){
				if (message.type === 'add'){
					images[message.path] = message;
				}
				if (message.type === 'unlink'){
					delete images[message.path];
				}
			};

			var that =  this;
	   	sock.onopen = function() {};
			sock.onmessage = function(e) {
				updateGallery(JSON.parse(e.data));
				var imagesCount = Object.keys(images).length;
				that.setState(
					{
						images : images,
						active : (that.state.active <  imagesCount ? that.state.active : imagesCount - 1)
					});
			};
			sock.onclose = function() {};


			return {
				win : {
	    			width: 0,
	    			height: 0
	    		},
				images : images,
				active : 0,
				thumblistOpen : false
			}
		},
		updateViewport : function(w,h){
			this.state.win = {
  			width: w,
  			height: h
	  	};
    	this.setState(this.state);
		},
	  componentDidMount: function() {
	  	var win = $(window);
    	var that = this;
			this.state.mounted = true;
    	that.updateViewport(win.width(),win.height());
	  	win.on('resize', function(){
	  		that.updateViewport(win.width(),win.height());
	  	});

			setInterval(this.handleNextIfNotPaused, this.props.pollInterval);
    },
    componentWillUnmount: function() {
			this.state.mounted = false;
    	$(window).off('resize');
    },
		handleNext : function() {
			this.state.active = (this.state.active + 1) % Object.keys(this.state.images).length;
			this.setState(this.state);
		},
		handleNextIfNotPaused : function() {
			if (!this.state.isPaused && this.state.mounted) {
				this.state.active = (this.state.active + 1) % Object.keys(this.state.images).length;
				this.setState(this.state);
			}
		},
		handlePrev : function() {
			this.state.active =  (this.state.active - 1);
			if (this.state.active === -1 ) { this.state.active = Object.keys(this.state.images).length - 1;}
			this.setState(this.state);
		},
		handleGoTo : function(index) {
			this.state.active = index;
			this.setState(this.state);
		},
		toggleThumblist: function() {
			this.state.thumblistOpen = this.state.thumblistOpen ? false : true;
			this.state.isPaused = this.state.thumblistOpen;
			this.setState(this.state);
		},
		render : function() {
			var openClass = this.state.thumblistOpen ? "open" : "closed";
			var chevronClass = this.state.thumblistOpen ? "fa-chevron-circle-down" : "fa-chevron-circle-up";
			return (
				<div className={'gallery-body'}>
					<Gallery data={this.state}/>
					<p onClick={this.handleNext} className="galleryButton next">
						<span></span>
					</p>
					<p onClick={this.handlePrev} className="galleryButton prev">
						<span></span>
					</p>
					<Thumblist data={this.state} handleGoTo={this.handleGoTo} />
					<span onClick={this.toggleThumblist} className={"toggleThumblist " + openClass}>
						<i className={'fa ' + chevronClass +' fa-3x'}></i>
					</span>
				</div>
			)
		}
	});
}(jQuery));
