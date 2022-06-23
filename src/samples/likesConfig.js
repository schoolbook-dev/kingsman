module.exports = {
  schema: {
    title: "Конфигурация стикеров-лайков",
    description: "order – порядок, items – описание стикеров",
    type: "object",
    properties: {
      "order": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "items": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "slug": {
              "type": "string"
            },
            "resource_id": {
              "type": "integer"
            }
          },
          "additionalProperties": false,
          "required": [
            "slug",
            "resource_id"
          ]
        }
      }
    },
    "additionalProperties": false,
    "required": [
      "order",
      "items"
    ]
  },
  formData: {
    "order": [
      "heart",
      "smile",
      "think",
      "sleep",
      "angry"
    ],
    "items": [
      {
        "slug": "smile",
        "resource_id": 262702
      },
      {
        "slug": "heart",
        "resource_id": 262700
      },
      {
        "slug": "sleep",
        "resource_id": 262701
      },
      {
        "slug": "think",
        "resource_id": 262703
      },
      {
        "slug": "angry",
        "resource_id": 262699
      }
    ]
  },
  uiSchema: {},
};
