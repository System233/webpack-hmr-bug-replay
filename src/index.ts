import hot from './hot.js'

const timer=setInterval(hot.test,1000)
if(import.meta.webpackHot){
    import.meta.webpackHot.accept((err,ids)=>{
        console.log('[webpackHot.accept]',err,ids)
    })
    import.meta.webpackHot.dispose((data)=>{
        clearTimeout(timer)
        console.log('[webpackHot.dispose]',data)
    })
}