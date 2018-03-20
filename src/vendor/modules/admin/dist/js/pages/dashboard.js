/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/
$(document).ready(function() {
  $('.flat-red').iCheck({
    checkboxClass: 'icheckbox_flat-green',
    radioClass   : 'iradio_flat-green'
   });

  $("#check-all").on('ifChanged ifClicked', function (e) {
      if (this.checked) {
        $(".is-checked").each(function() {
            this.checked=true;
        });
      } else {
        $(".is-checked").each(function() {
            this.checked=false;
        });
      }
  });
});