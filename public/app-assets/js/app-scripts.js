$(document).ready(function () {


  function setCookie(key, value, expiry) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
  }

  function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
  }

  function eraseCookie(key) {
    var keyValue = getCookie(key);
    setCookie(key, keyValue, '-1');
  }

  $(document).on('click', '.table_row tr', function () {
    $(this).toggleClass("bg bg-warning white remove_this_row"); 
  });
  

  // dataTables_wrapper dt-bootstrap4 no-footer
  $(document).on('dblclick', '.freez', function () {
    let element = $(this).attr('ele_ment');
    let col_number = $(this).attr('tdNumber');
    // alert(col_number);
    setCookie('freez_col', col_number, '8640');
  });



  $(document).on('click', '.td', function () {

    let col_number = $(this).attr('tdNumber');
    let active = $(this).attr('active' + col_number);
    if (getCookie('td')) {
      if (getCookie('td') !== col_number) {
        $('td:nth-child(' + getCookie('td') + ')').removeClass('active');
        eraseCookie('td');
        setCookie('td', col_number, '1');
        $('td:nth-child(' + col_number + ')').toggleClass('active');
      }
    } else {
      setCookie('td', col_number, '1');
      $('td:nth-child(' + col_number + ')').toggleClass('active');
    }

    // alert(col_number);
  });

  $(document).on('click', '.pagination_list', function () {
    $('td:nth-child(' + getCookie('td') + ')').removeClass('active');
    eraseCookie('td');
  });

  $(document).on('click', '.pagination_list', function () {
    $('td:nth-child(' + getCookie('td') + ')').removeClass('active');
    eraseCookie('td');
  });

  $(document).on("change paste keyup", ".compose-editor", function () {
    // $('.compose-editor').change(function () {
    let peer = $(this).attr('data-to');
    let source = $(this).attr('data-source');
    let $this = $(this);
    let content = $this.find('div.ql-editor').html();
    // $('.'+source).html()
    $('.' + peer).val(content);
  });

  $(document).on("click", ".ql-formats", function () {
    // $('.pm_decription').val($('.ql-editor').html());
    let peer = $(this).attr('data-to');
    let source = $(this).attr('data-source');
    let content = $('.' + source).find('div.ql-editor').html();
    $('.' + peer).val(content);
  });

  $('.repeat_content').click(function () {
    let v = $('.increment').val();
    let number = parseInt(v) + 1;
    if (number < 1) {
      number = 1;
    }
    $('.increment').val(number);

    // prop({type: action});
    let get_repeat_content = '<table class="table table-sm mb-0 " id="repeat' + number + '">'
      + '<tbody >'
      + ' <tr>'
      + '<td>'
      + '<input type="text" name="moq_price' + number + '" style="width: 70px;" value="">'
      + '</td>'
      + '<td>'
      + '<input type="number" min="0" name="moq_start' + number + '" value="" style="width: 70px;" >'
      + '</td>'
      + '<td>'
      + ' <input type="number" min="0" name="moq_ends' + number + '" value="" style="width: 70px;"> '
      + '</td>'
      + '<td>'
      + '<button type="button" class="btn btn-danger btn-sm repeater-delete" delete-repeat="' + number + '" > <i class="ft-x"></i>'
      + '</button>'
      + '</td>'
      + ' </tr>'
      + '</tbody>'
      + '</table>';
    // let get_repeat_content = $('.content_repeater').html();
    $('.repeat_list').append(get_repeat_content);
  });

  $('.repeater-delete').click(function () {
    let v = $('.increment').val();
    let number = parseInt(v) - 1;
    if (number < 1) {
      number = 1;
    }
    $('.increment').val(number);
    let property = $(this).attr("delete-repeat");

    $('#repeat' + property).remove();
  });

  function getData(url, progress_name, progress_image, result, property_a, property_b, property_c, property_d, property_e) {
    $(".customers_list").html("");
    $.ajax({
      type: 'GET',
      url: url, 
      success: function (responds) {
        if (responds.status === 201) { 
          $.each(responds.data,function (key,item) {
          $(".customers_list").append(
            '<a class="dropdown-item get-option" action="toggle" act-on="customers_list" option1="' + item.jf_name +' '+ item.jl_name +'" option1_to="pm_customer_1" option3="' + item.jiffy_id + '" option3_to="pm_customer" url="#" activity_name=" " activity_name_set="content_title_2" property_a="" property_b="" property_c="" property_d="" property_e="" progress_name="biz_type_list2" progress_image="" data-target="#rollIn" result="biz_type_list"> ' + item.jf_name + ' '+ item.jl_name +' </a>'
           )
        })
        }
        
        if (result) {
         
        }
        

      }, complete: function () {
        
      }
    });
    
  }
  //Modal activities
  $(document).on("click", ".modal_activity", function (e) {

    let activity_name = $(this).attr("activity_name");
    let activity_name_set = $(this).attr("activity_name_set");
    let url = $(this).attr("url");
    let property_a = $(this).attr("property_a");
    let property_b = $(this).attr("property_b");
    let property_c = $(this).attr("property_c");
    let property_d = $(this).attr("property_d");
    let property_e = $(this).attr("property_e");
    let result_type = $(this).attr("result_type");
    let progress_name = $(this).attr("progress_name");
    let progress_image = $(this).attr("progress_image");
    let table_id_to_filter = $(this).attr("table_id_to_filter");
    let result = $(this).attr("result");
    $("." + activity_name_set).html(activity_name);
    $("." + progress_name).html(progress_image).show();

    getData(url, progress_name, progress_image, result, property_a, property_b, property_c, property_d, property_e); 

  });

  $(document).on('click', '.click', function () {

    let action = $(this).attr("action");
    let act_on = $(this).attr("act-on");
    let math = $(this).attr("math");
    let math_on = $(this).attr("math_on");
    let c_content_of = $(this).attr("c_content_of");
    let cont_v = $(this).attr("cont_v");
    if (action === 'show') {
      $(this).hide();
      $("." + act_on).show();
      if (math === 'add') {
        let v = $('.' + math_on).html();
        $('.' + math_on).html(parseInt(v) + 1);
      } else {
        let v = $('.' + math_on).html();
        $('.' + math_on).html(parseInt(v) - 1);
      }
      $('.' + c_content_of).html(cont_v);
    }
    if (action === 'toggle') {
      $("." + act_on).toggle();
    }
    if (action === 'hide') {
      $("." + act_on).hide();
    }
    if (action === 'active') {
      $("." + act_on).show();
    }
  });

  $(document).on('click', '.d_action', function () {
    let show_option = $(this).attr('show_option');
    let amount = $(this).attr('amount');
    $('.selected' + show_option).show(10);
    $('.action_peer').hide();
    $('.selected' + show_option).show(100);
    $('.d_action').show();
    $('.option' + show_option).hide(10);
    $('.depo_amt').val(amount);
  });

  $(document).on('submit', '.submit_form', function (e) {
    e.preventDefault();
    let me = $(this);
    e.preventDefault();

    if (me.data('requestRunning')) {
      return;
    }

    me.data('requestRunning', true);
    let msg;
    //   let data = $(this).serialize();
    let url = $('.url').val();
    let progress_name = $(".progress_name").val();
    let progress_image = $(".progress_image").val();
    let result = $(".result").val();
    let operation = $(".operation").val();

    //   alert(url);
    $("." + progress_name).html(progress_image);
    $.ajax({
      type: 'POST',
      url: url,
      data: new FormData(this),
      contentType: false,
      cache: false,
      processData: false,
      resetForm: true,
      success: function (data) {

        if (data == 1) {
          msg = '<div class="alert round bg-success alert-dismissible mb-2" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> <strong> Done ' + operation + 'ing Account </strong>  </div>';
        } else {
          msg = '<div class="alert round bg-danger alert-dismissible mb-2" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> <strong>Error!</strong> There was an error please try again. <a href="" class="alert-link">Click here to go back</a> or to try again. </div>';
        }

        $("." + result).html(msg).show();
        $("." + progress_name).html("Save");
        $(".submit_form")[0].reset();

      }, complete: function () {
        me.data('requestRunning', false);
      }
    });

    return false;
  });


  $(document).on('submit', '.get_content', function (e) {
    e.preventDefault();
    let me = $(this);
    e.preventDefault();

    if (me.data('requestRunning')) {
      return;
    }

    me.data('requestRunning', true);
    // let msg;
    //   let data = $(this).serialize();
    // let url =$('.url2').val();
    let url = $(this).attr('action');
    let progress_name = $(this).attr("progress_name");
    let progress_image = $(this).attr("progress_image");
    let table_id_to_filter = $(this).attr("table_id_to_filter");
    let result = $(this).attr("result_name");
    //   let operation = $(".operation").val();

    // ,
    // dom: 'Bfrtip',
    //   buttons: [
    //     'copy', 'csv', 'excel', 'pdf', 'print'
    //   ]

    $("." + progress_name).html(progress_image).show();
    $.ajax({
      type: 'POST',
      url: url,
      data: new FormData(this),
      contentType: false,
      cache: false,
      processData: false,
      resetForm: true,
      success: function (data) {
        $("." + result).html(data).show();
        // $('#' + table_id_to_filter).dataTable({
        //   scrollY: "400px",
        //   scrollX: true,
        //   scrollCollapse: true,
        //   paging: true,
        //   fixedColumns: {
        //     leftColumns: getCookie('freez_col')
        //   }
        // });
        $("." + progress_name).hide();
      }, complete: function () {
        me.data('requestRunning', false);
      }
    });

    return false;
  });



  //  $('.list_selector').on('change', function (){
  $(document).on("change paste keyup", ".list_selector", function (e) {

    let me = $(this);
    me.data("requestRunning", true);
    let activity_name = $(this).attr("activity_name");
    let activity_name_set = $(this).attr("activity_name_set");
    let url = $(this).attr("url");
    let property_a = this.value;
    let property_b = $(this).attr("property_b");
    let property_c = $(this).attr("property_c");
    let property_d = $(this).attr("property_d");
    let property_e = $(this).attr("property_e");
    let progress_name = $(this).attr("progress_name");
    let progress_image = $(this).attr("progress_image");
    let table_id_to_filter = $(this).attr("table_id_to_filter");
    let result = $(this).attr("result");
    $("." + activity_name_set).html(activity_name);
    $("." + progress_name).html(progress_image);
    $("." + progress_name).show();

    $.post(url, {
      property_a: property_a,
      property_b: property_b,
      property_c: property_c,
      property_d: property_d,
      property_e: property_e
    }, function (data) {
      $("." + result).html(data);
      $('#' + table_id_to_filter).dataTable({
        scrollY: "400px",
        scrollX: true,
        scrollCollapse: true,
        paging: true,
        fixedColumns: {
          leftColumns: getCookie('freez_col')
        }
      });
      $("." + progress_name).hide();
      me.data('requestRunning', false);
    });
  });
