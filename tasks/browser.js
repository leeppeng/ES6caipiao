import gulp from 'gulp';//引入gulp 自动化构建工具
import gulpif from 'gulp-if';//gulp 语句中作if判断
import gutil from 'gulp-util';
import args from './util/args';//对命令行参数进行解析的包

gulp.task('browser',(cb)=>{
	if(!args.watch) return cb();
	gulp.watch('app/**/*.js',['scripts']);
	gulp.watch('app/**/*.ejs',['pages']);
	gulp.watch('app/**/*.css',['css']);
})