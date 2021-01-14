(function(){
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        let result = x + y;
        console.log(`   [@service] returning result`);
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@client] triggering the service`);
        let result = addSync(x,y);
        console.log(`[@client] result = ${result}`);
    }

    window['addSyncClient'] = addSyncClient;

    function addAsync(x,y,callback){
        console.log(`   [@service] processing ${x} and ${y}`);
        setTimeout(function(){
            let result = x + y;
            console.log(`   [@service] returning result`);
            callback(result);
        },5000);
    }

    function addAsyncClient(x,y){
        console.log(`[@client] triggering the service`);
        addAsync(x,y, function(result){
            console.log(`[@client] result = ${result}`);
        });
    }

    window['addAsyncClient'] = addAsyncClient;

    function addAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        const p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                try{
                    let result = x + y;
                    console.log(`   [@service] returning result`);
                    resolveFn(result);                    
                } catch (err){
                    rejectFn(new Error('something went wrong'));
                }
            },5000);
        });
        return p;
    }

    function addAsyncPromiseClient(x,y){
        console.log(`[@client] triggering the service`);
        var p = addAsyncPromise(x,y);
        p.then(function(result){
            console.log(`[@client] result = ${result}`);
        });
    }

    //promise delegation
    /* function addAsyncPromiseClient(x,y){
        console.log(`[@client] triggering the service`);
        var p = addAsyncPromise(100,200);
        handleResult(p);
    }

    function handleResult(p){
        p.then(function(result){
            console.log(`[@client] result = ${result}`);
        });
    } */

   
    //async await
    async function addAsyncPromiseClient(x,y){
        console.log(`[@client] triggering the service`);
        var result = await addAsyncPromise(x,y);
        console.log(`[@client] result = ${result}`);
        return result * 2;
    }
  
    window['addAsyncPromiseClient'] = addAsyncPromiseClient;

})();