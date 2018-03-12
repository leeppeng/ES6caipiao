import gulp from 'gulp';//引入gulp 自动化构建工具
import gulpSequence from 'gulp-sequence';//

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']))