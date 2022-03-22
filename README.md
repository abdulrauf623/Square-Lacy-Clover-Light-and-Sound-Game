# Pre-work - *Square Lacy Clover Light And Sound Game*

**Square Lacy Clover Light And Sound Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Abdul Rauf Abdul Karim**

Time spent: **12** hours spent in total

Link to code of project: (https://glitch.com/edit/#!/square-lacy-clover)
Link to Live Site: https://square-lacy-clover.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)


## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![Codepath SITE prework](https://user-images.githubusercontent.com/82411397/159367246-fe3aca75-d299-4b85-9109-9e62171930d3.gif)

![Codepath SITE Prework Pattern Changes after each game](https://user-images.githubusercontent.com/82411397/159367307-98797c6b-b3ae-4ce2-bfe2-2fed9879afa5.gif)

![Codepath SITE Prework 3 mistakes means lose](https://user-images.githubusercontent.com/82411397/159367364-735ce099-fd95-40a4-96ef-d7d9895e1b04.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
Apart from the resources listed on the Prework instruction page :
glitch.com for creating the whole HTML, CSS and JavaScript codes
Rapidtables.com for finding which colors to choose for the buttons
cssreference.io to find CSS references 
the-art-of-web.com to better understand how the soundplayer javascript file works
apart from the above, I consulted Youtube to find out how to write generate random numbers in javascript to be able to write the function that changes the pattern each time the programn is run. (Youtube Channel Used: Dcode, Video: How to Generate Random numbers in Javascript)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The main challenge I encountered in creating this program was understanding the how the following work together to create a unique sound to be used for each button.
AudioContext, webkitAudioContext, createOscillator, createGain(), connect (context.destination), gain.setBValueAtTime(0, currentTime). After reading what is on the page the-art-of-web.com/javascript/creating-sounds/, I realized AudioContext is a library in Javascript that allows programmers to create sounds by inputting the desired frequency of oscillation. It provides the oscillator node, gain node and others to help create a unique sound. It also provides public methods like play(), stop(), setFrequency() etc to be able to control the sounds produced by the library.
The next challenge was adding the sound to the button and creating the sequences of sounds on the buttons and repeating those sequences after the user plays their guesses. After reading the code written in the playSingleClue(), playClueSequence(), startTone(), stopTone(), playTone() functions, I realized the connection between all of them to help the program create sound and assign each sound to each button. Figuring out that the freqMap constant contains different frequencies for different sounds was very helpful to change the frequencies to values that match my preferences. 
Also, after completing the required steps, I decided to try out a couple of the optional features to better understand how the game works. I found creating the random pattern very confusing at first. Since it was my first time writing in Javascript, I could not figure out how to translate my idea into Javascript code. After watching a couple of youtube videos, I figured out how to translate my idea into code and where to place the function I write for the function to be able to find the random pattern created every time the user restarts the game.
The css and html files did not prove much of a challenge. But sometimes, forgetting to bring the #, :active and .lit in the css file made my code a little buggy. But those were very easy bugs to spot.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
Working on this project, the biggest questions that kept popping up in my head was “Do Web Developers have to memorize all these HTML attributes and CSS sequences” and “How Does A Web Developer know the exact HTML tag or attribute that does exactly what they want to do. How does a Web Developer know the exact CSS sequences, color combination, fonts style and a lot more styles to suit his preferences for the program? Are there other technologies that build on HTML, CSS and Javascript that makes writing codes very easy? How does a Web Developer find the exact library ( AudioContext in this case) to be able to made the desired features for a web page?”
The only answer I could think of was “maybe by working on many projects, one gets very familiar with as many HTML, CSS and Javascript features as possible. So one would not need to search extensively to be able to find what one needs to complete a particular. And sometimes, looking up things become very necessary when one wants to implement a new feature they’ve not tried before. In this case, previous knowledge and experience will help guide the developer as to which path to follow to find the answers.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
Working on this project made me realize how powerful HTML, CSS and Javascript could be when working together. If I had more time, I would improve the aesthetics of the webpage by adding animated images in the background. I would also add a feature that would allow the user to change the background image, color or animation if they wish to. I would also spend time researching on how to add a voice in the background so that instead of printing prompt that tells the user the number of guesses they have left to lose the game; the voice would rather read the prompt to the user. I would add points to the game and add a feature (like a database) that would store the users progress and print his scores depending on which is highest.  I would make levels for the game and increase the difficulty depending on the player’s choice.
There are endless options to explore to make the game more interactive and more fun for the users.




## Interview Recording URL Link
https://drive.google.com/file/d/1LJ2EPRChKhVSelOIBeaYUM-MdA8D42UM/view?usp=sharing



## License

    Copyright [Abdul Rauf Abdul Karim]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
