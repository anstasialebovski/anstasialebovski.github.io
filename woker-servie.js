 function se(){
        return saveStorage;
    }

    function getSubscriptionId()
    {
        if( getSubscriptionStatus === 'subscribed' )
            return storage().get('sid');

        return new Promise(function(resolve){resolve(null)});
    }

    function getBrowser(userAgent)
    {
        if( /firefox/i.test(userAgent) )
            return 'firefox';

        if( /YaBrowser/i.test(userAgent) )
            return 'yandex';

        if( /Opera|OPR\/[0-9.]+/i.test(userAgent) )
            return 'opera';

        if( /Chrome/i.test(userAgent) )
            return 'chrome';

        if( /Safari/i.test(userAgent) )
            return 'safari';

        return false;
    }

    function error(msg)
    {
        console.error(msg);
    }

    function log(msg){}
