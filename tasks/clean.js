import gulp from 'gulp';//引入gulp 自动化构建工具
import del from 'del';
import args from './util/args';//对命令行参数进行解析的包

gulp.task('clean',()=>{
	return del(['server/public','server/views'])
})