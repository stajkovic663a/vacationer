//andreas

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
        dayClick: function(date, jsEvent, calEvent) {
          //alert(date.format("DD-MM-YYYY") + ' ausgewählt');
          $('#exampleModal').modal('show');
          console.log('funzt');
        },
        select: function(startDate, endDate) {
          //alert('Vom ' + startDate.format("DD-MM-YYYY") + ' bis zum ' + endDate.subtract(1, "days").format("DD-MM-YYYY") + ' ausgewählt.');
          console.log('funzt2');
        },
        //Funktion [vorhandes event info return mittels alert]
          defaultDate: $.datepicker.formatDate('yy/mm/dd', new Date()),
          events: [
            {
              title: 'First event',
              start: '2018-05-04',
            }
          ],
          eventClick: function(eventObj) {
            //alert(eventObj.title + ' am ' + eventObj.start.format("DD-MM-YYYY"));
            console.log('funzt3');
        }
        //
    });
});

/*$(function() {
    $('#calendar').fullCalendar({
        defaultDate: '2018-05-04',
        defaultView: 'agendaWeek',
        events: [
          {
            start: '2018-05-04T10:00:00',
            end: '2018-05-08T16:00:00',
            rendering: 'background'
          }
        ]
      });
});*/