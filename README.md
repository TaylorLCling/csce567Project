# General Plan

* [This is the data source](https://www.admin.sc.gov/accountability-portal/state-salaries)

Here are some sample records:

```
GOVERNOR'S OFFICE	LEMOINE	 LEIGH	ADMINISTRATION-GOV OFFICE	$91,985.00 		$91,985.00 
GOVERNOR'S OFFICE	MCMASTER	 HENRY	AGENCY HEAD	$106,078.00 		$106,078.00 
GOVERNOR'S OFFICE	WALKER	 EDGAR	EXECUTIVE STAFF-GOV OFFICE	$165,000.00 		$165,000.00 
GOVERNOR'S OFFICE	WINDSOR	 TOMMY	ADMINISTRATION-GOV OFFICE	$50,400.00 		$50,400.00 
GOVERNOR'S OFFICE	QUATTRONE	 KRISTY	ADMINISTRATION-GOV OFFICE	$70,173.00 		$70,173.00 
```

The schema seems to be

* Name
* Agency
* Job Title
* Compensation without Bonuses
* Bonuses	Total Compensation

I think there are a couple of different things it would be interesting to look
at here

* Salary histogram by:

	* Office
	* Position

* Some way of comparing salary for a given position with respect to department.

	* Maybe a bubble chart like gap minder, with one axis being salary, one
	  axis being position, and color-coding the offices? 



# ASSIGNMENT INFORMATION
Points Possible: 100

PROJECT 1:

Interactive D3 Visualization (60%):

Choose a data set to transform into an interactive visualization using D3.
Submit project as repo on Github
Share repo with: psagona and torkian
Maintain a readme, must include data source and objective statement
Must be set up in format like homeworks (index.html, css, js, data)
Your visualization will be scored on the following (10pts each):

Clear and easy to understand
Creative and Unique
Useful to help understand complex data
Good design practices - labels, colors, formatting
Clear, useful, and intuitive interactive usage
Coding, i.e. good coding practices, free of errors…
Presentation (40%):

Your presentation will be scored on the following:

Properly communicate the following (20pts):
Tell us about your data set
Why did you choose this visualization?
Justify the methods of this visualization
Find the story in your data set
Organized and easy to follow (5pts)
Presenters have good understanding of the data and visualization methods (5pts)
Presentation done in a way that engages audience (5pts)
Presenters spoke clearly and effectively (5pts)
