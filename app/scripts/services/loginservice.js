angular.module('angularTestApp')
    .service('LoginService', function($q) {
        var uname, pwdj;
        var npattern = /^[a-zA-Z]+$/;
        var ppattern = /^[a-zA-Z0-9]+$/;
        console.log('LoginService');

        function setUserInfo(name, pwd) {
            uname = name;
            pwd = pwd;
            console.log(uname, pwd);

        }
        return {
            loginUser: function(name, pw) {
                var deferred = $q.defer();
                var promise = deferred.promise;

                if ((name).match(npattern) && (pw).match(ppattern) &&((pw).length>=6)) {
                    deferred.resolve('Welcome ' + name + '!');
                } else {
                    deferred.reject('Wrong credentials !!! ');
                }
                promise.success = function(fn) {
                    promise.then(fn);
                    return promise;
                }
                promise.error = function(fn) {
                    promise.then(null, fn);
                    return promise;
                }
                return promise;
            },
            getInfo: function() {

                return uname;
            },
            removeInfo: function() {
                uname = '';
                pwd = '';

            },
            setUserInfo: setUserInfo
        }
    })
