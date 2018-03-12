//数组
{
	let a,b,rest;
	[a,b]=[1,2];
	console.log(a,b);//1,2
}
{
	let a,b,rest;
	[a,b,...rest]=[1,2,3,4,5,6]
	console.log(a,b,rest);//1,2,[3,4,5,6]
}
//对象
{
	let a,b;
	({a,b}={a:1,b:2});
	console.log(a,b);//1,2
}
{
	let a,b,c,rest;
	[a,b,c=3]=[1,2];
	console.log(a,b,c);//1,2,3
}
{
	let a,b,c,rest;
	[a:A,b]=[1,2];
	console.log(A,b,a);//1,2,undefined //a被重命名为A,a就是相当于键名
}
{
	let a,b,c,rest;
	[a,b,c]=[1,2];
	console.log(a,b,c);//1,2,undefined
}
//应用场景
{
	//变量的交换
	let a=1;
	let b=2;
	[a,b]=[b,a];
	console.log(a,b);//2,1
}
{
	function f() {
		return [1,2]
	}
	let a,b;
	[a,b]=f();
	console.log(a,b);//1,2
}

{
	function f() {
		return [1,2,3,4,5];
	}
	let a,b,c;
	[a,,,b]=f();
	console.log(a,b);//1,4
}

{
	function f() {
		return [1,2,3,4,5];
	}
	let a,b,c;
	[a,,...b]=f();
	console.log(a,b);//1,[3,4,5]
	c=f();
	console.log(c);//[1,2,3,4,5]
}

{
	let o={p:42,q:true};
	let {p,q}=o;
	console.log(o['p']+","+o["q"])
	console.log(p,q);
}
{
	let {a=10,b=5}={a:3};
	console.log(a,b);//3,5
}

{
	let metaData={
		title:'abc',
		test:[{
			title:'test',
			desc:'descripttion'
		}]
	}
	let {title:esTitle,test:[{title:cnTitle}]}=metaData;
	console.log(esTitle,cnTitle);//abc,test
}
{
	//解构数据
	let res = {
		status:200,
		id:12,
		data:[{name:'bob'},{name:'lee'}]
	}
	let {statue,id,data}= res;
	if(statue == 200){
		...
	}
	
}
{
	//解构方法
	let {floor,pow}=Math;
	let a = 1.1;
	console.log(floor(a))//1

}
{
	let arr = [1,2]//传参有顺序问题
	function test1([a,b]){
		console.log("a:",a);
		console.log("b:",b);
	}
	test1(arr);

	let obj = {b:2,a:1}//传参可不受顺序限制
	function test({a=10,b}){
		console.log("a:",a);
		console.log("b:",b);
	}
	test(obj);
}