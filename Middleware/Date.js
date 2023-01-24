const date =(req,res,next) => {
    let date = new Date()
    let h = date.getHours()

    if(!(h>=9 && h<=17)){
        res.send('404')
    }
    next()
}

module.exports = date