$(document).ready(function(){
  $('#pocr_list_tbl').DataTable({
    paging: true
  });
});
  // $('.pocr_tbl_cal').DataTable({
  //   paging: true
  // });
  // $('.baseline_tbl_cal').DataTable({
  //   paging: true
  // });





  // (function ($) {
  //   $.fn.uploader = function (options) {
  //     var settings = $.extend(
  //       {
  //         MessageAreaText: "No files selected.",
  //         MessageAreaTextWithFiles: "File List:",
  //         DefaultErrorMessage: "Unable to open this file.",
  //         BadTypeErrorMessage: "We cannot accept this file type at this time.",
  //         acceptedFileTypes: [
  //           "pdf",
  //           "jpg",
  //           "gif",
  //           "jpeg",
  //           "bmp",
  //           "tif",
  //           "tiff",
  //           "png",
  //           "xps",
  //           "doc",
  //           "docx",
  //           "fax",
  //           "wmp",
  //           "ico",
  //           "txt",
  //           "cs",
  //           "rtf",
  //           "xls",
  //           "xlsx"
  //         ]
  //       },
  //       options
  //     );
  //
  //     var uploadId = 1;
  //     //update the messaging
  //     $(".file-uploader__message-area p").text(
  //       options.MessageAreaText || settings.MessageAreaText
  //     );
  //
  //     //create and add the file list and the hidden input list
  //     var fileList = $('<ul class="file-list"></ul>');
  //     var hiddenInputs = $('<div class="hidden-inputs hidden"></div>');
  //     $(".file-uploader__message-area").after(fileList);
  //     $(".file-list").after(hiddenInputs);
  //
  //     //when choosing a file, add the name to the list and copy the file input into the hidden inputs
  //     $(".file-chooser__input").on("change", function () {
  //       var files = document.querySelector(".file-chooser__input").files;
  //
  //       for (var i = 0; i < files.length; i++) {
  //         console.log(files[i]);
  //
  //         var file = files[i];
  //         var fileName = file.name.match(/([^\\\/]+)$/)[0];
  //
  //         //clear any error condition
  //         $(".file-chooser").removeClass("error");
  //         $(".error-message").remove();
  //
  //         //validate the file
  //         var check = checkFile(fileName);
  //         if (check === "valid") {
  //           // move the 'real' one to hidden list
  //           $(".hidden-inputs").append($(".file-chooser__input"));
  //
  //           //insert a clone after the hiddens (copy the event handlers too)
  //           $(".file-chooser").append(
  //             $(".file-chooser__input").clone({ withDataAndEvents: true })
  //           );
  //
  //           //add the name and a remove button to the file-list
  //           $(".file-list").append(
  //             '<li style="display: none;"><span class="file-list__name">' +
  //             fileName +
  //             '</span><button class="removal-button" data-uploadid="' +
  //             uploadId +
  //             '"></button></li>'
  //           );
  //           $(".file-list").find("li:last").show(800);
  //
  //           //removal button handler
  //           $(".removal-button").on("click", function (e) {
  //             e.preventDefault();
  //
  //             //remove the corresponding hidden input
  //             $(
  //               '.hidden-inputs input[data-uploadid="' +
  //               $(this).data("uploadid") +
  //               '"]'
  //             ).remove();
  //
  //             //remove the name from file-list that corresponds to the button clicked
  //             $(this)
  //               .parent()
  //               .hide("puff")
  //               .delay(10)
  //               .queue(function () {
  //                 $(this).remove();
  //               });
  //
  //             //if the list is now empty, change the text back
  //             if ($(".file-list li").length === 0) {
  //               $(".file-uploader__message-area").text(
  //                 options.MessageAreaText || settings.MessageAreaText
  //               );
  //             }
  //           });
  //
  //           //so the event handler works on the new "real" one
  //           $(".hidden-inputs .file-chooser__input")
  //             .removeClass("file-chooser__input")
  //             .attr("data-uploadId", uploadId);
  //
  //           //update the message area
  //           $(".file-uploader__message-area").text(
  //             options.MessageAreaTextWithFiles ||
  //             settings.MessageAreaTextWithFiles
  //           );
  //
  //           uploadId++;
  //         } else {
  //           //indicate that the file is not ok
  //           $(".file-chooser").addClass("error");
  //           var errorText =
  //             options.DefaultErrorMessage || settings.DefaultErrorMessage;
  //
  //           if (check === "badFileName") {
  //             errorText =
  //               options.BadTypeErrorMessage || settings.BadTypeErrorMessage;
  //           }
  //
  //           $(".file-chooser__input").after(
  //             '<p class="error-message">' + errorText + "</p>"
  //           );
  //         }
  //       }
  //     });
  //
  //     var checkFile = function (fileName) {
  //       var accepted = "invalid",
  //         acceptedFileTypes =
  //           this.acceptedFileTypes || settings.acceptedFileTypes,
  //         regex;
  //
  //       for (var i = 0; i < acceptedFileTypes.length; i++) {
  //         regex = new RegExp("\\." + acceptedFileTypes[i] + "$", "i");
  //
  //         if (regex.test(fileName)) {
  //           accepted = "valid";
  //           break;
  //         } else {
  //           accepted = "badFileName";
  //         }
  //       }
  //
  //       return accepted;
  //     };
  //   };
  // })($);

