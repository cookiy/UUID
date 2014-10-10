function UUID () {
	this.id = this.createUUID();
};

UUID.prototype.valueOf=function(){
	return this.id
};

UUID.prototype.toString=function(){
	return this.id
};

UUID.prototype.creatUUID = function () {
	// body...
};