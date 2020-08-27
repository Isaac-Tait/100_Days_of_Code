An example tetromino mapping on line 4 and how it breaks down into X & Y coordinates:

width=10

    [width*2+2, width+1, width*2+1, 2, 1]

    [22, 11, 21, 02, 01]

    [(2,2),(1,1),(2,1),(0,2),(0,1)]

[0,1][0,1][0,2]
[1,0][1,1][1,2]
[2,0][2,1][2,2]

Line 5 would draw a "d"