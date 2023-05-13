var slidePosition = 1;
	SlideShow(slidePosition);

	// forward/Back controls
	function plusSlides(n) {
	  SlideShow(slidePosition += n);
	}

	//  images controls
	function currentSlide(n) {
	  SlideShow(slidePosition = n);
	}

	function SlideShow(n) {
	  var i;
	  var slides = document.getElementsByClassName("Containers");
	  var circles = document.getElementsByClassName("dots");
	  if (n > slides.length) {slidePosition = 1}
	  if (n < 1) {slidePosition = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none";
	  }
	  for (i = 0; i < circles.length; i++) {
	      circles[i].className = circles[i].className.replace(" enable", "");
	  }
	  slides[slidePosition-1].style.display = "block";
	  circles[slidePosition-1].className += " enable";
	}

     var id = null;

    function myMove() {
        var elem = document.getElementById("myAnimation");
        var pos = 0;
        clearInterval(id);
        id = setInterval(frame, 10);
        function frame() {
            if (pos == 7000) {
                clearInterval(id);
            } else {
                pos++;

                elem.style.left = pos + 'px';
            }
        }
    }


        function increase() {
            var myImg = document.getElementById("myImg");
            var width = myImg.clientWidth;

            if (width == 600) {
                alert("You have reached the maximum zoom level.");
            } else {
                myImg.style.width = (width + 20) + "px";
            }
        }

        function decrease() {
            var myImg = document.getElementById("myImg");
            var width = myImg.clientWidth;

            if (width == 40) {
                alert("You have reached the minimum zoom level.");
            } else {
                myImg.style.width = (width - 20) + "px";
            }
        }


        function validate()
        {
            var name = document.getElementById("name").value
            var tp = document.getElementById("tel").value
            var mail = document.getElementById("email").value

            if (name==null || name=="") 
            {
                alert("Name can't be blank!"); 
            }
            else if (tp.length<10) 
            {
                alert("Telephone Number must have 10 digits!"); 
            }
            else if (mail==null || mail=="") {
                alert("E-mail can't be blank!"); 
            }
            else
            {
                alert("Thank you for contacting us!"); 
            }
        }

        function clearFunc()
        {
            document.getElementById("name").value = "";
            document.getElementById("tel").value = "";
            document.getElementById("email").value = "";
        }
