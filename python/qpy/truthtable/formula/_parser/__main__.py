from . import parse_string_to_sympy

if __name__ == "__main__":
    import readline

    while True:
        try:
            string = input("> ")
            parsed = parse_string_to_sympy(string)
            print(parsed)
        except (KeyboardInterrupt, EOFError):
            break
        finally:
            print()
