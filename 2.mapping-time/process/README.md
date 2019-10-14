## Process

Description of the contents of this folder and the logic of your data → retinal variables mapping.

1) Triange A / B explore using shape, size, value, and hue to indicate time
    - Triangle A is an equilateral triangle in which the segment corresponds to the seconds, minutes, or hours
    - Segments are dotted = the quantity of dots in the given category
    - EX. seconds segment has 60 dots 
    - value is utilized to depict how far each segment is along its time value

2) Triangle B
    - Instead of just one triangle, now the sketch has three
    - the inner most triangle corresponds to seconds
    - the middle to minutes
    - the outer to hours
    - the value of the stroke along the path indicates time
    -stroke could either be solid or dotted
    
2) Square
    -The Square sketch implements scale in accordance with a circle shape
    - smallest circle = seconds
    - middle circle = minutes
    - large circle = hours
    -All circles follow the path of the square and their speed corresponds to the time

3) The circle sketch idea is similar to the square 
    - Uses opacity along the circles stroke path to indicate time
   - smallest circle = seconds
    - middle circle = minutes
    - large circle = hours 
    - filled circles rotate according to time

4. Circle Projection mainly itlizes color and texture to indicate time
    -Initializing the time in a standard way the embedded pie chart reflects the hours and minutes
    -seconds are shown in a thin stroke

5. Circle projection 2 is similar however now instead of utilizing the pie chart aesthetic a triangular shape is used
6. Keyboard grid allows for a flexible system of shape and texture representation 
    -seconds = cirlce 
    -seconds move along a 12 X 5 grid one circle each second
    - minutes are represented in a filled in square 
    - one filled in square = 1 minutes
    - hours are then shown starting at the babseline of the grid and filling in a complete row 
    - 1 row = 1 hour