////init
//   $(document).ready(function () {
//     $(".fileUploader").uploader({
//       MessageAreaText: "No files selected. Please select a file."
//     });
//
//   });





  // new DataTable('.pocr_tbl_cal', {});
  // new DataTable('.baseline_tbl_cal', {});


//
// $( document ).ready(function() {
//   var base_color = "rgb(230,230,230)";
//   var active_color = "rgb(18, 72, 123)";
//
//
//
//   var child = 1;
//   var length = $(".multisteps").length - 1;
//   $("#prev").addClass("disabled");
//   $("#submit").addClass("disabled");
//
//   $(".multisteps").not(".multisteps:nth-of-type(1)").hide();
//   $(".multisteps").not(".multisteps:nth-of-type(1)").css('transform','translateX(100px)');
//
//   var svgWidth = length * 200 + 24;
//   $("#svg_wrap").html(
//     '<svg version="1.1" id="svg_form_time" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ' +
//     svgWidth +
//     ' 24" xml:space="preserve"></svg>'
//   );
//
//   function makeSVG(tag, attrs) {
//     var el = document.createElementNS("http://www.w3.org/2000/svg", tag);
//     for (var k in attrs) el.setAttribute(k, attrs[k]);
//     return el;
//   }
//
//   for (i = 0; i < length; i++) {
//     var positionX = 12 + i * 200;
//     var rect = makeSVG("rect", { x: positionX, y: 9, width: 200, height: 6 });
//     document.getElementById("svg_form_time").appendChild(rect);
//     // <g><rect x="12" y="9" width="200" height="6"></rect></g>'
//     var circle = makeSVG("circle", {
//       cx: positionX,
//       cy: 12,
//       r: 12,
//       width: positionX,
//       height: 6
//     });
//     document.getElementById("svg_form_time").appendChild(circle);
//   }
//
//   var circle = makeSVG("circle", {
//     cx: positionX + 200,
//     cy: 12,
//     r: 12,
//     width: positionX,
//     height: 6
//   });
//   document.getElementById("svg_form_time").appendChild(circle);
//
//   $('#svg_form_time rect').css('fill',base_color);
//   $('#svg_form_time circle').css('fill',base_color);
//   $("circle:nth-of-type(1)").css("fill", active_color);
//
//
//   $(".button").click(function () {
//     $("#svg_form_time rect").css("fill", active_color);
//     $("#svg_form_time circle").css("fill", active_color);
//     var id = $(this).attr("id");
//     if (id == "next") {
//       $("#prev").removeClass("disabled");
//       if (child >= length) {
//         $(this).addClass("disabled");
//         $('#submit').removeClass("disabled");
//       }
//       if (child <= length) {
//         child++;
//       }
//     } else if (id == "prev") {
//       $("#next").removeClass("disabled");
//       $('#submit').addClass("disabled");
//       if (child <= 2) {
//         $(this).addClass("disabled");
//       }
//       if (child > 1) {
//         child--;
//       }
//     }
//     var circle_child = child + 1;
//     $("#svg_form_time rect:nth-of-type(n + " + child + ")").css(
//       "fill",
//       base_color
//     );
//     $("#svg_form_time circle:nth-of-type(n + " + circle_child + ")").css(
//       "fill",
//       base_color
//     );
//     var currentSection = $(".multisteps:nth-of-type(" + child + ")");
//     currentSection.fadeIn();
//     currentSection.css('transform','translateX(0)');
//     currentSection.prevAll('.multisteps').css('transform','translateX(-100px)');
//     currentSection.nextAll('.multisteps').css('transform','translateX(100px)');
//     $('.multisteps').not(currentSection).hide();
//   });
//
// });


