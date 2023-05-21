// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  let todayDate = moment().format('dddd, MMM YYYY')
  $('#currentDay').html(todayDate)
  $('.saveBtn').on('click', function () {
    let text = $(this).siblings('.description')
    console.log(text)
    let hour = $(this).parent().attr('id')
    localStorage.setItem(hour, text.val())
    console.log($(this).parent().attr('id'))
  })

  function hourTracker() {
    let currentHour = moment().hour()

    $('.time-block').each(function () {
      let blockHour = parseInt($(this).attr('id').split('hour')[1])

      if (blockHour < currentHour) {
        $(this).removeClass('future')
        $(this).removeClass('present')
        $(this).addClass('past')
      }
      else if (blockHour === currentHour) {
        $(this).removeClass('past')
        $(this).removeClass('future')
        $(this).addClass('present')
      }
      else {
        $(this).removeClass('present')
        $(this).removeClass('past')
        $(this).addClass('future')
      }
    })

  }
  $('#currentDay').text(dayjs().format('MMMM DD, YYYY'))


});

$('#hour9 .description').val(localStorage.getItem('#hour9'))
$('#hour10 .description').val(localStorage.getItem('hour10'))
$('#hour11 .description').val(localStorage.getItem('hour11'))
$('#hour12 .description').val(localStorage.getItem('hour12'))
$('#hour13 .description').val(localStorage.getItem('hour13'))
$('#hour14 .description').val(localStorage.getItem('hour14'))
$('#hour15 .description').val(localStorage.getItem('hour15'))
$('#hour16 .description').val(localStorage.getItem('hour16'))
$('#hour17 .description').val(localStorage.getItem('hour17'))


hourTracker()
