// get API working 
// return JSON object

var 

function goNative(url, callBack)
  var getFlickrPhotos = new XMLHTTPRequest();
    getFlickrPhotos.onreadystatechange = function(){
      if (getFlickrPhotos.readyState === 4 && getFlickrPhotos.status === 200) {
        var data = JSON.parse(this.response);
        if (callBack) callBack(data);
    }
  }
};

getFlickrPhotos.open('GET', url)
getFlickrPhotos.send();
}

  // iterate through all the photos 
  // on click init the lighbox 