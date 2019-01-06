import $ from 'jquery';
import 'fullcalendar';
import 'jquery-circle-progress';

$(function() {
    var containerEl = $('#calendar');

    containerEl.fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listWeek'

        },
        defaultDate: '2019-02-5',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        fixedWeekCount: false,
        dayRender: function(date, cell){
            return $(cell).load("/src/elements/cell.html",null,function(){
                $(this).find("h1").text(date.date());
                if(!$(this).hasClass('fc-other-month')) {
                    $(this).find('div.dateProg').circleProgress({
                        value: 0.75,
                        size: 80,
                        fill: {
                            gradient: ["red", "orange"]
                        }
                    });
                }else{
                    $(this).find("h1").addClass('dateGray');
                }
            });
        },
        events: [
            {
                title: 'All Day Event',
                start: '2019-01-01',

            },
            {
                title: 'Long Event',
                start: '2019-01-07',
                end: '2019-01-10'

            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2019-01-09T16:00:00'

            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2019-01-16T16:00:00'

            },
            {
                title: 'Conference',
                start: '2019-01-11',
                end: '2019-01-13'

            },
            {
                title: 'Meeting',
                start: '2019-01-12T14:30:00'

            },
            {
                title: 'Happy Hour',
                start: '2019-01-12T17:30:00'

            },
            {
                title: 'Dinner',
                start: '2019-01-12T20:00:00'

            },
            {
                title: 'Birthday Party',
                start: '2019-01-13T07:00:00'

            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2019-01-28'

            }
        ]
    })
});
