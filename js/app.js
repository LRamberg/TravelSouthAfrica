

  $(".loc").click(function(){
  //   // $(".location").scrollTop(0);
    $(".navs")[0].scrollIntoView({behavior: "smooth", block: "start"});
  //   // debugger;
  });

// When the page loads, the location section will be empty

// when the user clicks on a location button
$("#kruger").click(function(event) {
  event.preventDefault();

  // update the h2 with the location name
    $("#locationName").text("Kruger National Park");
    // update the <p> with the description text
    $("#description").text("Kruger National Park is a large game reserve intended to protect wildlife in their natural habitat. There are many lodging options, we stayed in a safari tent on the Tamboti river. Many safari options are available as well. We opted for the walking tour through the bush, and drove around on our own at times to spot lions, elephants, giraffes, and others.");
    // show the next and back buttons
    $(".btn").addClass("next");
    $("#descriptionWrapper").addClass("paragraph");
    $("img").addClass("after");

  // a looping photo carousel populates the <div>
  // create the photo array
  var krugerArray = ["images/Kruger/IMAG0164.jpg", "images/Kruger/IMAG0165.jpg", "images/Kruger/IMAG0168.jpg", "images/Kruger/IMAG0169.jpg", "images/Kruger/IMAG0172.jpg", "images/Kruger/IMAG0175.jpg", "images/Kruger/IMAG0179.jpg"]
  // set index var to 0
  var index = 0;
  // set first index var
  var firstIndex = 0;
  // set last index var (must be unique to location)
  var krugerLastIndex = krugerArray.length - 1;

  // show the first image on the page
  $("img").attr("src", krugerArray[0]);

  // listen for click on the next button
  $("#next").click(function() {
    krugerShowNextImage();
  });

  // listen for click on the back button
  $("#back").click(function() {
    krugerShowPreviousImage();
  });

  function krugerShowNextImage() {
    // when index reaches last
    if (index === krugerLastIndex) {
    // set next index to 0
      index = firstIndex;
    } else {
    // else increase index by 1
      index = index + 1;
    }
    // use index to get the next image and update on page
    krugerUpdateImage(index);
  }

  function krugerShowPreviousImage() {
    // when index reaches 0
    if (index === firstIndex) {
    // set next index to the last
      index = krugerLastIndex;
    } else {
    // else decrease the index by 1
      index = index - 1;
    }
    // use index to get the last image and update on page
    krugerUpdateImage(index);
  }

  function krugerUpdateImage(imageIndex) {
    var krImageSrc = krugerArray[index];
    $("#image").attr("src", krImageSrc);
  }

  });

// when the user clicks on a location button
$("#kloof").click(function(event) {
  event.preventDefault();
// update the h2 with the location name
  $("#locationName").text("Magoebaskloof");
  // update the <p> with the description text
  $("#description").text("Magoebaskloof is a mountain near the town of Tzaneen, north-west of Pretoria. There are huts along the hiking trail to stop and camp at along the way. The trail goes through indigenous forest as well as a pine wood plantation. There are waterfalls along the way to stop and have a swim at. On our way there, we stopped to see a Baobab tree, which was a dream come true for me. ");
  // show the next and back buttons
  $(".btn").addClass("next");
  $("#descriptionWrapper").addClass("paragraph");
  $("img").addClass("after");

  // a looping photo carousel populates the <div>
  // create the photo array
  var kloofArray = ["images/Magoebaskloof/IMAG0182.jpg", "images/Magoebaskloof/IMAG0184.jpg", "images/Magoebaskloof/IMAG0191.jpg", "images/Magoebaskloof/IMAG0203.jpg", "images/Magoebaskloof/IMAG0204.jpg", "images/Magoebaskloof/IMAG0209.jpg", "images/Magoebaskloof/IMAG0211.jpg", "images/Magoebaskloof/IMAG0212.jpg", "images/Magoebaskloof/IMAG0216.jpg"]
  // set index var to 0
  var index = 0;
  // set first index var
  var firstIndex = 0;
  // set last index var (must be unique to location)
  var kloofLastIndex = kloofArray.length - 1;

  // show the first image on the page
  $("img").attr("src", kloofArray[0]);

  // listen for click on the next button
  $("#next").click(function() {
    kloofShowNextImage();
  });

  // listen for click on the back button
  $("#back").click(function() {
    kloofShowPreviousImage();
  });

  function kloofShowNextImage() {
    // when index reaches last
    if (index === kloofLastIndex) {
    // set next index to 0
      index = firstIndex;
    } else {
    // else increase index by 1
      index = index + 1;
    }
    // use index to get the next image and update on page
    kloofUpdateImage(index);
  }

  function kloofShowPreviousImage() {
    // when index reaches 0
    if (index === firstIndex) {
    // set next index to the last
      index = kloofLastIndex;
    } else {
    // else decrease the index by 1
      index = index - 1;
    }
    // use index to get the last image and update on page
    kloofUpdateImage(index);
  }

  function kloofUpdateImage(imageIndex) {
    var klImageSrc = kloofArray[index];
    $("#image").attr("src", klImageSrc);
  }
});

