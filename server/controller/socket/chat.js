/**
 * Chat controller
 * 
 * @package chat-on
 * @subpackage contollers.socket
 * @author harapeco
 */
var Chat = module.exports = {
	open: function(io, socket, message){
		
	},
	join: function(io, socket, message){
		
	},
	send: function(io, socket, message){
		io.sockets.emit('receive', message);
	},
	type: function(io, socket, message){
		socket.broadcast.emit('receive', message);
	},
	leave: function(io, socket, message){
		
	},
	close: function(io, socket, message){
		
	}
}