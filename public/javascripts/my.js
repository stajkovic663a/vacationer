$(function() {
    $('#calendar').fullCalendar({
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
          //alert('Vom ' + startDate.format("DD-MM-YYYY") + ' bis zum ' + endDate.subtract(1, "days").format("DD-MM-YYYY") + ' ausgewählt.');
          $('#datumvon').val(startDate.format("DD-MM-YYYY"));
          $('#datumbis').val(endDate.subtract(1, "days").format("DD-MM-YYYY"));
          $('#exampleModal').modal('show');
        },
        //Funktion [vorhandes event info return mittels alert]
          defaultDate: $.datepicker.formatDate('yy/mm/dd', new Date()),
          events: [
            {
              title: 'First event',
              start: '',
            }
          ],
          eventClick: function(eventObj) {
            //alert(eventObj.title + ' am ' + eventObj.start.format("DD-MM-YYYY"));
            console.log('funzt3');
        }
        //
    });
});

$('#btnAdd').click(function(){
//add
});