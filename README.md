![](https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png)

# Single Page Application: MITTFLIX


## How the page works for users


### Main page (view & functionality)

1. All movies from API database are displayed according to the movie's genre. If a genre contains 0 movies, the genre will not show up.

2. Each movie could belong to more than one genre, therefore the same movie repeatedly appears in the associated genre column.

3. Top-left corner of the page's image of "MITTFLIX" is a link that brings back to initial page display.

4. "My List" next to the MITTFLIX is also a link that displays liked movies. Since the results are saved, page refresh or reopening of the app will not change the listed movies.


### Search Bar

5. Users can search movies by keywords by typing keywords into the top search bar next to My List. Movies that contain the keywords either in its title or the overview (plot) would show up nested in the genre. (i.e. If there is only one movie that fits the keyword(s), that one movie will show up in one or more different genres)

6. The search bar displays the results by each letter typed in. (i.e. If the first key pressed was an 'a', all movies that include the letter 'a' in title or overview will show up. When typed 'b' after it, making the search keyword 'ab', would render the results to movies that contain 'ab')

7. When users use backspace or delete to erase, the resulting movies will not be rendered by the newly read keyword. However, deleting the whole keyword in the search bar would bring to the very first, initial view page which is all the movies sorted by their genres.


### "+" button: add-to or remove-from my list button

8. Upon users' mouse pointer hover onto each movie (or its poster), a 'plus' button will show up. If the color is red, it means the movie has already been added to My List and can be clicked again to remove the movie from the list. If the color is grey, that means the movie is not in My List and can be added.

9. Fast clicking the + button would not work well, since the changes are applied with 0.5 second delay.

10. The + button would also work with the movies displayed inside My List.


### My List

11. Movies in My List are displayed side by side without their genre taps.

12. Users may also click on the + button of listed movies to remove from the list.


<br>


<u>*** note: node_modules is deleted from file ***</u>
