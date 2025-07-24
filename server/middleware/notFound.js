export function notFound(req, res){
    res.status(404).json({
        title: "404 Error",
        error1: "Page is not available at the moment",
        error2: "Page is not found",
        message: `cannot ${req.method} ${req.originalUrl}`
    })
}