// when the user clicks on a location button
$("#stf").click(function(event) {
  event.preventDefault();
// update the h2 with the location name
  $("#locationName").text("St. Francis");
  // update the <p> with the description text
  $("#description").text("St. Francis is a beach town on the Indian Ocean along the southern coast. We were lucky enough to stay in a house right on the water. This is a popular destination for the holidays, since Christmas is in the middle of summer down in the southern hempsiphere.");
  // show the next and back buttons
  $(".btn").addClass("next");
  $("#descriptionWrapper").addClass("paragraph");
  $("img").addClass("after");

  // a looping photo carousel populates the <div>
  // create the photo array
  var stfArray = ["images/St. Francis/IMG_0049.jpeg", "images/St. Francis/IMG_0054.jpeg", "images/St. Francis/IMG_0058.jpeg", "images/St. Francis/IMG_0073.jpeg"]
  // set index var to 0
  var index = 0;
  // set first index var
  var firstIndex = 0;
  // set last index var (must be unique to location)
  var stfLastIndex = stfArray.length - 1;

  // show the first image on the page
  $("img").attr("src", stfArray[0]);

  // listen for click on the next button
  $("#next").click(function() {
    stfShowNextImage();
  });

  // listen for click on the back button
  $("#back").click(function() {
    stfShowPreviousImage();
  });

  function stfShowNextImage() {
    // when index reaches last
    if (index === stfLastIndex) {
    // set next index to 0
      index = firstIndex;
    } else {
    // else increase index by 1
      index = index + 1;
    }
    // use index to get the next image and update on page
    stfUpdateImage(index);
  }

  function stfShowPreviousImage() {
    // when index reaches 0
    if (index === firstIndex) {
    // set next index to the last
      index = stfLastIndex;
    } else {
    // else decrease the index by 1
      index = index - 1;
    }
    // use index to get the last image and update on page
    stfUpdateImage(index);
  }

  function stfUpdateImage(imageIndex) {
    var stfImageSrc = stfArray[index];
    $("#image").attr("src", stfImageSrc);
  }
});

