import $ from 'jquery';

class Interface{
	/*
	*[getOmit 获取遗漏数据]
	*@param {string} issue [当前期号]
	*/
	getOmit(issue){
		// 保存 this 指向
		let self=this;
		// es6的 promise
		return new Promise((resolve,reject)=>{
			$.ajax({
				url:'/get/omit',
				data:{
					issue:issue
				},
				dataType:'json',
				success:function(res){
					self.setOmit(res.data);
					resolve.call(self,res)
				},
				error:function(err){
					reject.call(err);
				}
			})
		});
	}
	/*
	*获取开奖号码
	*/
    getOpenCode(issue){
        let self=this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/opencode',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res){
                	console.log(res.data)
                    self.setOpenCode(res.data);
                    resolve.call(self,res);
                },
                error:function(err){
                    reject.call(err);
                }
            })
        })
    }
	/*获取当前状态*/
    getState(issue){
        let self=this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/state',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res){
                    resolve.call(self,res);
                },
                error:function(err){
                    reject.call(err);
                }
            })
        })
    }
}
export default Interface