/*=========================================
----------------- Food Blog : web template -------------------
========================================== */

'use strict';

$(window).on('load', function() {
  $('#preloader').delay(400).fadeOut('slow');
});

  $(function() { // DOM ready
    // add active class on navigation menu
    let path = window.location.href;
    $('.menu a').each(function() {
      if(this.href === path) {
        $(this).addClass('active');
        $(this).blur();
      }
    });
    /* Navigation
    ====================== */
    $(".toggle").click(function() {
      $(this).toggleClass("change");
      $(".menu").toggleClass("show");
    });
    $(document).on("click", function(e) {
      let $navigation = $(".navbar");
      if (!$navigation.is(e.target) && $navigation.has(e.target).length === 0) {
        $(".toggle").removeClass("change");
        $('.menu').removeClass("show");
      }
    });
    /* dropdown toggle
    ======================= */
    $(".btn-toggle").click(function() {
      $(".auth-panel").toggleClass("show");
    });
    $(document).on("click", function(e) {
      let $dropMenu = $(".dropdown_toggle");
      if (!$dropMenu.is(e.target) && $dropMenu.has(e.target).length === 0) {
        $(".auth-panel").removeClass("show");
      }
    });
    /* nav dropdown menu
    ================================== */
    // if a link has a dropdown, add sub menu toggle
    $('.menu li a:not(:only-child)').click(function(e) {
      e.preventDefault();
      $(this).siblings('.nav-dropdown').slideToggle('fast');
    });
    $(document).on('click', function(e) {
      let $subDropDown = $(".dropdown");
      if (!$subDropDown.is(e.target) && $subDropDown.has(e.target).length === 0) {
        $('.nav-dropdown').slideUp('fast');
      }
    });
    /* add dynamic fields -- ingredient
    =================================== */
    var id = 1;
    $('#ingredientButton').click(function(e) {
      id++;
      e.preventDefault();
      let html = '';
      html += '<div class="form-group row" id="entry'+id+'">';
      html += '<div class="col-9 col-sm-9">';
      html += '<input type="text" name="recipe_ingredient[]" class="input" placeholder="ingredients">';
      html += '</div>';
      html += '<div class="col-1 col-sm-1">';
      html += '<span class="btn btn-sm remove-item btn-bg-color" id="'+id+'"><i class="fas fa-minus"></i></span>';
      html += '</div></div>';
      $('#ingredientInput').append(html);
    });
    /* Add dynamic fields -- textarea
    ====================================== */
    var id = 1;
    $('#directionButton').click(function(e) {
      id++;
      e.preventDefault();
      let html = '';
      html += '<div class="form-group row" id="entry'+id+'">';
      html += '<div class="col-9 col-sm-9">';
      html += '<textarea name="step[]" rows="1" class="input"></textarea></div>';
      html += '<div class="col-1 col-sm-1">';
      html += '<span class="btn btn-sm remove-item btn-bg-color" id="'+id+'"><i class="fas fa-minus"></i></span></div></div>';
      $('#directionField').append(html);
    });
    /* remove dynamic create field */
    $(document).on('click', '.remove-item', function() {
      let button = $(this).attr("id");
      $('#entry'+button+'').remove();
    });
    /* custom file name upload photo */
    $('.input-file').change(function(e) {
      $(this).siblings('input[type="text"]').val(e.target.files[0].name);
    });
  });
  /* rating system
  ======================================= */
  $('#rating span').on('click', function() {
    let ratedIndex = parseInt($(this).data('index'), 10); // The rated star
    let currentIndex = $(this).parent().children('span.star');

    for(let i = 0; i < currentIndex.length; i++) {
      $(currentIndex[i]).removeClass('selected');
    }
    for (let i = 0; i < ratedIndex; i++) {
      $(currentIndex[i]).addClass('selected');
    }
  });
