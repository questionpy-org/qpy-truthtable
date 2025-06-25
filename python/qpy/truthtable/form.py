from pydantic import field_validator
from pydantic_core.core_schema import ValidationInfo

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

    @field_validator("custom_formula", mode="after")
    @classmethod
    def validate_custom_formula(cls, value: CustomFormula, values: ValidationInfo):
        if not values.data.get("generate_formula", True) and not value.formula:
            raise ValueError("Bitte geben Sie eine Formel an.")
        return value

    @field_validator("generate_formula", mode="after")
    @classmethod
    def validate_generate_formula(cls, value: bool, _values: ValidationInfo):
        if value:
            raise ValueError("Formeln können derzeit nicht generiert werden.")
        return value