// when the user clicks on a location button
$("#knysna").click(function(event) {
  event.preventDefault();
// update the h2 with the location name
  $("#locationName").text("Knysna");
  // update the <p> with the description text
  $("#description").text("Knysna is along an area known as the Garden Route and arguably one of the most beautiful regions in the world. The Knysna heads are where the lagoon waters meet the Indian Ocean. The beautiful lagoon is great for a boat ride and water sports such as wakeboarding and skiing. The Knysna forest is full of facinating vegetation as well as a legendary group of Elephants, seldom seen by humans.");
  // show the next and back buttons
  $(".btn").addClass("next");
  $("#descriptionWrapper").addClass("paragraph");
  $("img").addClass("after");

  // a looping photo carousel populates the <div>
  // create the photo array
  var knysnaArray = ["images/Knysna/IMG_0075.jpeg", "images/Knysna/IMG_0080.jpeg", "images/Knysna/IMG_0083.jpeg", "images/Knysna/IMG_0111.jpeg", "images/Knysna/IMG_0113.jpeg", "images/Knysna/IMG_0117.jpeg", "images/Knysna/IMG_0134.jpeg"]
  // set index var to 0
  var index = 0;
  // set first index var
  var firstIndex = 0;
  // set last index var (must be unique to location)
  var knysnaLastIndex = knysnaArray.length - 1;

  // show the first image on the page
  $("img").attr("src", knysnaArray[0]);

  // listen for click on the next button
  $("#next").click(function() {
    knysnaShowNextImage();
  });

  // listen for click on the back button
  $("#back").click(function() {
    knysnaShowPreviousImage();
  });

  function knysnaShowNextImage() {
    // when index reaches last
    if (index === knysnaLastIndex) {
    // set next index to 0
      index = firstIndex;
    } else {
    // else increase index by 1
      index = index + 1;
    }
    // use index to get the next image and update on page
    knysnaUpdateImage(index);
  }

  function knysnaShowPreviousImage() {
    // when index reaches 0
    if (index === firstIndex) {
    // set next index to the last
      index = knysnaLastIndex;
    } else {
    // else decrease the index by 1
      index = index - 1;
    }
    // use index to get the last image and update on page
    knysnaUpdateImage(index);
  }

  function knysnaUpdateImage(imageIndex) {
    var knImageSrc = knysnaArray[index];
    $("#image").attr("src", knImageSrc);
  }
});

// when the user clicks on a location button
$("#beach").click(function(event) {
  event.preventDefault();
// update the h2 with the location name
  $("#locationName").text("Noetzie Beach");
  // update the <p> with the description text
  $("#description").text("Noetzie Beach is through the forest from Knysna and also on the Indian Ocean. There are castles along the coast built purely for vacation purposes. The coastline here is absolutely gorgeous.");
  // show the next and back buttons
  $(".btn").addClass("next");
  $("#descriptionWrapper").addClass("paragraph");
  $("img").addClass("after");

  // a looping photo carousel populates the <div>
  // create the photo array
  var beachArray = ["images/Noetzie/IMG_0087.jpeg", "images/Noetzie/IMG_0089.jpeg", "images/Noetzie/IMG_0094.jpeg", "images/Noetzie/IMG_0103.jpeg"]
  // set index var to 0
  var index = 0;
  // set first index var
  var firstIndex = 0;
  // set last index var (must be unique to location)
  var beachLastIndex = beachArray.length - 1;

  // show the first image on the page
  $("img").attr("src", beachArray[0]);

  // listen for click on the next button
  $("#next").click(function() {
    beachShowNextImage();
  });

  // listen for click on the back button
  $("#back").click(function() {
    beachShowPreviousImage();
  });

  function beachShowNextImage() {
    // when index reaches last
    if (index === beachLastIndex) {
    // set next index to 0
      index = firstIndex;
    } else {
    // else increase index by 1
      index = index + 1;
    }
    // use index to get the next image and update on page
    beachUpdateImage(index);
  }

  function beachShowPreviousImage() {
    // when index reaches 0
    if (index === firstIndex) {
    // set next index to the last
      index = beachLastIndex;
    } else {
    // else decrease the index by 1
      index = index - 1;
    }
    // use index to get the last image and update on page
    beachUpdateImage(index);
  }

  function beachUpdateImage(imageIndex) {
    var beachImageSrc = beachArray[index];
    $("#image").attr("src", beachImageSrc);
  }
});

