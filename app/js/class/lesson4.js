{
	console.log('a',`\u0061`);
	console.log('s',`\u20bb7`);
	console.log('s',`\u{20bb7}`);

}
{
	let s='𠮷';
	console.log('length',s.length);
	//es5
	console.log('0',s.charAt(0));
	console.log('1',s.charAt(1));
	console.log('at0',s.charCodeAt(0));
	console.log('at1',s.charCodeAt(1));
	//es6
	let s1='𠮷a';
	console.log('length',s1.length);
	console.log('code0',s1.codePointAt(0));
	console.log('code0',s1.codePointAt(0).toString(16));
	console.log('code1',s1.codePointAt(1));
	console.log('code2',s1.codePointAt(2));

}
{
	console.log(String.fromCharCode("0x20bb7"));
	console.log(String.fromCodePoint("0x20bb7"));
}
{
	let str = '\u{20bb7}abc';
	for (let i = 0; i < str.length; i++) {
		console.log('es5:',str[i]);
	}
	for(let item of str){
		console.log('es6:',item);
	}
}
{
	let str ='string';
	console.log('是否包含', str.includes('c'));
	console.log('是否以某个字符开头', str.startsWith('st'));
	console.log('是否以某个字符开头', str.endsWith('ng'));
}
{
	let str = 'abc';
	console.log(str.repeat(3));
}
{
	let name = 'list';
	let info = 'hello world';
	let m = `i am ${name},${info}`;
	console.log(m);
}

{
	console.log('1'.padStart(2,'0'))//前补0
	console.log('1'.padEnd(2,'0'))//后补0
}
{
	let user = {
		name:'list',
		info:'hello world'
	};
	console.log(abc`i am ${user.name}${user.info} hehe`);
	function abc(s,v1,v2) {
		console.log(s,v1,v2);
		return s+v1+v2;
	}
}

{
	let ajax = function(callback){
		console.log('执行');
		setTimeout(function(){
			callback&&callback.call();
		},1000)
	};
	ajax(function(){
		console.log('timeout1');
	})
}
{
	let ajax = function () {
		console.log('执行2');
		return new Promise(function(resolve,reject){
			setTimeout(function(){
				resolve()
			},1000)
		})
	}
	ajax().then(function(){
		console.log('Promise','timeout2')
	})
}