app.config(function($routeProvider){
    $routeProvider
    .when('/home',{
        templateUrl: "index.html"
    })
    .when('/gioithieu',{
        templateUrl: "GioiThieu.html"
    })
    .when('/sanpham',{
        templateUrl: "Products.html"
    })
    .when('/cart',{
        templateUrl: "cart.html"
    })
    // .when('/feedback',{
    //     templateUrl: "feedback.html"
    // })
    // .when('/fag',{
    //     templateUrl: "fag.html"
    // })
    // .when('/account/login',{
    //     templateUrl: "login.html"
    // })
    // .when('/account/forgot',{
    //     templateUrl: "forgot.html"
    // })
    // .when('/account/logout',{
    //     redirectTo: "/"
    // })
    // .when('/account/change',{
    //     templateUrl: "change.html"
    // })
    // .when('/account/register',{
    //     templateUrl: "register.html"
    // })
    // .when('/account/update',{
    //     templateUrl: "update.html"
    // })
    // .when('/account/order',{
    //     templateUrl: "order.html"
    // })
    // .when('/account/products',{
    //     templateUrl: "products.html"
    // })
    // .when('/category/:id',{
    //     templateUrl: "productlist.html",
    //     controller: "categoryctrl"
    // })
    // .when('/supplier/:id',{
    //     templateUrl: "productlist.html",
    //     controller: "supplierctrl"
    // })
    // .when('/special/:id',{
    //     templateUrl: "productlist.html",
    //     controller:"specialctrl"
    // })
    .otherwise({
        redirectTo: "/home",
    })
});

app.run(function($rootScope){
    $rootScope.$on('$routeChangeStart', function(){
        $rootScope.loading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function(){
        $rootScope.loading = false;
    });
    $rootScope.$on('$routeChangeError', function(){
        $rootScope.loading = false;
        alert("Lỗi");
    });
});