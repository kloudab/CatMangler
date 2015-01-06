var catManglerApp = angular.module("catManglerApp", ['ngAnimate']);

catManglerApp.directive("enter", function () {
    return function (scope, element) {
        element.bind("mouseenter", function () {
            element.removeClass("pixelImage");
            element.addClass("fullImage");
        });
    };
});

catManglerApp.directive("leave", function () {
    return function (scope, element) {
        element.bind("mouseleave", function () {
            element.removeClass("fullImage");
            element.addClass("pixelImage");
        });
    };
});

function CatGridCtrl($scope) {
    $scope.catPics = ['http://i.huffpost.com/gen/1860407/thumbs/o-BLACK-FOOTED-CAT-KITTENS-facebook.jpg',
               'http://www.online-image-editor.com//styles/2014/images/example_image.png',
               'https://www.petfinder.com/wp-content/uploads/2012/11/99233806-bringing-home-new-cat-632x475.jpg',
               'http://upload.wikimedia.org/wikipedia/commons/2/22/Turkish_Van_Cat.jpg',
               'http://jasonlefkowitz.net/wp-content/uploads/2013/07/big_cat_found_spoh-760994.jpg'];

}