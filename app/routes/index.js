module.exports = (app) => {
    app.use('/api', require('./flavors'));
    app.use('/api', require('./districts'));
    app.use('/api', require('./deliverymans'));
    app.use('/api', require('./status'));
    app.use(function (req, res) {
        res.status(404).send({Error: `Error 404: Path(${req.url}) not found for method(${req.method})`});
    });
}