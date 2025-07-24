export function handleError(err, req, res, next){
    if(res.headersSent){
        next(err);
    }
    res.status(500).json({
        title: "500 Error Page",
        error1: "Internal server error",
        error2: "Server is down try later",
        message: err.message
    })
}