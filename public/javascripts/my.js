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
              title: 'Urlaub',
              start: '2018-05-01',
              end: '2018-05-05',
              employee: 'Spahic'
            }
          ],
          eventClick: function(eventObj) {
            alert(eventObj.employee + " hat vom " + eventObj.start.format("DD-MM-YYYY") + " bis zum " + eventObj.end.format("DD-MM-YYYY") + " " + eventObj.title + ".");
          }
    });
});

$('#btnAdd').click(function(eventObj){
  eventObj.title = $('#msg').val();
  eventObj.start = $('#datumvon').val();
  eventObj.end = $('#datumbis').val();
});