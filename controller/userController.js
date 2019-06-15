const userMock = require('./app/mooks/users');

module.exports = {
    v1:{
        getAll:getAll
    }
};

function getAll(req,res){
    
    res.status(200).send(userMock.ALL_USERS);
}
