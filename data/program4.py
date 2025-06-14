marks = int(input("Enter your marks: "))
if marks > 85 and marks<=100:
    print("Congrats! You scored grade A...")
elif marks > 60 and marks<=85:
    print("You scored grade B...")
elif marks > 40 and marks<=60:
    print("You scored grade C...")
else:
    print("Sorry you are fail...")