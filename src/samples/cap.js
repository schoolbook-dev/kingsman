module.exports = {
  schema: {
    title: "Шапка",
    type: "object",
    properties: {  
              desc: {
                type: "string",
                title: "desc",
              },
              tag_text: {
                type: "string",
              },
              tag_bg_collor: {
                type: "string",
              },
              tag_text_collor: {
                type: "string",
              },
              resource_type: {
                type: "string",
                title: "resource_type",
                enum: ["img", "video", "none"],
              },
              resource_url: {
                type: "string",
                format: "uri",
              },
              theme: {
                type: "string",
                title: "theme",
                enum: ["light", "dark"],
              },
              background_image: {
                type: "string",
                format: "uri",
              },
    },
  },
  uiSchema: {
      desc: {
        "ui:widget": "textarea",
        "ui:options": {
          rows: 5,
        },
      }, 
    },
  formData: {
  },
};