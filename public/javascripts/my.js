$(function() {
    $('#calendar').fullCalendar({
        //standardkalendaransicht
        defaultView: 'month',
        //aktueller tag
        defaultDate: $.datepicker.formatDate('yy/mm/dd', new Date()),
        //Design [hoehe]
        height: 575,
        //Funktion [bereich oder tag (von - bis) auswaehlen]
        selectable: true,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
        },
        select: function(startDate, endDate) {
          $('#datumvon').val(startDate.format("DD-MM-YYYY"));
          $('#datumbis').val(endDate.subtract(1, "days").format("DD-MM-YYYY"));
          $('#exampleModal').modal('show');
        },
        //Funktion [vorhandes event info return]
          events: [
            {
              title: '',
              start: '',
              end: '',
              employee: ''
            }
          ],
          eventClick: function(eventObj) {
            title: $('#msg').val();
            start: $('#datumvon').val();
            end: $('#datumbis').val();
        }
    });
});

$('#btnAdd').click(function(){
  
});