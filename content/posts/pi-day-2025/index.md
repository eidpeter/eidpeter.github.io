---
title: "Happy Pi Day !"
date: 2025-03-14
description: "3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631..."
---

Today is Pi Day! That day of the year we celebrate a mathematical constant so irrational it could appoint its [horse as a consul in the Roman Senate](https://www.history.com/news/did-caligula-really-make-his-horse-a-consul). π (the sixteenth letter of the greek alphabet, spelled out as "pi") represents the ratio of a circle's circumference to its diameter. March 14th (03/14) is the obvious choice for Pi Day because 3.14 is the most famous approximation of π.

This holiday only works for those who are _forced_ to use the M-D-Y date format (since no one uses it by choice), as well as for the absolute chads that use the superior Y-M-D date format. For the rest of the world, it's just another Friday. We do have a Pi Approximation Day though, the 22nd of July (22/07), since the first few digits of the fraction are 3.142857. Close enough, but it doesn't hit the same as the American Pi Day.

So whatever your date format of choice (there is not really a choice to make here, Y-M-D should be your favorite), one thing is certain: today is the day we eat pie, recite digits, and do some good old-fashioned mathematics.

### Estimating Pi 

As an engineer, I am tempted to assume π=3 and call it a day. However, since it's Pi Day, the day we celebrate maths, I decided to present one the coolest ways to approximate π, that uses one of my favorite mathematical tools: the Monte Carlo method. Because who needs a deterministic and precise solution when you can randomly throw things until it's "good enough"?

But no, in all seriousness, Monte Carlo methods are a family of computational algorithms that use repeated random sampling to get numerical results. They are one of the most important concepts in modern science, and are widely used in various fields (physics, engineering, mathematics, biology, computer graphics, finance, ...) where other deterministic approaches are difficult or impossible.

Now, back to our main topic, here's how you can use a dartboard with a square surround (that should be mandatorily circumscribed about the circular dartboard) and some darts (a lot of them) to approximate the value of π:

1. Hang your square surround on the wall, and inscribe the circular dartboard in it, such that the circumference of the circle touches the midpoints of the four sides of the square
2. Throw your darts randomly, scattered uniformly over the square (don't try throwing a [nine-darter](https://en.wikipedia.org/wiki/Nine-dart_finish), you're not [Phil Taylor](https://en.wikipedia.org/wiki/Phil_Taylor_(darts_player)))
3. Count how many darts land inside the circle versus the total number of darts thrown
4. Since the area of the circle is πr² and the area of the square is (2r)² = 4r², the ratio of darts inside the circle to the total number of darts (found in step 3) should approximate π/4. So, if you multiply this ratio by 4, you get an approximation of π!

Of course, this method relies on randomness, so if your results look more like 2.71 or 4.52, don’t panic, just throw more darts.

Since I don't have the required materials at hand, here is a p5.js sketch that recreates this experiment.

<script src="pi-monte-carlo-p5.js"></script>
<div id="sketch" style="text-align: center"></div>

And there you have it folks, a quick and chaotic way to approximate one of the most famous constants in mathematics. Sure, it's not the most precise method, but hey, it’s Pi Day! Take a moment to appreciate the beauty of π. It shows up in the strangest places: circles, physics, probability, and even [TeX's versioning system](https://en.wikipedia.org/wiki/Software_versioning#TeX).

So go out, play some darts, eat some pizza (many pizza places have special offers for Pi Day!), and have a happy Pi Day!


#### Go down the rabbit hole

- [Pi - Wikipedia](https://en.wikipedia.org/wiki/Pi)
- [Pi Day - Wikipedia](https://en.wikipedia.org/wiki/Pi_Day)
- [Monte Carlo method - Wikipedia](https://en.wikipedia.org/wiki/Monte_Carlo_method)