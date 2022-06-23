module.exports = {
  schema: {
    title: "Проверка MULTIUNION (числа)",
    description: "Мультимножество чисел, которое ввёл ученик, совпадает с ожидаемым",
    type: "object",
    properties: {
      "items": {
        "type": "array",
        "items": {
          "type": "number",
        },
        "minItems": 2,
      }
    },
    "additionalProperties": false,
    "required": [
      "items"
    ]
  },
  formData: {
    "items": [1, 2],
  },
  uiSchema: {},
  transform: ({items}) => {
    return {
      "type": "EQUAL",
      "sources": [
        {
          "type": "MULTIUNION",
          "sources": items.map((_, idx) => ({
              "type": "INPUT",
              "source": idx + 1
            })
          ),
        },
        {
          "type": "MULTIUNION",
          "sources": items.map((item) => ({
              "type": "NUMBER",
              "source": item
            })
          )
        }
      ]
    }
  }
};
