// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery3
//= require popper
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
// require_tree .
//= require user
//= require problem

$(document).ready(function () {
  $('#flashF').on('click', function () {
    $(this).hide();
  });
  $('#mainImage').on('click', function () {
    alert('Робоче місце по роботі з претензіями дозволить ' +
	'кожному працівнику, який розглядає претензії отримати інформацію про кількість претензій та причіни звернення конкретного клієнта, ' +
	'проводити глибокий аналіз претензій клієнтів ТОВ “Нова Пошта” та ' +
	' вести статистику претензій.');
  })


});
