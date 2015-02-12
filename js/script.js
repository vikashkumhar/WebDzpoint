function showTutorialThumbnails() {
    var content = '';
    for (var i = 0; i < tutorials.length; i++) {
        content += '<div class="col-xs-6 col-md-3"><a href="#" class="link"><div class="thumbnail"><div class="txt_hln"><h1><b> ' + tutorials[i].title + '</b></h1></div><img src="' + tutorials[i].image + '" class="img-thumbnail" alt="HTML5 Img"><h3 class="panel">' + tutorials[i].title + '</h3></div><button class="getStarted">Sign in to get started</button></a></div>'
    }
    $('#tutorials').append(content);
}