// let questions = document.querySelectorAll(".faq_question");
//
// questions.forEach((question) => {
//   let icon = question.querySelector(".icon-modify");
//
//   question.addEventListener("click", (event) => {
//     debugger;
//     const active = document.querySelector(".faq_question.active");
//     const activeIcon = document.querySelector(".icon-modify.active");
//
//     if (active && active !== question) {
//       active.classList.toggle("active");
//       activeIcon.classList.toggle("active");
//       active.nextElementSibling.style.maxHeight = 0;
//     }
//
//     question.classList.toggle("active");
//     icon.classList.toggle("active");
//
//     const answer = question.nextElementSibling;
//
//     if (question.classList.contains("active")) {
//       answer.style.maxHeight = answer.scrollHeight + "px";
//     } else {
//       answer.style.maxHeight = 0;
//     }
//   });




  // ( document ).ready(function() {
  //   var base_color = "rgb(230,230,230)";
  //   var active_color = "rgb(237, 40, 70)";
  //
  //   var child = 1;
  //   var length = $("section").length - 1;
  //   $("#prev").addClass("disabled");
  //   $("#submit").addClass("disabled");
  //
  //   $("section").not("section:nth-of-type(1)").hide();
  //   $("section").not("section:nth-of-type(1)").css('transform','translateX(100px)');
  //
  //   var svgWidth = length * 200 + 24;
  //   $("#svg_wrap").html(
  //     '<svg version="1.1" id="svg_form_time" xmlns="" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ' +
  //     svgWidth +
  //     ' 24" xml:space="preserve"></svg>'
  //   );
  //
  //   function makeSVG(tag, attrs) {
  //     var el = document.createElementNS("", tag);
  //     for (var k in attrs) el.setAttribute(k, attrs[k]);
  //     return el;
  //   }
  //
  //   for (i = 0; i < length; i++) {
  //     var positionX = 12 + i * 200;
  //     var rect = makeSVG("rect", { x: positionX, y: 9, width: 200, height: 6 });
  //     document.getElementById("svg_form_time").appendChild(rect);
  //     // <g><rect x="12" y="9" width="200" height="6"></rect></g>'
  //     var circle = makeSVG("circle", {
  //       cx: positionX,
  //       cy: 12,
  //       r: 12,
  //       width: positionX,
  //       height: 6
  //     });
  //     document.getElementById("svg_form_time").appendChild(circle);
  //   }
  //
  //   var circle = makeSVG("circle", {
  //     cx: positionX + 200,
  //     cy: 12,
  //     r: 12,
  //     width: positionX,
  //     height: 6
  //   });
  //   document.getElementById("svg_form_time").appendChild(circle);
  //
  //   $('#svg_form_time rect').css('fill',base_color);
  //   $('#svg_form_time circle').css('fill',base_color);
  //   $("circle:nth-of-type(1)").css("fill", active_color);
  //
  //
  //   $(".button").click(function () {
  //     $("#svg_form_time rect").css("fill", active_color);
  //     $("#svg_form_time circle").css("fill", active_color);
  //     var id = $(this).attr("id");
  //     if (id == "next") {
  //       $("#prev").removeClass("disabled");
  //       if (child >= length) {
  //         $(this).addClass("disabled");
  //         $('#submit').removeClass("disabled");
  //       }
  //       if (child <= length) {
  //         child++;
  //       }
  //     } else if (id == "prev") {
  //       $("#next").removeClass("disabled");
  //       $('#submit').addClass("disabled");
  //       if (child <= 2) {
  //         $(this).addClass("disabled");
  //       }
  //       if (child > 1) {
  //         child--;
  //       }
  //     }
  //     var circle_child = child + 1;
  //     $("#svg_form_time rect:nth-of-type(n + " + child + ")").css(
  //       "fill",
  //       base_color
  //     );
  //     $("#svg_form_time circle:nth-of-type(n + " + circle_child + ")").css(
  //       "fill",
  //       base_color
  //     );
  //     var currentSection = $("section:nth-of-type(" + child + ")");
  //     currentSection.fadeIn();
  //     currentSection.css('transform','translateX(0)');
  //     currentSection.prevAll('section').css('transform','translateX(-100px)');
  //     currentSection.nextAll('section').css('transform','translateX(100px)');
  //     $('section').not(currentSection).hide();
  //   });

  // });



