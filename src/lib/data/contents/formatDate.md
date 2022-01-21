---
category: Functions
---

# formatDate
Format a date using the Moment standard time format string.

#### Syntax
```
formatDate(date, text)
```

#### Examples
```
formatDate(now(), "MMMM D YYYY, HH:mm") == March 30 2010, 12:00
formatDate(now(), "YYYY/MM/DD, HH:mm") == 2010/03/30, 12:00
formatDate(now(), "MM/DD/YYYY, HH:mm") == 03/30/2010, 12:00
formatDate(now(), "HH:mm A") == 12:00 PM
formatDate(now(), "M/D/YY") == 3/30/10
```
