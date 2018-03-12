import gulp from 'gulp';//引入gulp 自动化构建工具
import gulpif from 'gulp-if';//gulp 语句中作if判断
import concat from 'gulp-concat';//gulp 中处理文件拼接
import webpack from 'webpack';//打包工具
import gulpWebpack from 'webpack-stream';//
import named from 'vinyl-named';//对文件重命名，作标记
import livereload from 'gulp-livereload';//热更新，自动刷新
import plumber from 'gulp-plumber';//处理文件信息流
import rename from 'gulp-rename';//对文件重命名
import uglify from 'gulp-uglify';//处理压缩js/css
import {log,colors} from 'gulp-util';//在命令行输出的包 色彩log
import args from './util/args';//对命令行参数进行解析的包

gulp.task('scripts',()=>{
	return gulp.src(['app/js/index.js'])
	.pipe(plumber({
		errorHandle:function(){

		}
	}))
	.pipe(named())
	.pipe(gulpWebpack({
		module:{
			loaders:[{
				test:/\.js$/,
				loader:'babel-loader'
			}]
		}
	}),null,(err,stats)=>{
		log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
			chunks:false
		}))
	})
	.pipe(gulp.dest('server/public/js'))
	.pipe(rename({
		basename:'cp',
		extname:'.min.js'
	}))
	.pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
	.pipe(gulp.dest('server/public/js'))
	.pipe(gulpif(args.watch,livereload()))
})