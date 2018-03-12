import gulp from 'gulp';//引入gulp 自动化构建工具
import gulpif from 'gulp-if';//gulp 语句中作if判断
import liveserver from 'gulp-live-server' //起动作为服务器的包
import args from './util/args';//对命令行参数进行解析的包

gulp.task('serve',(cb)=>{
	if(!args.watch) return cb();

	var server = liveserver.new(['--harmony','server/bin/www']);
	server.start();

	gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
		server.notify.apply(server,[file]);
	})

	gulp.watch(['server/routes/**/*.js','server/app.js'],function () {
		server.start.bind(server)()
	});
})
