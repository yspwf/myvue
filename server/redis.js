let redis = require('redis');

client = redis.createClient();

// client.on('connect', function(){
//     client.set('author','Wilson',redis.print);
//     client.get('author',redis.print);
//     console.log('connect');
// });


client.on('connect', function(){
    //client.hmset('short',{'js':'javascript', 'C#':'C Sharp'}, redis.print);
    //client.hmset('short','js','javascript',redis.print);

    client.hgetall('short',function(err, res){
        if(err){
            console.log("err:"+err);
            return;
        }
        console.dir(res);
    });
});



client.on('ready', function(err){
    console.log('ready');
});