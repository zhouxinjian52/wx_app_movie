const conf = {
	
	// 全局数据对象与方法（整个应用程序共享)

	globalData: {
		hasLogin: false,
	},

	fetch(url, callback) {
		wx.request({
			url,
			data: {},
			header: {
				'Content-Type': 'application/json'
			},
			success(res) {
				callback(null, res.data);
			},
			fail(e) {
				callback(e);
			}
		})
	},

	// 程序启动时触发一次
	onLaunch() {
		console.log('App Launch');
	},

	// 当程序进入前台状态时触发
	onShow() {
		console.log('App Show');
	},

	// 当程序进入后台状态时触发
	onHide() {
		console.log('App Hide');
	}
};

// App() 函数创建应用程序对象
App(conf);