from . import parse_string_to_sympy, BoraException


def repl():
    import readline

    while True:
        try:
            string = input("> ")
            parsed = parse_string_to_sympy(string)
            print(parsed)
        except BoraException as e:
            print(e)
        except (KeyboardInterrupt, EOFError):
            break
        finally:
            print()


if __name__ == "__main__":
    repl()
