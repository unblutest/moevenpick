var ready = (function(){

    var readyList,
        DOMContentLoaded,
        class2type = {};
        class2type["[object Boolean]"] = "boolean";
        class2type["[object Number]"] = "number";
        class2type["[object String]"] = "string";
        class2type["[object Function]"] = "function";
        class2type["[object Array]"] = "array";
        class2type["[object Date]"] = "date";
        class2type["[object RegExp]"] = "regexp";
        class2type["[object Object]"] = "object";

    var ReadyObj = {
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1,
        // Hold (or release) the ready event
        holdReady: function( hold ) {
            if ( hold ) {
                ReadyObj.readyWait++;
            } else {
                ReadyObj.ready( true );
            }
        },
        // Handle when the DOM is ready
        ready: function( wait ) {
            // Either a released hold or an DOMready/load event and not yet ready
            if ( (wait === true && !--ReadyObj.readyWait) || (wait !== true && !ReadyObj.isReady) ) {
                // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
                if ( !document.body ) {
                    return setTimeout( ReadyObj.ready, 1 );
                }

                // Remember that the DOM is ready
                ReadyObj.isReady = true;
                // If a normal DOM Ready event fired, decrement, and wait if need be
                if ( wait !== true && --ReadyObj.readyWait > 0 ) {
                    return;
                }
                // If there are functions bound, to execute
                readyList.resolveWith( document, [ ReadyObj ] );

                // Trigger any bound ready events
                //if ( ReadyObj.fn.trigger ) {
                //  ReadyObj( document ).trigger( "ready" ).unbind( "ready" );
                //}
            }
        },
        bindReady: function() {
            if ( readyList ) {
                return;
            }
            readyList = ReadyObj._Deferred();

            // Catch cases where $(document).ready() is called after the
            // browser event has already occurred.
            if ( document.readyState === "complete" ) {
                // Handle it asynchronously to allow scripts the opportunity to delay ready
                return setTimeout( ReadyObj.ready, 1 );
            }

            // Mozilla, Opera and webkit nightlies currently support this event
            if ( document.addEventListener ) {
                // Use the handy event callback
                document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );
                // A fallback to window.onload, that will always work
                window.addEventListener( "load", ReadyObj.ready, false );

            // If IE event model is used
            } else if ( document.attachEvent ) {
                // ensure firing before onload,
                // maybe late but safe also for iframes
                document.attachEvent( "onreadystatechange", DOMContentLoaded );

                // A fallback to window.onload, that will always work
                window.attachEvent( "onload", ReadyObj.ready );

                // If IE and not a frame
                // continually check to see if the document is ready
                var toplevel = false;

                try {
                    toplevel = window.frameElement == null;
                } catch(e) {}

                if ( document.documentElement.doScroll && toplevel ) {
                    doScrollCheck();
                }
            }
        },
        _Deferred: function() {
            var // callbacks list
                callbacks = [],
                // stored [ context , args ]
                fired,
                // to avoid firing when already doing so
                firing,
                // flag to know if the deferred has been cancelled
                cancelled,
                // the deferred itself
                deferred  = {

                    // done( f1, f2, ...)
                    done: function() {
                        if ( !cancelled ) {
                            var args = arguments,
                                i,
                                length,
                                elem,
                                type,
                                _fired;
                            if ( fired ) {
                                _fired = fired;
                                fired = 0;
                            }
                            for ( i = 0, length = args.length; i < length; i++ ) {
                                elem = args[ i ];
                                type = ReadyObj.type( elem );
                                if ( type === "array" ) {
                                    deferred.done.apply( deferred, elem );
                                } else if ( type === "function" ) {
                                    callbacks.push( elem );
                                }
                            }
                            if ( _fired ) {
                                deferred.resolveWith( _fired[ 0 ], _fired[ 1 ] );
                            }
                        }
                        return this;
                    },

                    // resolve with given context and args
                    resolveWith: function( context, args ) {
                        if ( !cancelled && !fired && !firing ) {
                            // make sure args are available (#8421)
                            args = args || [];
                            firing = 1;
                            try {
                                while( callbacks[ 0 ] ) {
                                    callbacks.shift().apply( context, args );//shifts a callback, and applies it to document
                                }
                            }
                            finally {
                                fired = [ context, args ];
                                firing = 0;
                            }
                        }
                        return this;
                    },

                    // resolve with this as context and given arguments
                    resolve: function() {
                        deferred.resolveWith( this, arguments );
                        return this;
                    },

                    // Has this deferred been resolved?
                    isResolved: function() {
                        return !!( firing || fired );
                    },

                    // Cancel
                    cancel: function() {
                        cancelled = 1;
                        callbacks = [];
                        return this;
                    }
                };

            return deferred;
        },
        type: function( obj ) {
            return obj == null ?
                String( obj ) :
                class2type[ Object.prototype.toString.call(obj) ] || "object";
        }
    }
    // The DOM ready check for Internet Explorer
    function doScrollCheck() {
        if ( ReadyObj.isReady ) {
            return;
        }

        try {
            // If IE is used, use the trick by Diego Perini
            // http://javascript.nwbox.com/IEContentLoaded/
            document.documentElement.doScroll("left");
        } catch(e) {
            setTimeout( doScrollCheck, 1 );
            return;
        }

        // and execute any waiting functions
        ReadyObj.ready();
    }
    // Cleanup functions for the document ready method
    if ( document.addEventListener ) {
        DOMContentLoaded = function() {
            document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
            ReadyObj.ready();
        };

    } else if ( document.attachEvent ) {
        DOMContentLoaded = function() {
            // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
            if ( document.readyState === "complete" ) {
                document.detachEvent( "onreadystatechange", DOMContentLoaded );
                ReadyObj.ready();
            }
        };
    }
    function ready( fn ) {
        // Attach the listeners
        ReadyObj.bindReady();

        var type = ReadyObj.type( fn );

        // Add the callback
        readyList.done( fn );//readyList is result of _Deferred()
    }
    return ready;
})();
if (!window.lea || window.lea.version != "1.0") {
	window.lea = function() {
		var core = {
            version: "1.0",
			url: "//www.lacmp.net/lila.php",
			isDomReady: false,
			trackElement:function(data) {
				//document ready
				ready(function(){
					var xmlHttp = utils.createXMLHttp();
					var params = "";
                    var displayIFrame = true;
					for (var prop in data) {
						if (!data.hasOwnProperty(prop) || prop == "id" || prop == "url") {
							continue;
						}
						if(prop == "products"){
							var prods = new Array();
							for (var prod in data[prop]) {
								try {
									var product = JSON.parse(data[prop][prod]);
								}
								catch(e) {
									if (typeof data[prop][prod] !== 'object'){ continue; };
									var product = data[prop][prod];
								}
								prods.push({
									"productid" : product.productid,
									"type"  : product.type,
									"oneoff_cost" : product.oneoff_cost,
									"monthly_cost" : product.monthly_cost,
									"name" : product.name,

									"productId" : product.productId,
									"productName" : product.productName,
									"productPrice" : product.productPrice,
									"productQuantity" : product.productQuantity,
                                    "cid" : product.cid,
                                    "productCategory" : product.productCategory,
								});
							}
							data[prop] = JSON.stringify(prods);
						}
                        if(prop == 'event' && data[prop].toLowerCase() == 'htlp') {
                            displayIFrame = false;
                        }
                        if(prop == 'voucher' && typeof data[prop] == 'undefined') {
                            data[prop] = "";
                        }

						params += "&"+prop+"="+encodeURIComponent(data[prop]);
					}
					xmlHttp.open('GET', (document.location.protocol=="https:"?"https:":"http:") + core.url + "?id=" + data.id + "&url=" + encodeURIComponent(document.location) + "&frameit=1" + params);
					  xmlHttp.onload = function() {
						var script = document.createElement('script');
						script.innerHTML = xmlHttp.responseText;
						document.body.appendChild(script);
					  };
					  xmlHttp.onprogress = function(){ };
						xmlHttp.ontimeout = function(){ };
						xmlHttp.onerror = function () { };
						setTimeout(function(){
							xmlHttp.send(null);
						}, 0);
                    if (displayIFrame) {
                        var iframeNode = utils.createIframeNode({
                            height: 1,
                            width: 1,
                            style: "display: none",
                            src: (document.location.protocol=="https:"?"https:":"http:") + core.url + "?id=" + data.id + "&url=" + encodeURIComponent(document.location) + params
                        });

                        document.body.appendChild(iframeNode);
                    }

				});
			}
		};
		var utils = {
			createIframeNode: function(additionalParameters) {
                var iframeNode = document.createElement("iframe");
                iframeNode.marginWidth = 0;
                iframeNode.marginHeight = 0;
                iframeNode.vspace = 0;
                iframeNode.hspace = 0;
                iframeNode.allowTransparency = true;
                iframeNode.scrolling = "no";
                iframeNode.frameBorder = 0;
                for (var paramName in additionalParameters) {
                    iframeNode[paramName] = additionalParameters[paramName]
                }
                return iframeNode
            },
            isString: function(obj) {
                return (typeof obj == "string")
            },
			createXMLHttp: function() {
			  //If XMLHttpRequest is available then using it
			   if (window.XDomainRequest && (document.all && !window.atob)) {
				return new XDomainRequest;
			  } else if (typeof XMLHttpRequest !== undefined) {
				return new XMLHttpRequest;
			  //if window.ActiveXObject is available than the user is using IE...so we have to create the newest version XMLHttp object
			  } else if (window.ActiveXObject) {
				var ieXMLHttpVersions = ['MSXML2.XMLHttp.5.0', 'MSXML2.XMLHttp.4.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp', 'Microsoft.XMLHttp'],
					xmlHttp;
				//In this array we are starting from the first element (newest version) and trying to create it. If there is an
				//exception thrown we are handling it (and doing nothing ^^)
				for (var i = 0; i < ieXMLHttpVersions.length; i++) {
				  try {
					xmlHttp = new ActiveXObject(ieXMLHttpVersions[i]);
					return xmlHttp;
				  } catch (e) {
				  }
				}
			  }
			}
        };
		var pub = {
            version: function() {
                return core.version
            }(),
            track: function(data) {
                if (data == null) {
                    return
                }
                if (!utils.isString(data.id)) {
                    return
                }
                core.trackElement(data)
            }
        };
        //utils.registerForDomReadyEvent(core.onDomReady);
        return pub

	}();
	if (window._lea && window._lea.length > 0) {
        window._lea.push = lea.track;
        for (var i = 0; i < window._lea.length; i++) {
            lea.track(window._lea[i])
        }
        window._lea.length = 0
    }
}