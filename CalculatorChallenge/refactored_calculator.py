import argparse

class Calculator:
    def add(self, a, b):
        return a + b

    def subtract(self, a, b):
        return a - b

    def multiply(self, a, b):
        return a * b

    def divide(self, a, b):
        if b == 0:
            raise ValueError("Cannot divide by zero.")
        return a / b

def main():
    parser = argparse.ArgumentParser(description="A basic calculator.")
    parser.add_argument("num1", type=float, help="First number")
    parser.add_argument("operation", choices=["+", "-", "*", "/"], help="Operation (+, -, *, /)")
    parser.add_argument("num2", type=float, help="Second number")
    args = parser.parse_args()

    calc = Calculator()
    try:
        if args.operation == "+":
            result = calc.add(args.num1, args.num2)
        elif args.operation == "-":
            result = calc.subtract(args.num1, args.num2)
        elif args.operation == "*":
            result = calc.multiply(args.num1, args.num2)
        elif args.operation == "/":
            result = calc.divide(args.num1, args.num2)

        print(f"✅ Result: {args.num1} {args.operation} {args.num2} = {result}")
    except ValueError as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    main()