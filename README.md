# day-calendar
View project at https://kiraknowsbest.github.io/day-calendar/ and 
open your browser's console to customize events.

A calendar that displays events for the day. 

Using the console in your browser, you can 
invoke the layOutDay function which accepts 
an array of objects. The objects are required 
to have properties of "start" and "end" to 
display. 

"start" and "end" are integers of 
the number of minutes the event starts or 
ends after 9:00 am. Example(in console):

layOutDay([{"start":60, "end": 120}]) 

This would display one event beginning at 
10:00 am and last until 11:00 am. Additionally, 
the events can also contain the properties 
"title" and "location" to provide more 
information. Example(in console):

layOutDay([{"start":30, "end": 120, "location":"Market Street", "title":"watch street performer"}])

This would display one event beginning at 
9:30 am and last until 11:00 am with a title 
of "watch street performer" and list the 
location as "Market Street".
