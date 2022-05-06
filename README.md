# 11056-project2

## Reflection

For this project, I have created the first stage of a website that shares information about different types of crystals. 

### Process

After downloading the starter template on to my device. I began by first setting up and adjusting the footer as it was a simple place to start. From there I added a navigation bar and then designed the homepage. And moved onto working on the About page.

For the CSS on this website, I adjusted the pre-existing CSS so elements of the footer could be separated from the header as they were initially following the same CSS.


### Challenges

I challenge that I faced with this project was the CSS not reflecting on the about page. After some research I was able to solve this issue through the _head.html page. 

I changed the link for CSS from -

<link rel="stylesheet" href="{{ 'assets/css/styles.css' }}">

to

<link rel="stylesheet" href="{{ '/assets/css/styles.css' }}">

and was able to see the changes I was making on CSS for the about page. 
