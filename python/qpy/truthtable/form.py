from questionpy.form import (
    FormModel,
    text_input,
    checkbox,
    is_checked,
    is_not_checked,
    radio_group,
    OptionEnum,
    option,
    group,
)


class GeneratedFormulaOptions(FormModel):
    variables = text_input("Variablen")


class CustomFormula(FormModel):
    formula = text_input("Formel", placeholder="~(qp)+y")


class DisplayFormat(OptionEnum):
    SYMBOLICAL = option("symbolisch", selected=True)
    MATHEMATICAL = option("mathematisch")


class MyModel(FormModel):
    display_format = radio_group("Format", DisplayFormat, required=True)
    generate_formula = checkbox("Formel generieren")
    custom_formula = group("", CustomFormula, hide_if=is_checked("generate_formula"))
    generated_formula_options = group("Formel Optionen", GeneratedFormulaOptions, hide_if=is_not_checked("generate_formula"))