// when the user clicks on a location button
$("#hogs").click(function(event) {
  event.preventDefault();
// update the h2 with the location name
  $("#locationName").text("Hogsback");
  // update the <p> with the description text
  $("#description").text("Hogsback is a mountainous region with three iconic Hog mountains. The locals believe in faries and these woods are said to have inspired Tolkien to write The Hobbit. There are beautiful waterfalls along the many hiking trails.");
  // show the next and back buttons
  $(".btn").addClass("next");
  $("#descriptionWrapper").addClass("paragraph");
  $("img").addClass("after");

  // a looping photo carousel populates the <div>
  // create the photo array
  var hogsArray = ["images/Hogsback/IMG_0159.jpeg", "images/Hogsback/IMG_0160.jpeg", "images/Hogsback/IMG_0162.jpeg", "images/Hogsback/IMG_0164.jpeg"]
  // set index var to 0
  var index = 0;
  // set first index var
  var firstIndex = 0;
  // set last index var (must be unique to location)
  var hogsLastIndex = hogsArray.length - 1;

  // show the first image on the page
  $("img").attr("src", hogsArray[0]);

  // listen for click on the next button
  $("#next").click(function() {
    hogsShowNextImage();
  });

  // listen for click on the back button
  $("#back").click(function() {
    hogsShowPreviousImage();
  });

  function hogsShowNextImage() {
    // when index reaches last
    if (index === hogsLastIndex) {
    // set next index to 0
      index = firstIndex;
    } else {
    // else increase index by 1
      index = index + 1;
    }
    // use index to get the next image and update on page
    hogsUpdateImage(index);
  }

  function hogsShowPreviousImage() {
    // when index reaches 0
    if (index === firstIndex) {
    // set next index to the last
      index = hogsLastIndex;
    } else {
    // else decrease the index by 1
      index = index - 1;
    }
    // use index to get the last image and update on page
    hogsUpdateImage(index);
  }

  function hogsUpdateImage(imageIndex) {
    var hogsImageSrc = hogsArray[index];
    $("#image").attr("src", hogsImageSrc);
  }
});

// when the user clicks on a location button
$("#cape").click(function(event) {
  event.preventDefault();
// update the h2 with the location name
  $("#locationName").text("Cape Town");
  // update the <p> with the description text
  $("#description").text("Cape Town is the most popular city in South Africa and it is easy to see why. Table Mountain looks over beautiful bays and beaches. We hiked up the mountain and enjoyed sunsets by the water. The Cape of Good Hope is a short drive away.");
  // show the next and back buttons
  $(".btn").addClass("next");
  $("#descriptionWrapper").addClass("paragraph");
  $("img").addClass("after");

  // a looping photo carousel populates the <div>
  // create the photo array
  var capeArray = ["images/Cape Town/IMG_0173.jpeg", "images/Cape Town/IMG_0176.jpeg", "images/Cape Town/IMG_0177.jpeg", "images/Cape Town/IMG_0180.jpeg", "images/Cape Town/IMG_0189.jpeg", "images/Cape Town/IMG_0194.jpeg", "images/Cape Town/IMG_0197.jpeg", "images/Cape Town/IMG_0199.jpeg"]
  // set index var to 0
  var index = 0;
  // set first index var
  var firstIndex = 0;
  // set last index var (must be unique to location)
  var capeLastIndex = capeArray.length - 1;

  // show the first image on the page
  $("img").attr("src", capeArray[0]);

  // listen for click on the next button
  $("#next").click(function() {
    capeShowNextImage();
  });

  // listen for click on the back button
  $("#back").click(function() {
    capeShowPreviousImage();
  });

  function capeShowNextImage() {
    // when index reaches last
    if (index === capeLastIndex) {
    // set next index to 0
      index = firstIndex;
    } else {
    // else increase index by 1
      index = index + 1;
    }
    // use index to get the next image and update on page
    capeUpdateImage(index);
  }

  function capeShowPreviousImage() {
    // when index reaches 0
    if (index === firstIndex) {
    // set next index to the last
      index = capeLastIndex;
    } else {
    // else decrease the index by 1
      index = index - 1;
    }
    // use index to get the last image and update on page
    capeUpdateImage(index);
  }

  function capeUpdateImage(imageIndex) {
    var capeImageSrc = capeArray[index];
    $("#image").attr("src", capeImageSrc);
  }
});
