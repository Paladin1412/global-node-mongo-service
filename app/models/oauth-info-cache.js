let mongoose = require("mongoose")

let schema = new mongoose.Schema({
	// 用户ID
	id: String,
	/**
	 * 信息类型
	 * github: github用户信息
	 * qq: qq用户信息
	 */
	type: {
		type: String,
		default: null
	},
	info: {
		type: Object,
		default: null
	},
	cTime: {
		type: Date,
		default: Date.now
	},
	mTime: Date,
})

module.exports = db.model('oauth-info-cache', schema)
