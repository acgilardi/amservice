
/*
 * GET users listing.
 */

exports.list = function(req, res){
    var users = {
        users:[
            {name:'bob',age:'21',car:'ford'},
            {name:'jen',age:'22',car:'nissan'},
            {name:'tom',age:'20',car:'chevy'},   
        ]
    };

    
    
   // var obj = {};
    //obj.title = 'title';
    //obj.data = 'data';

    console.log('params: ' + JSON.stringify(req.params));
    console.log('body: ' + JSON.stringify(req.body));
    console.log('query: ' + JSON.stringify(req.query));

    res.header('Content-type','application/json');
    res.header('Charset','utf8');
    //res.send(req.query.callback + '('+ JSON.stringify(users) + ');');
    
    res.send(JSON.stringify(users));

};