/**
 * Chat controller
 * 
 * @package chat-on
 * @subpackage contollers.socket
 * @author harapeco
 */
var Chat = module.exports = {
	/**
	 * ルーム作成
	 */
	open: function(io, socket, message){
		
	},
	/**
	 * ルーム入室
	 */
	join: function(io, socket, message){
		
	},
	/**
	 * メッセージ送信
	 */
	send: function(io, socket, message){
		io.sockets.emit('receive', message);
	},
	/**
	 * タイピング
	 */
	type: function(io, socket, message){
		socket.broadcast.emit('receive', message);
	},
	/**
	 * ルーム退室
	 */
	leave: function(io, socket, message){
		
	},
	close: function(io, socket, message){
		
	}
}