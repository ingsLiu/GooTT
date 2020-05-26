let fetch = function(url, obj) {
	// 是否根据不同请求头加入不同参数
	if(obj.power) {
		// 设置不同请求头
		// headers['Authorization'] = 'Basic a3N1ZGlfcGM6a3N1ZGlfcGM='
	}
	return new Promise((resolve, reject) => {
		uni.showLoading({
		    title: '加载中'
		})
		uni.request({
			url: url,
			method: obj.method || 'GET',
			data: obj.data || null,
			dataType: 'json',
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success(res) {
				uni.hideLoading()
				resolve(res.data)
			},
			fail(error) {
				uni.hideLoading()
				reject(error)
			}
		})
	})
}
export default fetch
