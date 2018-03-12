import gulp from 'gulp';//引入gulp 自动化构建工具
import gulpif from 'gulp-if';//gulp 语句中作if判断
import livereload from 'gulp-livereload';//热更新，自动刷新
import args from './util/args';//对命令行参数进行解析的包

gulp.task('pages',()=>{
	return gulp.src('app/**/*.ejs')
		.pipe(gulp.dest('server'))
		.pipe(gulpif(args.watch,livereload()))
})