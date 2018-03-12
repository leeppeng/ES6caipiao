import yargs from 'yargs';

const args = yargs

    .option('production',{
        boolean:true,
        default:false,
        describe:'min all scripts'
    })

    .option('watch',{//监听
        boolean:true,
        default:false,
        describe:'watch all scripts'
    })

    .option('verbose',{//日志
        boolean:true,
        default:false,
        describe:'log all scripts'
    })

    .option('sourcemaps',{//
        describe:'force the creation of sroucemaps'
    })

    .option('port',{//
        string:true,
        default:8080,
        describe:'server port'
    })

    .argv

export default args;