//proceed on when the user is done typing $('#target').on('blur', function() {
  $(document).on("blur", ".done_typing_action", function (e) {

    let me = $(this);
    me.data("requestRunning", true);
    let activity_name = $(this).attr("activity_name");
    let activity_name_set = $(this).attr("activity_name_set");
    let url = $(this).attr("url");
    let property_a = this.value;
    let property_b = $(this).attr("property_b");
    let property_c = $(this).attr("property_c");
    let property_d = $(this).attr("property_d");
    let property_e = $(this).attr("property_e");
    let progress_name = $(this).attr("progress_name");
    let progress_image = $(this).attr("progress_image");
    let table_id_to_filter = $(this).attr("table_id_to_filter");
    let result = $(this).attr("result");
    $("." + activity_name_set).html(activity_name);
    $("." + progress_name).html(progress_image);
    $("." + progress_name).show();

    $.post(url, {
      property_a: property_a,
      property_b: property_b,
      property_c: property_c,
      property_d: property_d,
      property_e: property_e
    }, function (data) {
      $("." + result).html(data);
      $('#' + table_id_to_filter).dataTable({
        scrollY: "400px",
        scrollX: true,
        scrollCollapse: true,
        paging: true,
        fixedColumns: {
          leftColumns: getCookie('freez_col')
        }
      });
      $("." + progress_name).hide();
      me.data('requestRunning', false);
    });
  });


  $(document).on('click', '.click_option', function (e) {
    e.preventDefault();
    let me = $(this);
    e.preventDefault();

    if (me.data("requestRunning")) {
      return;
    }

    me.data("requestRunning", true);
    let activity_name = $(this).attr("activity_name");
    let activity_name_set = $(this).attr("activity_name_set");
    let url = $(this).attr("url");
    let property_a = $(this).attr("property_a");
    let property_b = $(this).attr("property_b");
    let property_c = $(this).attr("property_c");
    let property_d = $(this).attr("property_d");
    let property_e = $(this).attr("property_e");
    let hide_content = $(this).attr("hide_content");
    let show_content = $(this).attr("show_content");
    let progress_name = $(this).attr("progress_name");
    let progress_image = $(this).attr("progress_image");
    let table_id_to_filter = $(this).attr("table_id_to_filter");
    let result = $(this).attr("result");
    $("." + activity_name_set).html(activity_name);
    $("." + progress_name).html(progress_image);
    $("." + progress_name).show();
    $("." + hide_content).hide();
    $("." + show_content).show();
    $.post(url, {
      property_a: property_a,
      property_b: property_b,
      property_c: property_c,
      property_d: property_d,
      property_e: property_e
    }, function (data) {
      $("." + result).html(data);
      $('#' + table_id_to_filter).dataTable({
        scrollY: "400px",
        scrollX: true,
        scrollCollapse: true,
        paging: true,
        fixedColumns: {
          leftColumns: getCookie('freez_col')
        }
      });
      $("." + progress_name).hide();
      me.data('requestRunning', false);
    });
  });

  $('.sidebar-toggle').on('click', function () {
    // e.stopPropagation();
    let act_on = $(this).attr('act-on');
    let filter = $(this).attr('filter');
    $('.' + act_on).toggle(function () {
      $('.' + act_on).removeClass('sm-hide');
      $('.' + act_on).addClass("sm-show");
      $('.filter').val(filter);
    });
    // appContentOverlay.addClass('show');
  });

  $(document).on('click', '.get-option', function () {
    let option1 = $(this).attr('option1');
    let option1_to = $(this).attr('option1_to');
    $('.' + option1_to).val(option1);
    let option2 = $(this).attr('option2');
    let option2_to = $(this).attr('option2_to');
    $('.' + option2_to).html(option2);
    let option3 = $(this).attr('option3');
    let option3_to = $(this).attr('option3_to');
    $('.' + option3_to).val(option3);
  });


  $(document).on('click', '.get_content_to_append', function () {
    let content_from = $(this).attr('content_from');
    let content_to = $(this).attr('content_to');
    let append_or_not = $(this).attr('append_or_not');
    if (append_or_not==='append') {
      $('.' + content_to).append($("." + content_from).html());
    } else {
      $('.' + content_to).html($("." + content_from).html());
    }
    
    let option3 = $(this).attr('option3');
    let option3_to = $(this).attr('option3_to');
    $('.' + option3_to).val(option3);
  });
  $('.table_freez_columns').dataTable({
    scrollY: "400px",
    scrollX: true,
    scrollCollapse: true,
    paging: true,
    fixedColumns: {
      leftColumns: getCookie('freez_col')

    }
    // rightColumns: 1
  });

  let element = $('.get_customer_terms');
  let element_container = $('.generated_fild');
  let newText;
  let textToReplace;
  let s = element.html(),
    re = /(?:^|\W)@(\w+)(?!\w)/g,
    match, replace_with, matches = [];

  while (match = re.exec(s)) {
    replace_with = $("." + match[1]).html();
    textToReplace = element.html();
    newText = textToReplace.replace("@" + match[1], replace_with);
    element.html(newText);
    element_container.val(element.html());
    // matches.push(match[1] + ' ' + replace_with);

  }

  (function () {

    'use strict';

    // click events
    document.body.addEventListener('click', copy, true);

    // event handler
    function copy(e) {

      // find target element
      var
        t = e.target,
        c = t.dataset.copytarget,
        inp = (c ? document.querySelector(c) : null);

      // is element selectable?
      if (inp && inp.select) {

        // select text
        inp.select();

        try {
          // copy text
          document.execCommand('copy');
          inp.blur();

          // copied animation
          t.classList.add('copied');
          setTimeout(function () { t.classList.remove('copied'); }, 1500);
        }
        catch (err) {
          alert('please press Ctrl/Cmd+C to copy');
        }

      }

    }

  })();


  (function ($) {
    $.fn.loaddata = function (options) {// Settings
      let el = this;
      let url = el.attr('url');
      let progress_image = el.attr('progress_image');

      let settings = $.extend({
        loading_gif_url: progress_image, //url to loading gif
        end_record_text: 'No more records found!', //no more records to load
        data_url: url, //url to PHP page
        start_page: 2 //initial page
      }, options);


      loading = false;
      end_record = false;
      //contents(el, settings); //initial data load
      var scrollLoad = true;
      $(window).scroll(function () { //detact scroll
        // if($(window).scrollTop() + $(window).height() >= $(document).height()){ //scrolled to bottom of the page
        if (scrollLoad && ($(document).height() - $(window).height()) - $(window).scrollTop() <= 1000) {
          contents(el, settings); //load content chunk 
          // scrollLoad = false;
        }
      });
    };
    //Ajax load function
    function contents(el, settings) {
      var load_img = $('<img/>').attr('src', settings.loading_gif_url).addClass('loading-image'); //create load image
      var record_end_txt = $('<div/>').text(settings.end_record_text).addClass('end-record-info'); //end record text

      if (loading == false && end_record == false) {
        loading = true; //set loading flag on
        el.append(load_img); //append loading image
        $.post(settings.data_url, {
          'page': settings.start_page
        }, function (data) { //jQuery Ajax post
          if (data.trim().length == 0) { //no more records
            el.append(record_end_txt); //show end record text
            load_img.remove(); //remove loading img
            end_record = true; //set end record flag on
            return; //exit
          }
          loading = false;  //set loading flag off
          load_img.remove(); //remove loading img 
          el.append(data);  //append content 
          settings.start_page++; //page increment
        })
      }
    }

  })(jQuery);

  $("#load_more_results").loaddata(); //load the results into element

  $('#user-password').keyup(function () {
    $('#password_strength').html(checkStrength($('#user-password').val()));
  });
  function checkStrength(password) {
    var strength = 0;
    if (password.length < 6) {
      $('#password_strength').removeClass();
      $('#password_strength').addClass('badge badge-danger');
      $('#user-password').addClass('border-danger');
      return 'Password length is too short';
    }
    if (password.length > 7) strength += 1
    // If password contains both lower and uppercase characters, increase strength value.
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
    // If it has numbers and characters, increase strength value.
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1
    // If it has one special character, increase strength value.
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
    // If it has two special characters, increase strength value.
    if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
    // Calculated strength value, we can return messages
    // If value is less than 2
    if (strength < 2) {
      $('#password_strength').removeClass();
      $('#password_strength').addClass('badge badge-warning');
      $('#user-password').addClass('border-warning');
      return 'Password is weak, add @,#,$ etc to make your password stronger.';
    } else if (strength == 2) {
      $('#password_strength').removeClass();
      $('#password_strength').addClass('badge badge-primary');
      $('#user-password').removeClass('border-danger');
      $('#user-password').removeClass('border-warning');
      $('#user-password').addClass('border-info');
      return 'Good';
    } else {
      $('#password_strength').removeClass();
      $('#password_strength').addClass('badge badge-success');
      $('#user-password').removeClass('border-danger');
      $('#user-password').removeClass('border-warning');
      $('#user-password').removeClass('border-info');
      $('#user-password').addClass('border-success');
      return 'Strong';
    }
  }

  $('.input_get_words').bind("change paste keyup", function () {
    $('.input_get_words_here').val($('.input_get_words').val());
  });
  $('.input_get_words_here').bind("change paste keyup", function () {
    $('.input_get_words').val($('.input_get_words_here').val());
  });

  $('.toggle_password').on('click', function () {
    $(this).hide();
    let peer = $(this).attr('password-key-peer');
    let action = $(this).attr('action');
    let toggle_peer = $(this).attr('toggle-peer');
    $('#' + toggle_peer).show();
    $('#' + peer).prop({ type: action });
    $('.' + peer).prop({ type: action });
  })
  function readURL(input) {
    if (input.files && input.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        $('#image_preview1').attr('src', e.target.result);
      }

      reader.readAsDataURL(input.files[0]);
    }
  }
  $(document).on("change", "#image1", function () {

    $("#submit1").show();
    readURL(this);
  });
  var inputLocalFont = document.getElementById("image1");
  inputLocalFont.addEventListener("change", previewImages, false); //bind the function to the input

  function previewImages() {
    var fileList = this.files;

    var anyWindow = window.URL || window.webkitURL;

    for (var i = 0; i < fileList.length; i++) {
      //get a blob to play with
      var objectUrl = anyWindow.createObjectURL(fileList[i]);
      // for the next line to work, you need something class="preview-area" in your html
      $('#preview-upload').append('<div class="carousel-item"><img src="' + objectUrl + '" class="d-block w-100" alt="file" /></div>');
      // get rid of the blob
      window.URL.revokeObjectURL(fileList[i]);
    }


  }


  function notifyMe() {
    if (Notification.permission !== 'granted')
      Notification.requestPermission();
    else {
      var notification = new Notification('Notification title', {
        icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
        body: 'Hey there! You\'ve been notified!',
      });
      notification.onclick = function () {
        window.open('http://stackoverflow.com/a/13328397/1269037');
      };
    }
  }

});