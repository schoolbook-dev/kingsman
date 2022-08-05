module.exports = {
  schema: {
    definitions: {
      who: {
        title: "При каком условии показываем финишер",
        type: "string",
        anyOf: [
          {
            type: "string",
            enum: ["finish_by_student"],
            title: "Завершено учеником",
          },
          {
            type: "string",
            enum: ["finish_by_teacher"],
            title: "Завершено учителем досрочно",
          },
          {
            type: "string",
            enum: ["finish_by_time"],
            title: "Вышло время",
          },
          {
            type: "string",
            enum: ["finish_not_all_solved"],
            title: "Не все задачи решены",
          },
        ],
      },
    },
    title: "Заполнение финишера",
    type: "object",
    properties: {
      type: "array",
      items: {
        type: "object",
        required: ["title"],
        properties: {
          items: {
            $ref: "#/definitions/who",
          },
          title: {
            type: "string",
            title: "Заголовок занятия",
          },
          desc: {
            type: "string",
            title: "Описание занятия",
          },
          image: {
            type: "string",
            title: "ссылка на картинку",
            format: "uri",
            // default: "https://e7n.s3.yandex.net/static/lib/math/supp/Rectangle1.png",
          },
          format: {
            type: "string",
            title:
              "с какой стороны от текста расположена картинка. Возможные значения: left/right",
            enum: ["left", "right"],
          },
          resource_type: {
            type: "string",
            title:
              "Тип изображения на стартере (для картинок - img, для видео - video)",
            enum: ["img", "video"],
          },
          textColor: {
            title: "Цвет текста",
            type: "string",
          },
          button: {
            title: "Цвет кнопки",
            type: "string",
          },
          bg_color_value: {
            type: "string",
            title: "Цвет фона",
          },
          navigation_block: {
            type: "string",
            title: "переопределение навигации, markdown",
          },
        },
      },
      override_by_score: {
        type: "array",
        items: {
          type: "object",
          required: ["title"],
          properties: {
            integer: {
              title: "количество правильно решенных карточек",
              type: "integer",
            },
            title: {
              type: "string",
              title: "Заголовок занятия",
            },
            desc: {
              type: "string",
              title: "Описание занятия",
            },
            image: {
              type: "string",
              title: "ссылка на картинку",
              format: "uri",
              // default: "https://e7n.s3.yandex.net/static/lib/math/supp/Rectangle1.png",
            },
            format: {
              type: "string",
              title:
                "с какой стороны от текста расположена картинка. Возможные значения: left/right",
              enum: ["left", "right"],
            },
            resource_type: {
              type: "string",
              title:
                "Тип изображения на стартере (для картинок - img, для видео - video)",
              enum: ["img", "video"],
            },
            textColor: {
              title: "Цвет текста",
              type: "string",
            },
            button: {
              title: "Цвет кнопки",
              type: "string",
            },
            bg_color_value: {
              type: "string",
              title: "Цвет фона",
            },
            navigation_block: {
              type: "string",
              title: "переопределение навигации, markdown",
            },
          },
        },
      },
    },
  },
  uiSchema: {
    tasks: {
      items: {
        desc: {
          "ui:widget": "textarea",
          "ui:options": {
            rows: 5,
          },
        },
      },
    },
  },

  formData: {},
};
