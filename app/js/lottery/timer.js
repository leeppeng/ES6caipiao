class Timer{
	countdown(end,update,handle){//end:结束时间；update:更新时间的回调；handle:倒计时结束后的回调函数
		const now = new Date().getTime();//获取当前时间
		const self = this;//用self获取当前指针
		if(now-end>0){
			handle.call(self);//当前时间-结束时间>0；倒计时结束
		}else{
			let last_time = end-now;
			const px_d=1000*60*60*24;//一天是多少毫秒
			const px_h=1000*60*60;//一小时是多少毫秒
			const px_m=1000*60;//一分是多少毫秒
			const px_s=1000;//一秒是多少毫秒
			let d = Math.floor(last_time/px_d);
			let h = Math.floor((last_time-d*px_d)/px_h);
			let m = Math.floor((last_time-d*px_d-h*px_h)/px_m);
			let s = Math.floor((last_time-d*px_d-h*px_h-m*px_m)/px_s);
			let r=[];
			if(d>0){
				r.push(`<em>${d}</em>天`);
			}
			if(r.length || (h>0)){//r.length判断长度：1、如果天是0，前面就不能出现天。2、还要判断有没有天这种情况
				r.push(`<em>${h}</em>时`);
			}
			if(r.length || (m>0)){
				r.push(`<em>${m}</em>时`);
			}
			if(r.length || (s>0)){
				r.push(`<em>${s}</em>时`);
			}
			self.last_time = r.join('');
			update.call(self,r.join(''));
			setTimeout(function () {
				self.countdown(end,update,handle);
			},1000);
		}
	}
}

export default Timer